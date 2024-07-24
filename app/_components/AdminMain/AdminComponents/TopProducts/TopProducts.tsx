import "./TopProducts.css";

export default function TopProducts() {
  return (
    <article id="top-products">
      <h2>Top Products</h2>
      <table className="top-products">
        <thead>
          <tr className="top-products__header">
            <th>#</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Zolpidem</td>
            <td>
              <div className={`top-products__popularity`}></div>
            </td>
            <td>
              <div className="top-products__sales">35%</div>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
