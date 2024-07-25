import "./AdminTodaySale.css";
import { BiExport } from "react-icons/bi";
import { dashColorsRgb } from "@/libs/utils/styles/colors";

import { BsFillFileBarGraphFill } from "react-icons/bs";
import { RiStickyNoteFill } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";

export default function AdminTodaySale() {
  const opacity = 0.35;
  return (
    <article id="today-sale">
      {/* top section */}
      <div className="today-sale-title">
        <span className="title-summary">
          <h2 className="title dashboard-home__title">{"Today's Sales"}</h2>
          <p className="title-description">Sales Summary</p>
        </span>
        <button className="title-button">
          <BiExport />
          Export
        </button>
      </div>

      {/* bottom section */}
      <div className="bottom-section">
        {/* card section */}
        <div
          className="admin-card"
          style={{
            backgroundColor: `rgba(${dashColorsRgb["deepBlue"]}, ${opacity})`,
          }}
        >
          <span className="data">
            <span
              className="data__icon"
              style={{
                backgroundColor: `rgba(${dashColorsRgb["deepBlue"]}, 1)`,
              }}
            >
              <BsFillFileBarGraphFill />
            </span>

            <span className="data__amount">$1k</span>
          </span>

          <span className="data-desc">
            <span className="data-desc__label">Total Sales</span>

            <span className="data-desc__description">+8% from yesterday</span>
          </span>
        </div>

        <div
          className="admin-card"
          style={{
            backgroundColor: `rgba(${dashColorsRgb["lightGreen"]}, ${opacity})`,
          }}
        >
          <span className="data">
            <span
              className="data__icon"
              style={{
                backgroundColor: `rgba(${dashColorsRgb["lightGreen"]}, 1)`,
              }}
            >
              <RiStickyNoteFill />
            </span>

            <span className="data__amount">300</span>
          </span>

          <span className="data-desc">
            <span className="data-desc__label">Total Sales</span>

            <span className="data-desc__description">8% from yesterday</span>
          </span>
        </div>

        <div
          className="admin-card"
          style={{
            backgroundColor: `rgba(${dashColorsRgb["lavender"]}, ${opacity})`,
          }}
        >
          <span className="data">
            <span
              className="data__icon"
              style={{
                backgroundColor: `rgba(${dashColorsRgb["lavender"]}, 1)`,
              }}
            >
              <MdOutlineLocalOffer />
            </span>

            <span className="data__amount">5</span>
          </span>

          <span className="data-desc">
            <span className="data-desc__label">Total Sales</span>

            <span className="data-desc__description">8% from yesterday</span>
          </span>
        </div>

        <div
          className="admin-card"
          style={{
            backgroundColor: `rgba(${dashColorsRgb["lightOrange"]}, ${opacity})`,
          }}
        >
          <span className="data">
            <span
              className="data__icon"
              style={{
                backgroundColor: `rgba(${dashColorsRgb["lightOrange"]}, 1)`,
              }}
            >
              <IoMdPersonAdd />
            </span>

            <span className="data__amount">8</span>
          </span>

          <span className="data-desc">
            <span className="data-desc__label">Total Sales</span>

            <span className="data-desc__description">8% from yesterday</span>
          </span>
        </div>
      </div>
    </article>
  );
}
