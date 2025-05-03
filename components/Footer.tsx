import { Play } from "lucide-react";
import Link from "next/link";

export default function Footer() {

    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-4 bg-white dark:bg-black">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                            <Play className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/3 -translate-y-1/2" />
                        </div>
                        <span className="text-xl font-bold">HarmoniQ</span>
                    </Link>
                    <p className="text-sm text-zinc-500">© {new Date().getFullYear()} HarmoniQ. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}