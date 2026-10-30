import { NextResponse } from "next/server";
import { checkDatabaseConnection } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  let dbOk = false;
  try {
    dbOk = await checkDatabaseConnection();
  } catch {
    dbOk = false;
  }
  return NextResponse.json({
    ok: true,
    application: "RCLD Islampur ERP",
    checks: { database: dbOk },
    timestamp: new Date().toISOString(),
  });
}

