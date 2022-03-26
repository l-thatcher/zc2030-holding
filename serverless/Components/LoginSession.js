import { signIn, signOut, useSession } from "next-auth/react";
import { IoMdWallet } from "react-icons/io";
import Link from "next/link";

function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex ">
        {/*{session.user.name} <br/>*/}

        <button className=" mt-4 -ml-1 flex items-center text-sm font-medium  mr-6 text-white bg-[#9F0E3F] hover:bg-blue-800  font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2">
          <IoMdWallet className="" />

          <Link href="/wallet">
            <a className="text-white no-underline ">
              <span className="ml-1">Wallet</span>
            </a>
          </Link>
        </button>

        <button
          className=" mt-4 -ml-1 flex items-center text-sm font-medium text-white bg-green-500 hover:bg-green-400  font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2 "
          onClick={() =>
            signOut(null, {
              callbackUrl: "http://localhost:3000/registerRedirect",
            })
          }
        >
          <span className="ml-1">Sign out</span>
        </button>
      </div>
    );
  }
  return (
    <>
      {/*TODO: Remove In-Line Styling - Mix Bootstrap and External Styling?*/}
      <button
        className=" mt-4 -ml-1 flex items-center text-sm font-medium text-white bg-green-500 hover:bg-green-400  font-medium rounded-lg text-sm px-2 py-2.5 text-center mr-2 mb-2"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
export default LoginPage;
