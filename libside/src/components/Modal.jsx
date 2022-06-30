
import {Link} from "react-router-dom"

export default function Modal(){
    return (
        <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
  <div class="bg-white w-[50%] h-50 px-16 py-14 rounded-md text-center">
    <h1 class="text-xl mb-4 font-bold text-slate-500">Item sent!</h1>
    <Link to="/" ><button class="bg-green-500 px-7 py-2 ml-2 rounded-md text-md w-30 text-white font-semibold">Ok</button></Link>
  </div>
</div>
    )
}