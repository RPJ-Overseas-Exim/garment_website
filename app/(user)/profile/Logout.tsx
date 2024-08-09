"use client";
import revalidateUrl from "@/libs/serverActions/revalidateUrl";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

import { FaSignOutAlt } from "react-icons/fa";

export default function Logout() {
  const path = usePathname();

  const handleLogout = () => {
    signOut({ redirect: false });
    revalidateUrl(path);
    return;
  };
  return (
    <button
      onClick={() => handleLogout()}
      className="flex items-center gap-[0.2rem]"
    >
      <FaSignOutAlt />
      <span>Sign Out</span>
    </button>
  );
}
