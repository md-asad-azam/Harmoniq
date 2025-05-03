"use client"

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState } from "react";
import LinkModal from "./LinkModal";
import { signIn, useSession } from "next-auth/react";

export const Main = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const session = useSession()

    const handleDropOnClick = () => {
        if (!session.data?.user) { signIn() }
        else {setIsModalOpen(true)}
    }

    return (
        <section className="relative p-10">

            <LinkModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

            {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black"></div> */}
            {/* <div className="absolute -z-20 h-[500px] w-[500px] rounded-full bg-purple-700/10 dark:bg-purple-700/20 blur-[120px] -top-20 -right-20"></div> */}
            {/* <div className="absolute -z-20 h-[400px] w-[400px] rounded-full bg-pink-700/10 dark:bg-pink-700/20 blur-[100px] top-40 -left-20"></div> */}

            <div className="container relative">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                        Where{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            Music
                        </span>{" "}
                        Connects
                    </h1>
                    <p className="mb-10 text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
                        Upload your tracks, discover new artists, and engage with a community of music lovers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                            Start Listening
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
                            onClick={handleDropOnClick}
                        >
                            <Upload className="mr-2 h-4 w-4" /> Drop Music
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
