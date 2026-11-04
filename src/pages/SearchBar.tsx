// import React from 'react'

// function SearchBar() {
//     return (
//         <form
//             action="/search"
//             method="GET"
//             className="flex items-center gap-2"
//         >
//             <input
//                 type="text"
//                 name="q"
//                 placeholder="🔍Search Your products here"
//                 className="border border-gray-500 w-100 rounded px-4 py-1 outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//             />

//             <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
//             >
//                 Search
//             </button>
//         </form>
//     )
// }

// export default SearchBar
"use client";

import { useSearchParams } from "next/navigation";

function SearchBar() {
    const searchParams = useSearchParams();
    const query = searchParams.get("search") || "";

    return (
        <form action="/search" method="GET" className="flex gap-2">
            <input
                type="text"
                name="search"
                defaultValue={query}
                 placeholder="🔍Search Your products here"
                className="border border-gray-500 w-100 ms-5 rounded px-4 py-1 outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
                Search
            </button>
               
        </form>
    );
}

export default SearchBar;