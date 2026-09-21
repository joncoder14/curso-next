import CreateForm from "./create-products"
type State = {
    success:boolean,
    message:string,
} | null


async function createProduct ( previusState:State,formData:FormData){
    "use server"
    const name = formData.get("name")
    const price = Number(formData.get("price"))

    const response =  await fetch("https://dummyjson.com/products/add",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                title:name,
                price:price
            }
        )

    })
   


      if (!response.ok) {
        return {
            success: false,
            message: "Error creating product",
        };
    }

    return {
        success: true,
        message: "Product created successfully",
    };  
    
}

export default function Create (){
    return(
    <CreateForm action={createProduct}/>
)
}
