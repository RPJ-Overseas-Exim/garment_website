import { CustomSession } from "@/app/api/auth/[...nextauth]/options";
import { loginIsRequiredAdmin } from "@/libs/auth/auth";
import AdminNavbar from "@/libs/components/AdminNavbar/AdminNavbar";
import AdminSidebar from "@/libs/components/AdminSidebar/AdminSidebar";
export const metadata = {
  title: "Dashboard",
};
export default async function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await loginIsRequiredAdmin();

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="w-full lg:w-[80%]">
        <AdminNavbar
          username={(session?.user as CustomSession)?.username as string}
        />
        <main className="overflow-y-auto h-[calc(100dvh - 140.36px)] md:h-[calc(100vh-75px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
