import { NextResponse } from "next/server";

export async function DELETE(req, {params}) {

    const {userId} = await params;

    console.log('userid ', userId)

    return NextResponse.json({
        message: "works api deleting data"
    })

}