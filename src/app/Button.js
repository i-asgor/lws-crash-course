"use client"

import { useRouter } from "next/navigation";

export default function Button() {
    const router = useRouter()
    return (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => router.push('/blogs')}>
                blogs
            </button>
    );
}

