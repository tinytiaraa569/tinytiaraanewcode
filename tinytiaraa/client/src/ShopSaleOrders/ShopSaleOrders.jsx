import DashboardHeader from "@/ShopDashboardPage/DashboardHeader";
import DashboardSideBar from "@/ShopDashboardPage/DashboardSideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopSaleLogin from "./ShopSaleLogin";
import ShopSaleDashboard from "./ShopSaleDashboard";

function ShopSaleOrders() {
  const dispatch = useDispatch();
  const { salesUser } = useSelector((state) => state.sales);
  console.log(salesUser)

  useEffect(() => {
    const savedUser = localStorage.getItem("salesUser");
    if (savedUser && !salesUser) {
      dispatch({ type: "SalesLoginSuccess", payload: JSON.parse(savedUser) });
    }
  }, []);

  return (
    <div>
      <DashboardHeader />
      <div className="w-full flex">
        <DashboardSideBar active={23} />
        {salesUser ? <ShopSaleDashboard /> : <ShopSaleLogin />}
      </div>
    </div>
  );
}

export default ShopSaleOrders;
