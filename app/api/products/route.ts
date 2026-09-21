export async function GET(){
    return Response.json(
        {
            message: "hello from api products"
        })
    
}

export async function POST (request:Request){
    const body = await request.json()

    return Response.json({
        mesage:"product recivided",
        body: body
    })
}   

export async function PATCH (request:Request){
    const body = await request.json()

    return Response.json({
        mesage:"product updated",
        body: body
    })
}

export async function DELETE (request:Request){
    const body = await request.json()

    return Response.json({
        mesage:"product deleted",
        body: body
    })
}