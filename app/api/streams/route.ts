import { Code_BadRequest } from "@/app/lib/constants";
import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"

const YT_REGEX = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:m\.)?(?:youtu(?:be)?\.com\/(?:v\/|embed\/|watch(?:\/|\?v=))|youtu\.be\/)((?:\w|-){11})(?:\S+)?$/;

const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string().regex(YT_REGEX, "Invalid stream url")
})

export async function POST(req: NextRequest) {
    console.log("called")
    try {
        const data = CreateStreamSchema.parse(await req.json());
        const extractedId = data.url.split("?v=")[1]
        const stream = await prismaClient.stream.create({
            data: {
                userId: data.creatorId,
                url: data.url,
                extractedId,
                type: "Youtube"
            }
        })

        return NextResponse.json({
            message: "Stream added successfully.",
            id: stream.id
        })

    } catch (e) {
        console.error(e)
        return NextResponse.json({
            message: "Error while adding the stream!"
        }, {
            status: Code_BadRequest
        })
    }

}

export async function GET(req: NextRequest) {

    const creatorId = req.nextUrl.searchParams.get("creatorId")

    const streams = await prismaClient.stream.findMany({
        where: {
            userId: creatorId ?? ""
        }
    })

    return NextResponse.json(streams)
}