import AdminTodaySale from "./AdminComponents/AdminTodaySale/AdminTodaySale";
import "./AdminMain.css";
import TopProducts from "./AdminComponents/TopProducts/TopProducts";
import TargetvsReality from "./AdminComponents/TargetvsReality/TargetvsReality";
import VisiterInsight from "./AdminComponents/VisiterInsight/VisiterInsight";

export default function AdminMain() {
  return (
    <section id="dashboard-home">
      <AdminTodaySale />
      <VisiterInsight />
      <TopProducts />
      <TargetvsReality />
      <article id="total-revenue"></article>
    </section>
  );
}
