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
            <Videos videoTracks={streams} setVideoTracks={setStreams} sectionTitle={"Featured Tracks"} />
            <Footer />
        </div>
    </>

}