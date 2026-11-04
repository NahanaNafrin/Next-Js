import React from 'react'

async function DynamicSearch(props:any) {
  const params = await props.params
  const myParams: string [] = params.myParams;
  console.log("My Params",myParams)
  const category = myParams[0]
  const group = myParams[1];
  const brand = myParams[2]
    console.log(props)
  return (
    <div>DynamicSearch :-
      Category:{category}-group:{group}-brand:{brand}
    </div>
  )
}

export default DynamicSearch