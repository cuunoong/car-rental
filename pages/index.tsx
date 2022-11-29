import Link from "next/link";
import MainMenu from "../components/main-menu";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-row font-inter">
      <MainMenu />

      <div className="w-80">B</div>
      <div className="flex-1 bg-purple-300">C</div>
    </div>
  );
}
