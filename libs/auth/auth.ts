import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";

export async function loginIsRequiredServer() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/signin");
  }
}

// export function loginIsRequiredClient() {
//   if (typeof window !== undefined) {
//     const session = useSession();
//     const router = useRouter();

//     if (!session) {
//       return router.push("/signin");
//     }
//   }
// }
