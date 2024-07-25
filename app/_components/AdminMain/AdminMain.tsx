import AdminTodaySale from "./AdminComponents/AdminTodaySale/AdminTodaySale";
import "./AdminMain.css";
import TopProducts from "./AdminComponents/TopProducts/TopProducts";

export default function AdminMain() {
  return (
    <section id="dashboard-home">
      <AdminTodaySale />
      <article id="visitor-insight"></article>
      <TopProducts />
      <article id="target-vs-reality"></article>
      <article id="total-revenue"></article>
      <article id="total-revenue1"></article>
      <article id="total-revenue2"></article>
    </section>
  );
}
