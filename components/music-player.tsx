"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"
import Image from "next/image"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800">
      <div className="container flex items-center h-16">
        <div className="flex items-center gap-3 w-1/4">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Now playing"
            width={40}
            height={40}
            className="rounded-md"
          />
          <div className="min-w-0">
            <h4 className="font-medium text-sm truncate">Midnight Dreams</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 truncate">Luna Eclipse</p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-9 w-9 rounded-full bg-purple-600 text-white hover:bg-purple-700"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>

        <div className="w-1/4 flex items-center justify-end gap-2">
          <Volume2 className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          <Slider value={[75]} max={100} step={1} className="w-24" />
        </div>
      </div>
    </div>
  )
}
