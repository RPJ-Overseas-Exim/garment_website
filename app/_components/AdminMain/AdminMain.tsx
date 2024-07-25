import AdminTodaySale from "./AdminComponents/AdminTodaySale/AdminTodaySale";
import "./AdminMain.css";
import TopProducts from "./AdminComponents/TopProducts/TopProducts";
import TargetvsReality from "./AdminComponents/TargetvsReality/TargetvsReality";
import VisiterInsight from "./AdminComponents/VisiterInsight/VisiterInsight";
import TotalRevenue from "./AdminComponents/TotalRevenue/TotalRevenue";

export default function AdminMain() {
  return (
    <section id="dashboard-home" className="dashboard-home">
      <AdminTodaySale />
      <VisiterInsight />
      <TopProducts />
      <TargetvsReality />
      <TotalRevenue />
      <div
        title="hidden"
        aria-hidden="true"
        className="dashboard-home__spacer"
      ></div>
    </section>
  );
}
