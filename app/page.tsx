import { Signup } from "../components/Signup";

import Link from "next/link"
import { Play } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Creators } from "@/components/Creators";
import { Featured } from "@/components/Featured";
import { Main } from "@/components/Main";
import { Redirect } from "./components/Redirect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="">
      {/* <Redirect /> */}
      <div className="h-screen flex flex-col justify-between bg-white dark:bg-black text-zinc-900 dark:text-white">

        <Header />
        <Main />
        <Creators />
        <Footer />

        {/* <MusicPlayer /> */}
      </div>
    </main>
  );
}
