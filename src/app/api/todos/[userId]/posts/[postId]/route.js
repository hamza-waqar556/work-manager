import { NextResponse } from "next/server";

export async function GET (req, {params}) {

    // const {userId, postId} = await params;

    return NextResponse.json(
        await params,
    )
}