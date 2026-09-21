"use client"
import { useActionState } from "react"

type State = {
    success:boolean,
    message:string,
} | null

type Props = {
        action:(preveiusState:State,formdata:FormData) => Promise<State>
}

export default function CreateForm ({action}:Props){
    const [state, formAction] = useActionState(action, null)
    return(
    <>
        <div className="flex justify-center items-center h-screen">
            <form action={formAction} className=" bg-slate-400 rounded-2xl p-30">
                <div className="flex flex-col gap-2 mb-3">
                    <label className="text-2xl">name</label>
                    <input type="text" name="name" placeholder="enter name" className="border p-1 rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-2xl">price</label>
                    <input type="number" name="price" className="border p-1 rounded  "/>
                </div>
                <button className="p-1 rounded-2xl text-white bg-sky-950 w-50 mt-5">create</button>
            </form>
            {state?.message && (
                <p>{state.message}</p>
            )}

        </div>  
    </>
)
}
