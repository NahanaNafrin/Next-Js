import React from 'react'
import { cookies, headers } from 'next/headers';

 async function account() {
    const cookieList = await cookies();
    const username = cookieList.get("username")?.value;

    const headerList = await headers();
    const browserInfo = headerList.get("user-agent");
    const languages = headerList.get("accept-language");
  return (
    <div style={{height:1100,textAlign:'center',margin:200}}>
        <h1 className='text-3xl'>Welcome {username}!</h1>
        <h3>Sent from:{browserInfo}</h3>
        <h3>Preffered Languages by the browser:{languages}</h3>
    </div>
  )
}

export default account