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
    const [featuredTracks, setFeaturtedTracks] = useState<Stream[]>([])

    async function refreshStreams(limit = 3) {
        try {
            const res = await axios.get<{ streams: Stream[] }>(`/api/streams/my?limit=${limit}`)
            setStreams(res.data.streams)
        } catch (e) {
            console.error("Failed to fetch streams", e);
        }
    }

    async function getFeaturedTracks(limit = 3) {
        try {
            const res = await axios.get<{ streams: Stream[] }>(`/api/streams/featured?limit=${limit}`)
            setFeaturtedTracks(res.data.streams)
        } catch (e) {
            console.error("Failed to fetch streams", e);
        }
    }

    useEffect(() => {
        refreshStreams()
        getFeaturedTracks()
        const interval = setInterval(() => { refreshStreams() }, REFRESH_INTERVAL_MS)
        return () => clearInterval(interval); // Clean up the interval on unmount
    }, [])

    return <>
        <div className="h-screen flex flex-col justify-between">
            <Header />
            <Main />
            {streams.length > 0 ? <Videos videoTracks={streams} setVideoTracks={setStreams} sectionTitle={"My Streams"} /> : <></>}
            {featuredTracks.length > 0 ? <Videos videoTracks={featuredTracks} setVideoTracks={setFeaturtedTracks} sectionTitle={"Featured Tracks"} /> : <></>}
            <Footer />
        </div>
    </>

}