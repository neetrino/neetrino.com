import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PAYMENT_LANGUAGE_CODES } from "@/lib/payment.constants";

const initiateSchema = z.object({
  amountAMD: z.number().positive().max(99_999_999),
  description: z.string().trim().min(1).max(500),
  customerName: z.string().trim().max(200).optional(),
  customerEmail: z.email().max(254).optional(),
  customerPhone: z.string().trim().min(5).max(40).optional(),
  language: z.enum(PAYMENT_LANGUAGE_CODES).optional(),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: unknown = await request.json();
    const parsed = initiateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
    }

    void parsed;
    return NextResponse.json(
      {
        success: false,
        error:
          "Direct payment initiation is disabled. Create an order from a product page first; IDBank will connect to that order next.",
      },
      { status: 503 },
    );
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("Missing required environment")) {
      console.error("[idbank-initiate] Configuration error.", error.message);
      return NextResponse.json(
        { success: false, error: "Payment service is not configured." },
        { status: 503 },
      );
    }

    console.error("[idbank-initiate] Unexpected error.", error);
    return NextResponse.json(
      { success: false, error: "Unable to start payment." },
      { status: 500 },
    );
  }
}
