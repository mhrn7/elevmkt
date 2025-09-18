import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, businessType, phone, currency, revenueRange, language } = body

    // Validate required fields
    if (!name || !businessType || !phone || !currency || !revenueRange) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create Supabase client
    const supabase = await createClient()

    // Insert lead into database
    const { data, error } = await supabase
      .from("leads")
      .insert({
        name,
        business_type: businessType,
        phone,
        currency,
        revenue_range: revenueRange,
        language: language || "pt",
      })
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to save lead" }, { status: 500 })
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead saved successfully",
        leadId: data.id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
