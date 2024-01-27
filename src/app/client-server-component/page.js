'use client'
 
import React, { useState, useEffect } from "react"
import { submitForm } from './action' //เราเรียกใช้ไฟล์ที่ชื่อ action - ทั้งก้อนนี้คือไฟล์หลังบ้าน
 
 // เราสร้าง setUserState ในการเก็บสถานะของตัวข้อมูล พอเราสร้างข้อมูลอะไรเสร็จเรียบร้อยก็ให้มันมาแสดงผลในฝั่งหน้าบ้าน
export default function Page() {
    const [userState, setUserState] = useState([])
 
    useEffect(() => {
        const initUsers = async () => {
            try {
                const users = await getUsers()
                setUserState(users)
            } catch (error) {
                console.error(error)
            }
        }
 
        initUsers()
    }, [])
 
    return (
        <div>
            <ul>
                {userState.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        //ช่องฝั่งหน้าบ้าน อย่าลืมลบข้อความนี้ ไม่งั้นโค้ดไม่ทำงาน
            <form action={submitForm}> 
    id: <input type="text" name="id" />
    customer_name: <input type="text" name="customer_name" />
    address: <input type="text" name="address" />
    phone: <input type="text" name="phone" />
    <button>Submit</button>
</form>
        </div>
    )
}