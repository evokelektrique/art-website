"use client"

import { useRouter } from "next/navigation";

export default function BackButton({ text = '< Back' }) {
    const router = useRouter();

    return <button className="text-white mr-auto ml-4 hover:text-yellow-200" onClick={() => router.back()}>{text}</button>
}