import { useState } from "react"



function Light(){
     //color is like qiima lagu shubaayo ., setcolor qiimo ku shub
    const [color, setColor]=useState("")

    const handleON = () =>{
        setColor("yellow")
    }

    //function hadale off
    const handleOff =()=>{
        setColor("white")
    }


    return <div className="flex justify-center mt-5">
        <div>
       <div style={{backgroundColor:color}} className="w-[300px] h-[300px] border-4 border-black rounded-full "></div>
       <button onClick={handleON} className="text-white bg-orange-700 ml-20 py-2 px-6 mt-3 ">On</button>
       <button onClick={handleOff} className="text-white bg-orange-700 m-3 py-2 px-6 mt-3">Off</button>
       </div>
    </div>
}


export default Light