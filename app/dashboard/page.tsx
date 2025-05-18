"use client"

import { Videos } from "@/components/VideoTracks"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Main } from "@/components/Main"
import { useEffect, useState } from "react"
import axios from "axios"
import { Stream } from "../lib/constants"

const REFRESH_INTERVAL_MS = 10 * 1000

export default function Dashboard() {

    const [streams, setStreams] = useState<Stream[]>([])

    async function refreshStreams() {
        try {
            const res = await axios.get<{ streams: Stream[]}>(`/api/streams/my`)
            setStreams(res.data.streams)
            console.log(res)
        } catch (e) {
            console.error("Failed to fetch streams", e);
        }
    }

    useEffect(() => {
        refreshStreams() // initial call
        const interval = setInterval(() => { refreshStreams() }, REFRESH_INTERVAL_MS)
        return () => clearInterval(interval); // Clean up the interval on unmount
    }, [])

    return <>
        <div className="h-screen flex flex-col justify-between">
            <Header />
            <Main />
            <Videos videoTracks={streams} sectionTitle={"Featured Tracks"} />
            <Footer />
        </div>
    </>

}


// Sample data - reduced to just 3 tracks
const featuredTracks = [
    {
        id: "1",
        type: "Youtube",
        url: "https://i.ytimg.com/vi/4adZ7AguVcw/maxresdefault.jpg",
        extractedId: "blah-blah",
        title: "Midnight Dreams",
        channel: "Luna Eclipse",
        smallImg: "https://i.ytimg.com/vi/4adZ7AguVcw/maxresdefault.jpg",
        bigImg: "https://i.ytimg.com/vi/4adZ7AguVcw/maxresdefault.jpg",
        active: true,
        userId: "dum dum",
        upvotes: 856,
        haveUpvoted: true
    },
    {
        id: "2",
        type: "Youtube",
        url: "https://i.ytimg.com/vi/hGOBIaGWoPk/maxresdefault.jpg",
        extractedId: "blah-blah",
        title: "Electric Waves",
        channel: "Neon Pulse",
        smallImg: "https://i.ytimg.com/vi/hGOBIaGWoPk/maxresdefault.jpg",
        bigImg: "https://i.ytimg.com/vi/hGOBIaGWoPk/maxresdefault.jpg",
        active: true,
        userId: "dum dum",
        upvotes: 621,
        haveUpvoted: true
    },
    {
        id: "3",
        type: "Youtube",
        url: "https://i.ytimg.com/vi/CmHfWSxt0UQ/maxresdefault.jpg",
        extractedId: "blah-blah",
        title: "Sunset Boulevard",
        channel: "Ocean Drive",
        smallImg: "https://i.ytimg.com/vi/CmHfWSxt0UQ/maxresdefault.jpg",
        bigImg: "https://i.ytimg.com/vi/CmHfWSxt0UQ/maxresdefault.jpg",
        active: true,
        userId: "dum dum",
        upvotes: 1500,
        haveUpvoted: true
    },
    {
        id: "4",
        type: "Youtube",
        url: "https://i.ytimg.com/vi/4adZ7AguVcw/maxresdefault.jpg",
        extractedId: "blah-blah",
        title: "Midnight Dreams",
        channel: "Luna Eclipse",
        smallImg: "https://i.ytimg.com/vi/4adZ7AguVcw/maxresdefault.jpg",
        bigImg: "https://i.ytimg.com/vi/4adZ7AguVcw/maxresdefault.jpg",
        active: true,
        userId: "dum dum",
        upvotes: 856,
        haveUpvoted: true
    },
    {
        id: "5",
        type: "Youtube",
        url: "https://i.ytimg.com/vi/hGOBIaGWoPk/maxresdefault.jpg",
        extractedId: "blah-blah",
        title: "Electric Waves",
        channel: "Neon Pulse",
        smallImg: "https://i.ytimg.com/vi/hGOBIaGWoPk/maxresdefault.jpg",
        bigImg: "https://i.ytimg.com/vi/hGOBIaGWoPk/maxresdefault.jpg",
        active: true,
        userId: "dum dum",
        upvotes: 621,
        haveUpvoted: true
    },
    {
        id: "6",
        type: "Youtube",
        url: "https://i.ytimg.com/vi/CmHfWSxt0UQ/maxresdefault.jpg",
        extractedId: "blah-blah",
        title: "Sunset Boulevard",
        channel: "Ocean Drive",
        smallImg: "https://i.ytimg.com/vi/CmHfWSxt0UQ/maxresdefault.jpg",
        bigImg: "https://i.ytimg.com/vi/CmHfWSxt0UQ/maxresdefault.jpg",
        active: true,
        userId: "dum dum",
        upvotes: 1500,
        haveUpvoted: true
    },
]