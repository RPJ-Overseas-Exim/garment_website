"use client";
import { FaChartPie } from "react-icons/fa";
import "./AdminSidebar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaBagShopping } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const path = usePathname();
  return (
    <aside className="admin-sidebar">
      <h1 className="sidebar__title">RPJ Garments</h1>
      <nav className="sidebar__nav">
        <ul>
          <li
            className={
              (path === "/admin/dashboard" && "active--nav-item") || ""
            }
          >
            <Link href="/" className="aside__nav-item">
              <FaChartPie className="nav-item__active" /> <span>Dashboard</span>
            </Link>
          </li>
          <li
            className={
              (path === "/admin/dashboard/orders" && "active--nav-item") || ""
            }
          >
            <Link href="/" className="aside__nav-item">
              <FiShoppingCart /> <span>Orders</span>
            </Link>
          </li>
          <li
            className={
              (path === "/admin/dashboard/sales" && "active--nav-item") || ""
            }
          >
            <Link href="/" className="aside__nav-item">
              <FaChartLine /> <span>Sales Report</span>
            </Link>
          </li>
          <li
            className={
              (path === "/admin/dashboard/products" && "active--nav-item") || ""
            }
          >
            <Link href="/" className="aside__nav-item">
              <FaBagShopping /> <span>Products</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
