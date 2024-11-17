import { NextResponse } from "next/server";

export function GET(request) {
  const users = [
    {
      name: "Hamza",
      age: 25,
      email: "hamza@gmail.com",
    },
    {
      name: "Rania",
      age: 28,
      email: "rania@gmail.com",
    },
    {
      name: "Mohamed",
      age: 30,
      email: "mohamed@gmail.com",
    },
    {
      name: "Sara",
      age: 27,
      email: "sara@gmail.com",
    },
  ];

  // Return a JSON response with the users data
  return NextResponse.json(users);
}

export function DELETE(request) {
  return NextResponse.json(
    {
      message: "User deleted successfully!",
      status: true,
    },
    { status: 201, statusText: "status Text" }
  );
}


export async function POST(request) {

  // console.log( 'method ' ,await request.method);
  // console.log( 'headers ' ,await request.headers);
  // console.log( 'body ' ,await request.body);
  // console.log( 'url ' ,await request.url);
  // console.log( 'cookies ' ,await request.cookies);
  // console.log( 'searchParams ' ,await request.nextUrl.searchParams);
  
    const jsonData = await request.json();
    const textData = await request.text();

    return NextResponse.json({
      message: "POST API WORKING!",
      status: true,
    })
  
}