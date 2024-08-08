import {
  authOptions,
  CustomSession,
} from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function loginIsRequiredServer() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/signin");
  }

  return session;
}

export async function loginIsRequiredAdmin() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/signin");
  }

  if ((session.user as CustomSession).role !== "admin") {
    return redirect("/signin");
  }

  return session;
}
