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

    const { searchParams } = new URL(req.url)
    const limitParam = searchParams.get('limit')
    const limit = limitParam ? parseInt(limitParam) : 15

    let streams
    if (user) {
        streams = await prismaClient.stream.findMany({
            take: limit,
            orderBy: {
                upvotes: {
                    _count: "desc"
                }
            },
            include: {
                _count: {
                    select: {
                        upvotes: true
                    }
                },
                upvotes: {
                    where: {
                        userId: user.id
                    }
                }
            }
        })

        return NextResponse.json({
            streams: streams.map(({ _count, ...rest }) => ({
                ...rest,
                upvotes: _count.upvotes,
                haveUpvoted: rest.upvotes.length ? true : false
            }))
        }, {
            status: Code_Ok
        })

    } else {

        streams = await prismaClient.stream.findMany({
            take: limit,
            orderBy: {
                upvotes: {
                    _count: "asc"
                }
            },
            include: {
                _count: {
                    select: {
                        upvotes: true
                    }
                }
            }
        })

        return NextResponse.json({
            streams: streams.map(({ _count, ...rest }) => ({
                ...rest,
                upvotes: _count.upvotes,
                haveUpvoted: false
            }))
        }, {
            status: Code_Ok
        })

    }
}