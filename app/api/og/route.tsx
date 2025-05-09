import { NextResponse } from "next/server"

export const runtime = "edge"

export async function GET() {
  // Redirect to the static image instead of generating one
  return NextResponse.redirect(new URL("/images/og-image.png", "https://damilareoo.xyz"))
}
