"use client"

import { Videos } from "@/components/VideoTracks"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Main } from "@/components/Main"
import { useEffect, useState } from "react"
import axios from "axios"
import { Stream } from "../lib/constants"

const REFRESH_INTERVAL_MS = 10 * 1000
const FEATURED_TRACKS_COUNT = 6

export default function Dashboard() {

    const [streams, setStreams] = useState<Stream[]>([])
    const [myStreamsCount, setMyStreamsCount] = useState<number>(3)
    const [featurtedTracksCount, setFeaturtedTracksCount] = useState<number>(0)
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
        refreshStreams(myStreamsCount)
        getFeaturedTracks(FEATURED_TRACKS_COUNT)
        const interval = setInterval(() => { refreshStreams(myStreamsCount) }, REFRESH_INTERVAL_MS)
        return () => clearInterval(interval); // Clean up the interval on unmount
    }, [myStreamsCount])

    return <>
        <div className="h-screen flex flex-col justify-between">
            <Header />
            <Main />
            {streams.length > 0 ? <Videos videoTracks={streams} setVideoTracks={setStreams} setVideoCount={setMyStreamsCount} sectionTitle={"My Streams"} /> : <></>}
            {featuredTracks.length > 0 ? <Videos videoTracks={featuredTracks} setVideoTracks={setFeaturtedTracks} setVideoCount={setFeaturtedTracksCount} sectionTitle={"Featured Tracks"} /> : <></>}
            <Footer />
        </div>
    </>

}