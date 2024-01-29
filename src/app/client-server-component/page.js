'use client'
 
import React, { useState, useEffect } from "react"
import { submitForm } from './action' 
 
 
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
        
            <form action={submitForm}> 
    id: <input type="text" name="id" />
    name: <input type="text" name="name" />
    address: <input type="text" name="address" />
    city: <input type="text" name="city" />
    country: <input type="text" name="country" />

    <button>Submit</button>
</form>
        </div>
    )
}