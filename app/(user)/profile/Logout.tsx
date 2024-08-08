"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { FaSignOutAlt } from "react-icons/fa";

export default function Logout() {
  const router = useRouter();
  const handleLogout = () => {
    signOut({ redirect: false });
    router.push("/");
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
