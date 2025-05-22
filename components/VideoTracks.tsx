import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronUp, Heart, Play } from "lucide-react";
import axios from "axios";
import { Stream } from "@/app/lib/constants";


type VideoTrackProps = {
    videoTracks: Stream[],
    setVideoTracks: React.Dispatch<React.SetStateAction<Stream[]>>,
    sectionTitle: string
}

export const Videos = ({ videoTracks, setVideoTracks, sectionTitle }: VideoTrackProps) => {

    const handleUpvote = async (id: string, isUpvote: boolean) => {
        console.log(`isUpvote: ${isUpvote}`)
        setVideoTracks(prev =>
            prev.map(video =>
                video.id === id ? {
                    ...video,
                    upvotes: isUpvote ? video.upvotes + 1 : video.upvotes - 1,
                    haveUpvoted: !video.haveUpvoted,
                } : video).sort((a, b) => b.upvotes - a.upvotes)
        );

        axios.post(`/api/streams/${isUpvote ? 'upvote' : 'downvote'}`, {
            streamId: id
        })
    }

    return (
        <section className="py-12 container">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">{sectionTitle}</h2>
                <Link
                    href="#"
                    className="text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                    View All
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoTracks.map((track) => (
                    <div
                        key={track.id}
                        className="group relative overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                    >
                        <div className="h-80 overflow-hidden relative">
                            <Image
                                src={track.bigImg || "/placeholder.svg"}
                                alt={track.title}
                                layout="fill"
                                className="absolute top-0 left-0 z-0 object-cover transition-transform group-hover:scale-105"
                            />
                            <Button
                                size="icon"
                                className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Play className="h-6 w-6" />
                            </Button>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold line-clamp-1">{track.title}</h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{track.channel}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        className="flex items-center gap-1 text-zinc-500 hover:text-pink-500 dark:text-zinc-400 dark:hover:text-pink-500"
                                        onClick={() => handleUpvote(track.id, track.haveUpvoted ? false : true)}>
                                        <Heart className="h-4 w-4" fill={track.haveUpvoted ? "#ec4899" : ""} color={track.haveUpvoted ? "#ec4899" : "#71717a"} />
                                        <span className="text-xs">{track.upvotes}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}