
type Props = {
    params:Promise<{
        id: string;
    }>;
};

export async function GET (request:Request, {params}:Props){

    const {id} = await params;
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if(!response.ok){
        return Response.json({
            message: "error fetching product"
    },
    {
        status: 404,
    })}

    const productResponse = await response.json();

    return Response.json(productResponse)
}

export async function POST (request:Request){
    const body = await request.json()

    const response = await fetch(`https://dummyjson.com/products/add    `,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if(!response.ok){
        return Response.json({
            message: "error creating product"
    },
    {
        status: 500,
    })}

    const productResponse = await response.json();

    return Response.json({
        message:"product recivided",
        body: productResponse
    })
}

    
export async function PATCH (request:Request, {params}:Props){
    const {id} = await params;
    const body = await request.json()

    const response = await fetch(`https://dummyjson.com/products/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if(!response.ok){
        return Response.json({
            message: "error updating product"
        },
        {
            status:500,
        }
    )
    }
    const productRespone = await response.json()
    return Response.json({
        message:"product updated",
        body: productRespone
    })
}
    
export async function DELETE (request:Request, {params}:Props){
    const {id} = await params;


    const response = await fetch(`https://dummyjson.com/products/${id}`,{
        method: "DELETE",
    

    })
    if(!response.ok){
        return Response.json({
            message: "error deeleting product"
        },
        {
            status:500
        }
        )
    }

    const ProductResponse = await response.json()
    return Response.json({
        message:"product creating",
        body: ProductResponse
    })

}