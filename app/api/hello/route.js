
import Pizzas from "@/models/Pizzaz"

import { NextResponse } from "next/server"
export async function GET(request, {params}) {
  // const pizzas = await Pizzas.find()
  console.log(params)
  return new Response ('hello !!!!!!!!!!!!!!' )
}
 

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  return NextResponse.json(data)
}





