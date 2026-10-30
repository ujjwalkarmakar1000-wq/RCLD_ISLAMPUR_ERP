import { NextResponse } from "next/server";
<<<<<<< HEAD

export async function GET() {
  return NextResponse.json({
    ok: true,
    application: "RCLD Islampur ERP",
    stack: { frontend: "Next.js + JavaScript", database: "MongoDB", storage: "Cloudinary" },
    environment: process.env.NODE_ENV,
  });
=======
import { checkDatabaseConnection } from "@/lib/db";

export const dynamic="force-dynamic";

export async function GET() {
  const checks={database:false};
  try { checks.database=await checkDatabaseConnection(); } catch {}
  const healthy=checks.database;
  return NextResponse.json({ok:healthy,checks,timestamp:new Date().toISOString()},{status:healthy?200:503});
>>>>>>> 961d2a222d7d8d64e39c1381cf87d18a3666c664
}
