import { loginIsRequiredServer } from "@/libs/auth/auth";
import Logout from "./Logout";

export default async function Profile() {
  await loginIsRequiredServer();

  return (
    <main>
      <h2>Profile</h2>
      <Logout />
    </main>
  );
}
