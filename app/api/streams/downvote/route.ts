import { Code_Forbidded } from "@/app/lib/constants";
import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


const DownvoteSchema = z.object({
    streamId: z.string()
})

export async function POST(req: NextRequest) {

    const session = await getServerSession()

    // TODO: You can get rid of the DB call here
    const user = await prismaClient.user.findFirst({
        where: {
            // TODO: finding a user based on the email is not a good idea we should use id.
            email: session?.user?.email ?? ""
        }
    })

    if (!user) {
        return NextResponse.json({
            message: "Unauthenticated user"
        }, {
            status: Code_Forbidded
        })
    }

    const data = DownvoteSchema.parse(await req.json())

    try {
        await prismaClient.upvote.delete({
            where: {
                userId_streamId: {
                    userId: user.id,
                    streamId: data.streamId
                }
            }
        })

    } catch (e) {
        console.error(e)
        return NextResponse.json({
            message: "Error while upvoting"
        }, {
            status: Code_Forbidded
        })
    }
}