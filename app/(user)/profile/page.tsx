import { loginIsRequiredServer } from "@/libs/auth/auth";
import Logout from "./Logout";
import Link from "next/link";
import { CustomSession } from "@/app/api/auth/[...nextauth]/options";
import getUserSession from "@/libs/serverActions/getUserSession";

export default async function Profile() {
  await loginIsRequiredServer();
  const session = await getUserSession();

  return (
    <main className="profile w-[100%]">
      <div className="profile-container w-[80%] m-[auto] mt-[2rem] mb-[2rem] flex flex-col gap-[2rem] ">
        <h2 className="profile-title text-[1.4rem] text-[var(--text-dark)] font-[800] ">
          Profile
        </h2>

        <div className="profile-body flex flex-col gap-[1rem] md:flex-row flex-wrap items-center md:items-start w-full">
          <div className=" text-[1.2rem] font-[600] text-[var(--text-regular)] ">
            {(session?.user as CustomSession).username}
          </div>
          <div className=" p-[0.5em_1em] rounded-[0.5em] text-[var(--text-light)] bg-[var(--text-dark)] hover:bg-[var(--text-purple)]">
            <Logout />
          </div>

          {(session?.user as CustomSession).role === "admin" && (
            <Link
              href={"/admin/dashboard"}
              className=" p-[0.5em_1em] rounded-[0.5em] text-[var(--text-light)] hover:bg-[var(--text-purple)] bg-[var(--text-dark)]"
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
