'use client'
import { useState, useEffect } from 'react'
import './Marquee.css'


const interval = 13000
const selectMarque = (messages, setMarqueeText) => {
    let newMarqueeText = messages[Math.floor(Math.random()*messages.length)]
    setMarqueeText(newMarqueeText)
}

export default function Marquee({messages}){
    const [marqueeText, setMarqueeText] = useState('');
    useEffect(() => {
        selectMarque(messages, setMarqueeText)
        setInterval(() => {
            selectMarque(messages, setMarqueeText)
        }, interval)
    }, [])
    return (
        <div className="container">
            <div className="marquee">
                <p className="marquee__text">
                    { marqueeText }
                </p>
            </div>
        </div>
    )
}