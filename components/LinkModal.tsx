"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";

type LinkModalProps = {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LinkModal({ isModalOpen, setIsModalOpen }: LinkModalProps) {
    const [link, setLink] = useState("");

    const addToQueue = () => {
        const res = axios.post("/api/streams", {
            creatorId: "d6d3acaf-7815-4a96-a3e6-b599b752fdf8",
            url: link
        })
        setLink("")
    }

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-300 dark:bg-gray-800 border-[1px] border-gray-500 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg text-black font-bold mb-4 dark:text-white">Add a Link</h2>

                        <input
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Enter YouTube URL"
                            className="w-full border border-gray-300 rounded p-2 mb-4 focus:ring-0"
                        />

                        <div className="flex justify-end space-x-2">
                            <Button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-900 rounded hover:bg-black"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={() => {
                                    console.log("Link saved:", link)
                                    addToQueue()
                                    setIsModalOpen(false)
                                }}
                                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            >
                                Add to Queue
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
