// export default function Loading() {
//     return (
//         <div className="flex items-center justify-center min-h-[300px]">
//             <p className="text-lg font-semibold">
//                 Loading...
//             </p>
//         </div>
//     );
// }

export default function Loading(){
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-400 rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-semibold">Loading Products...</p>

        </div>
    )
}