import { Play } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Signup } from "./Signup";

export default function Header() {
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/components/about" className="flex items-center gap-2">
                            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                                <Play className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/3 -translate-y-1/2" />
                            </div>
                            <span className="text-xl font-bold">HarmoniQ</span>
                        </Link>
                    </div>


                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        <Signup />
                    </div>
                </div>
            </header>
        </>

    )
}