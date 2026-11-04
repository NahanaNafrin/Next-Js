
// function layout({ children }: LayoutProps<"/">) {
//   return (
//     <div>
//         <h3>Product For Your Style</h3>
//         {children}
//     </div>
//   )
// }

// export default layout
function layout({ children }: LayoutProps<"/">) {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-white px-6 py-8 text-center shadow-sm">
        <h3 className="text-3xl font-bold tracking-wide text-gray-900">
          Products For Your <span className="text-sky-500">Style</span>
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Discover products that match your lifestyle.
        </p>
      </div>

      <div className="container mx-auto px-4 py-8">
        {children}
      </div>

    </div>
  )
}

export default layout