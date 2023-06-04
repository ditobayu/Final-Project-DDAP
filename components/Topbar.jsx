import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import SignOut from "./SignOut";
import Link from "next/link";

export const metadata = {
  title: "Login",
  description: "Generated by Pemuja GKM",
};

const Topbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-white flex flex-row justify-between items-center fixed px-8 h-20 w-full z-30">
      <div className="flex flex-row gap-4 items-center">
        <Link href={"/"} className="text-4xl font-semibold">
          <span className="text-green-400">Doo</span>-
          <span className="text-blue-400">IT</span>
        </Link>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Link href={"/dashboard/profile"}>Halo, {session.user.name}</Link>
        <Link href={"/dashboard/profile"}>
          <Image
            className="rounded-full"
            src={session.user.image}
            width={48}
            height={48}
            alt="Course Item"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
