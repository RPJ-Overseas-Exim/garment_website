import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SignIn from "./SignIn";
import { redirect } from "next/navigation";

export default async function SignInForm() {
  // get the session
  const session = await getServerSession(authOptions);

  // if session then push user to the home page
  if (session) {
    return redirect("/");
  }

  return <SignIn />;
}
