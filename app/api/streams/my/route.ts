import { Code_Forbidded, Code_Ok } from "@/app/lib/constants";
import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const session = await getServerSession();
    
    const user = await prismaClient.user.findFirst({
        where: {
            email: session?.user?.email ?? ""
        }
    })

    if(!user) {
        return NextResponse.json({
            message: "Unauthenticated User"
        },
        {
            status: Code_Forbidded
        })
    }

    const { searchParams } = new URL(req.url)
    const limitParam = searchParams.get('limit')
    const limit = limitParam === '0' ? undefined : parseInt(limitParam as string)

    const streams = await prismaClient.stream.findMany({
        take: limit,
        where: {
            userId: user.id
        },
        include: {
            _count: {
                select: {
                    upvotes: true
                }
            },
            upvotes:{
                where: {
                    userId: user.id
                }
            }
        }
    })

    return NextResponse.json({
        streams: streams.map(({_count, ...rest}) => ({
            ...rest,
            upvotes:_count.upvotes,
            haveUpvoted: rest.upvotes.length ? true : false
        }))
    }, {
        status: Code_Ok
    })
}