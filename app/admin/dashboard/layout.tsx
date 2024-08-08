import { loginIsRequiredAdmin } from "@/libs/auth/auth";
import AdminNavbar from "@/libs/components/AdminNavbar/AdminNavbar";
import AdminSidebar from "@/libs/components/AdminSidebar/AdminSidebar";

export const metadata = {
  title: "Dashboard",
};
export default async function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await loginIsRequiredAdmin();

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="w-full lg:w-[80%]">
        <AdminNavbar />
        <main className="overflow-y-auto h-[calc(100dvh - 140.36px)] md:h-[calc(100vh-75px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
