"use client";
import { useEffect, useState } from "react";


export default function Typewriter({ words = [], speed = 80 }: { words: string[]; speed?: number; }) {
const [index, setIndex] = useState(0);
const [subIndex, setSubIndex] = useState(0);
const [forward, setForward] = useState(true);


useEffect(() => {
const cur = words[index];
if (!cur) return;


const timeout = setTimeout(() => {
if (forward) {
if (subIndex < cur.length) setSubIndex(subIndex + 1);
else setForward(false);
} else {
if (subIndex > 0) setSubIndex(subIndex - 1);
else {
setForward(true);
setIndex((i) => (i + 1) % words.length);
}
}
}, forward ? speed : speed / 2);


return () => clearTimeout(timeout);
}, [subIndex, forward, index, words, speed]);


return (
<div className="text-2xl md:text-3xl font-semibold text-fuchsia-500">
{words[index]?.substring(0, subIndex)}<span className="inline-block">|</span>
</div>
);
}