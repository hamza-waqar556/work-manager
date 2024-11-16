import { NextResponse } from "next/server";

export function GET(req) {
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

export function DELETE(req) {
  return NextResponse.json(
    {
      message: "User deleted successfully!",
      status: true,
    },
    { status: 201, statusText: "status Text" }
  );
}
