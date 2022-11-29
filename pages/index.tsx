import Link from "next/link";
import Logo from "../components/svgs/logo";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-row">
      {/* Main menu */}
      <div className="flex w-60 flex-none flex-col justify-between bg-black p-6 text-white">
        <div className="flex flex-col space-y-5">
          {/* Logo */}
          <div>
            <Link href="/" className="block px-2 py-6">
              <Logo />
            </Link>
          </div>

          <ul>
            <li>
              <Link href="/" className="bg-primary">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div>Button</div>
      </div>

      <div className="w-80">B</div>
      <div className="flex-1 bg-purple-300">C</div>
    </div>
  );
}
