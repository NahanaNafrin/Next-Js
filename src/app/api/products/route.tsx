

export async function GET(request: Request){
    const data = [{
        id:1,
        title:'T shirt'
    }];
    return Response.json((data))
}