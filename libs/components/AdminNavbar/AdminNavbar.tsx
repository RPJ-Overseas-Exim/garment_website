import Image from "next/image";
import "./AdminNavbar.css"
import { IoNotificationsOutline } from "react-icons/io5";

export default function AdminNavbar() {
  return (
    <nav>
      {/* Dashboard logo or name */}
      <h1>Dashboard</h1>

      {/* notifications icon */}
      <IoNotificationsOutline />


      {/* Profile section */}
      <Image src={"assets/images/admin navbar/profile.png"} alt={"Profile Image"} width={30} height={30} sizes="100%" />

    </nav>
  )
}
