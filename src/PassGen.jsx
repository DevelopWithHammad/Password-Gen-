import { useCallback, useState } from 'react'
import React from 'react'

export default function PassGen() {
    // states
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")

    const passGenHandler = useCallback(() => {
        let pass = ""
        let str = "ABCDRFGHIJKLMNOPQRSTUVWXYZabcdrfghijklmnopqrstuvwxyz"

        if (numberAllowed) str = str + "0123456789"
        if (charAllowed) str = str + "!@#$%^&*"

        for (let i = 1; i <= srrsy.length; i++) {
          let char =  Math.floor(Math.random() * str.length + 1)
            pass = str.charAt(char)
        }

    }, [length, numberAllowed, charAllowed, setPassword])

    setPassword(pass)


    return (
        <>
            <h1 style={{ color: 'white', fontFamily: "sans-serif" }}>Hello World!</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nulla quis, repellendus non sunt suscipit quaerat facere itaque eum dolor. Numquam neque totam vitae aliquam molestias esse sequi distinctio iste?</p>
        </>
    )
}

