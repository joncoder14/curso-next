"use client"
import { createActionProduct } from "../actions/productActions"


export default function CreateProduct (){
    async function create (){
        const response = await  createActionProduct()
        console.log(response)
    }
    return(
        <div>
            <button onClick={create}>create product</button>
        </div>
    )
}