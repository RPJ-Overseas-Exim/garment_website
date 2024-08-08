import AdminMain from "@/app/_components/AdminMain/AdminMain";
import { loginIsRequiredServer } from "@/libs/auth/auth";

export default async function page() {
  // await loginIsRequiredServer();

  return (
    <>
      <AdminMain />
    </>
  );
}
