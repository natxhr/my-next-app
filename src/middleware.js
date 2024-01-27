// mw มีการใช้งาน Nextresponse เพราะงั้นเราเลยต้องทำการ import ในส่วนที่เป็น next จากตัว build-in ของ next/server
import { NextResponse } from "next/server"

//เมื่อสร้างหรือเรียกใช้ mw แล้ว เราก็จะ export ฟังชัน mw แล้วก็ทำการรับ request มา request ตรงนี้จะทำอะไร? เราก็กำหนด lohgic การทำงานตัว mw ตรงนี้ได้
export function middleware(req) {
    console.log(req,url); //ถ้ามี req เข้ามาให้มัน console.log req เข้ามาก่อน แล้วก็ให้มันเตะไปทำงานที่ถัดไปได้
    return NextResponse,next();
}

//สมมติว่าเรามี mw เราจัดการได้โดยสร้างเงื่อนไขว่า mw ตรงนี้มัน match กับ path ไหน ส่วนไหน ให้มันมา match ที่ mw ได้
export const config = {
    matcher: 'admin/:path*', //เวลาที่มันมีอะไรเข้ามาแล้วมันตรงกับ path ที่เราตั้งไว้ เช่น path admin path อะไรก็แล้วแต่ที่ตามหลังด้วย / ถ้าข้างหน้ามัน match กับ admin มันก็จะไปทำงานใน middleware ข้างบน (โค้ดที่ 2)
}
