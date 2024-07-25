import AdminTodaySale from "./AdminComponents/AdminTodaySale/AdminTodaySale";
import "./AdminMain.css";
import TopProducts from "./AdminComponents/TopProducts/TopProducts";
import TargetvsReality from "./AdminComponents/TargetvsReality/TargetvsReality";

export default function AdminMain() {
  return (
    <section id="dashboard-home">
      <AdminTodaySale />
      <article id="visitor-insight"></article>
      <TopProducts />
      <TargetvsReality />
      <article id="total-revenue"></article>
      <article id="total-revenue1"></article>
      <article id="total-revenue2"></article>
    </section>
  );
}
