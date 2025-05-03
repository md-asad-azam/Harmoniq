"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


export const Creators = () => {

    const router = useRouter()

    return (
        <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 text-purple-600 dark:text-purple-400 font-medium text-sm">
                            For Creators
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Share your music with the world</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                            Upload your tracks, build your audience, and connect with fans. Our platform gives you the tools to
                            grow your music career.
                        </p>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        onClick={() => {router.push("/not_implemented")}}
                        >
                            Start Creating
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 rounded-2xl blur-xl"></div>
                        <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                            <Image
                                src="https://images.unsplash.com/photo-1573120525707-4549889744f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Music creator"
                                width={600}
                                height={600}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}