import AdminNavbar from "@/libs/components/AdminNavbar/AdminNavbar";
import AdminSidebar from "@/libs/components/AdminSidebar/AdminSidebar";

export const metadata = {
  title: "Dashboard",
};
export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-dvh">
      <AdminSidebar />
      <div className="w-full lg:w-[80%]">
        <AdminNavbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
