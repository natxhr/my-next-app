'use server' //ใข้กับหลังบ้าน

import mysql from 'mysql2'
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
}) // ควรเขียนใน .env ไม่ควรโชว์แบบนี้ค่า

// ถ้าเป็น api ที่เป็นส่วนของ project หรือ script ฝั่งหลังบ้านเราใช้ชื่อฟังชันได้เลย ไม่ต้องใส่ method
export async function submitForm(formData) {
    // id customer_name address phone กำหนดตัวแหรขึ้นมาเพื่อเอาไปใช้งานต่อได้
    const id = formData.get('id') //ถ้าเราจะดึงจากตัวเนี่ยที่เราได้รับมา 
    const customer_name = formData.get('customer_name')
    const address = formData.get('address')
    const phone = formData.get('phone')

    //examples of how to ใช้งานตัวแปรข้างบนแบบง่ายๆ
   // console.log('id: ', id)
   // console.log('customer_name: ', customer_name)
   // console.log('address: ', address)
    //console.log('phone: ', phone)

    //พอเรารับ imput เสร็จปุ้บ เราก็จะเอาไปใส่ในฐานข้อมูล เราก็เขียน query ขึ้นมาได้เลย
    const sql = `INSERT INTO customers (id, customer_name, address, phone) VALUES (?, ?, ?, ?)`
    const VALUES = [id, customer_name, address, phone]
    //หลังจากนั้นก็สร้าง connection query เอาคิวรี่ตรงนี้ไปจัดการ error แล้วแสดงผลลัพธ์ออกมา
    connection.query(sql, VALUES, (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Rows afftected: ', result.affectedRows);
    })


    //ถ้าเราจะเอาข้อมูลที่ได้พวกนี้ (หลัง submit ข้อมูลจะไปโผล่ใน consolr ช้ะ ถ้าจะเอาไปเก็บในฐานข้อมูล เราก็ต่อกับฐานข้อมูล โดย import มันมา

}