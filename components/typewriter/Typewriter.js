'use client'
import {useState, useEffect} from "react";
import './Typewriter.css'

const interval = 10000

export default function Typewriter({textArray}){
    const [text, setText] = useState(textArray[0]);
    useEffect(() => {
        setInterval(() => {
            if(document.getElementById('type') === null) return;
            document.getElementById('type').classList?.remove('typewriter')
            setText('')
            setTimeout(() => {
                setText(textArray[Math.floor(Math.random()* textArray.length)])
                document.getElementById('type').classList?.add('typewriter')
            }, 10)
        }, interval)
    }, []);

    return (
        <div id="type" className="type typewriter">
            <h4>
                {text}
            </h4>
        </div>
    )
}