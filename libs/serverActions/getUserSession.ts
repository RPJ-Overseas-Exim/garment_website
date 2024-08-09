"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function () {
  const session = await getServerSession(authOptions);

  return session;
}
