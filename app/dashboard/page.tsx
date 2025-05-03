"use client"

import { Featured } from "@/components/Featured"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Main } from "@/components/Main"

export default function Dashboard() {


    return <>
        <div className="h-screen flex flex-col justify-between">
            <Header />
            <Main />
            <Featured featuredTracks={featuredTracks} />
            <Footer />
        </div>
    </>

}


// Sample data - reduced to just 3 tracks
const featuredTracks = [
    {
        id: 1,
        title: "Midnight Dreams",
        artist: "Luna Eclipse",
        coverUrl: "https://i.ytimg.com/vi/4adZ7AguVcw/maxresdefault.jpg",
        likes: "1.2k",
        upvotes: 856,
    },
    {
        id: 2,
        title: "Electric Waves",
        artist: "Neon Pulse",
        coverUrl: "https://i.ytimg.com/vi/hGOBIaGWoPk/maxresdefault.jpg",
        likes: "945",
        upvotes: 621,
    },
    {
        id: 3,
        title: "Sunset Boulevard",
        artist: "Ocean Drive",
        coverUrl: "https://i.ytimg.com/vi/CmHfWSxt0UQ/maxresdefault.jpg",
        likes: "2.3k",
        upvotes: 1.5,
    },
    {
        id: 4,
        title: "Electric Waves",
        artist: "Neon Pulse",
        coverUrl: "https://i.ytimg.com/vi/hGOBIaGWoPk/maxresdefault.jpg",
        likes: "945",
        upvotes: 621,
    },
    {
        id: 5,
        title: "Sunset Boulevard",
        artist: "Ocean Drive",
        coverUrl: "https://i.ytimg.com/vi/CmHfWSxt0UQ/maxresdefault.jpg",
        likes: "2.3k",
        upvotes: 1.5,
    },
    {
        id: 6,
        title: "Midnight Dreams",
        artist: "Luna Eclipse",
        coverUrl: "https://i.ytimg.com/vi/4adZ7AguVcw/maxresdefault.jpg",
        likes: "1.2k",
        upvotes: 856,
    },
]