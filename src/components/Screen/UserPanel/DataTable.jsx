/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import * as XLSX from "xlsx";
import Pagination from "./Pagination";
import { extractText } from "../../../utils/helper";

const DataTable = ({
  title,
  columns,
  data,
  pageSize = 10,
  dropdownFilters = [],
}) => {
  const [filters, setFilters] = useState({});
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const renderDropdownFilters = () => {
    return dropdownFilters.map((filterItem) => (
      <div
        className="flex flex-col text-white text-sm w-full md:w-auto"
        key={filterItem.accessor}
      >
        <label className="mb-1">{filterItem.label}</label>
        <select
          className="bg-slate-900 border border-slate-700 rounded px-2 py-1"
          value={filters[filterItem.accessor] || "all"}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              [filterItem.accessor]: e.target.value,
            }))
          }
        >
          <option value="all">All</option>
          {filterItem.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    ));
  };

  // Pehle data ko filter karein
  const filteredData = useMemo(() => {
    let filtered = data;

    // Apply text search filter
    if (filter) {
      const lowerCaseFilter = filter.toLowerCase();
      filtered = filtered?.filter((row) =>
        columns?.some((column) => {
          const content = column.searchValue
            ? column.searchValue(row)
            : row[column.accessor]?.toString();
          return content?.toLowerCase().includes(lowerCaseFilter);
        })
      );
    }

    // Apply dropdown filters
    Object.entries(filters).forEach(([accessor, selected]) => {
      if (selected === "all") return;

      filtered = filtered.filter((row) => {
        const col = columns.find((c) => c.accessor === accessor);
        const content = col?.searchValue
          ? col.searchValue(row)
          : row[accessor]?.toString().toLowerCase();

        return content === selected;
      });
    });

    return filtered;
  }, [data, filter, filters, columns]);

  // 3. Ab filtered data par pagination lagayein
  const totalPages = Math.ceil(filteredData?.length / pageSize);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredData?.slice(startIndex, startIndex + pageSize);
  }, [filteredData, currentPage, pageSize]);
  const exportToExcel = (rows) => {
    const formattedData = rows.map((row, index) => {
      const obj = {};

      columns.forEach((col) => {
        if (col.exportable === false) return; // ⛔️ Skip non-exportable columns

        let rawValue;
        if (col.cell) {
          try {
            rawValue = col.cell(row, index);
          } catch {
            rawValue = row[col.accessor];
          }
        } else {
          rawValue = row[col.accessor];
        }

        obj[col.header] = extractText(rawValue);
      });

      return obj;
    });

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, `${title || "data"}.xlsx`);
  };

  return (
    <div className="bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>

        {/* Search + Export Button container */}
        <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search table..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full sm:w-64 bg-slate-900/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
          </div>

          {renderDropdownFilters()}

          {/* Export Button */}
          <button
            onClick={() => exportToExcel(filteredData)}
            className="bg-blue-600 w-full md:w-auto hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition duration-200"
          >
            Export to Excel
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-xs text-slate-400 uppercase">
            <tr className="text-nowrap">
              {columns?.map((col) => (
                <th key={col.accessor} className={`p-3 ${col.className || ""}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* 4. Ab paginated data ko render karein */}
            {paginatedData?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-slate-700/50 hover:bg-slate-800/20 text-nowrap"
              >
                {columns?.map((col) => (
                  <td
                    key={col.accessor}
                    className={`p-3 ${col.className || ""}`}
                  >
                    {col.cell ? col.cell(row, rowIndex) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {paginatedData?.length === 0 && (
          <p className="text-center text-slate-400 py-8">No results found.</p>
        )}
      </div>

      {/* 5. Pagination component ko render karein agar ek se zyada page hain */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default DataTable;
