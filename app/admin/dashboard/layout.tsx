import AdminNavbar from "@/libs/components/AdminNavbar/AdminNavbar";

export const metadata = {
  title: "Dashboard",
};
export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <aside>{/* side bar */}</aside>
      <div>
        <AdminNavbar />
        <main>{children}</main>
      </div>
    </>
  );
}
