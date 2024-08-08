import SignUpElement from "./SignUp";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function SignUpForm() {
  const session = await getServerSession();

  if (session) {
    return redirect("/");
  }

  return <SignUpElement />;
}
