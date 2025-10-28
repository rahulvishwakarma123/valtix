import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/slices/loadingSlice";
import InvestmentModal from "../../components/Screen/UserPanel/InvestmentModal";
import PlanCard from "../../components/Screen/UserPanel/PlanCard";
import { getPackageInfo } from "../../api/user.api";

const InvestmentPage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [plans, setPlans] = useState([]);

  // Static data to fallback to in case the API fails
  const staticPlans = [
    {
      id: 1,
      title: "BASIC Plan",
      min: 50,
      max: 1000,
      profitPercentage: 8,
      limit: "Up to 3X",
      recommended: false,
      features: [
        "8% return on investment",
        "Investment range: $50 – $1000",
        "Profit limit: Up to 3X",
        "Limited support",
        "Basic access to features",
      ],
    },
    {
      id: 2,
      title: "STANDARD Plan",
      min: 1010,
      max: 5000,
      profitPercentage: 10,
      limit: "Up to 3X",
      recommended: true,
      features: [
        "10% return on investment",
        "Investment range: $1010 – $5,000",
        "Profit limit: Up to 3X",
        "Priority support",
        "Access to premium features",
      ],
    },
    {
      id: 3,
      title: "PREMIUM Plan",
      min: 5100,
      max: Infinity,
      profitPercentage: 12,
      limit: "Up to 3X",
      recommended: false,
      features: [
        "12% return on investment",
        "Investment range: $5,100 & Above",
        "Profit limit: Up to 3X",
        "24/7 support",
        "Full access to all features",
      ],
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const fetchPackageInfo = async () => {
    try {
      dispatch(setLoading(true));
      const response = await getPackageInfo();
      // Fallback to static data if API does not return any data
      setPlans(response?.data || staticPlans);
    } catch (error) {
      console.error("Error during wallet connection or payment:", error);
      // Use static data in case of error
      setPlans(staticPlans);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchPackageInfo();
  }, []);

  return (
    <div className="space-y-8 pt-4">
      <div>
        <h1 className="text-3xl font-bold text-white">Investment Plans</h1>
        <p className="text-slate-400 mt-1">
          Choose a plan that fits your strategy and start earning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} onSelect={handleSelectPlan} />
        ))}
      </div>

      {isModalOpen && (
        <InvestmentModal plan={selectedPlan} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default InvestmentPage;
