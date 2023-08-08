import { NextResponse } from 'next/server';

export async function GET(req: Request) {

  try {
    const { searchParams } = new URL(req.url);

    const page = searchParams.get('page') ?? 1;

    const res = await fetch(`https://swapi.dev/api/people?page=${page}`);

    const data = await res.json();

    return NextResponse.json(data);

  } catch (error) {

    return NextResponse.json(
      { message: "Error", error },
      { status: 500 }  
    );
  }
};