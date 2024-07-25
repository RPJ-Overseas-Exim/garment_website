import "./TopProducts.css";
import dashColors from "@/libs/utils/styles/colors";

export default function TopProducts() {
  const colorsArray = Object.values(dashColors);
  const data = [
    {
      name: "Zolpidem",
      popularity: "70%",
      sales: "45%",
    },
    {
      name: "Clonazepam",
      popularity: "30%",
      sales: "100%",
    },
    {
      name: "Zolpidem",
      popularity: "70%",
      sales: "45%",
    },
    {
      name: "Clonazepam",
      popularity: "30%",
      sales: "100%",
    },
  ];

  return (
    <article id="top-products">
      <h2 className="dashboard-home__title">Top Products</h2>
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
          {data.map((product, index) => {
            const color = colorsArray[index % colorsArray.length];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Zolpidem</td>
                <td className=" justify-self-stretch">
                  <div className="relative">
                    <div
                      className={`top-products__popularity`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className="top-products__popularity-progress"
                      style={{
                        backgroundColor: color,
                        width: product.popularity,
                      }}
                    ></div>
                  </div>
                </td>
                <td
                  className="top-products__sales"
                  style={{
                    color: color,
                    border: "1px solid" + color,
                  }}
                >
                  {product.sales}
                  <div style={{ backgroundColor: color }}></div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
}
