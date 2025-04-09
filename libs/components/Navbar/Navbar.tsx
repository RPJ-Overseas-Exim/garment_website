"use server";
import { getServerSession } from "next-auth";
import Menu from "./Menu";
import "./Navbar.css";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function Navbar() {
    // get the session details from the server
    const session = await getServerSession(authOptions);

    return (
        <nav className="primary-nav">
            <div className="container">
                {/* Logo element */}
                <h2 className="nav__logo">
                    <Link href={"/"} className="nav__logo-link">
                        Myus Enterprises
                    </Link>
                </h2>

                {/* menu section  */}
                <Menu userLoggedIn={session?.user?.email ? true : false} />
            </div>
        </nav>
    );
}
