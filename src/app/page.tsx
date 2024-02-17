"use client"

import { Inder } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Home() {

  const [Todo , setTodo]  = useState([])
  const[InputValue, setInputValue] = useState("")



  const handleInputvalue = (event) => {

    setInputValue(event.target.value)
  }

  const AddTodo = () => {

    setTodo([...Todo, InputValue])

    setInputValue("")
  }

  const handleDelete = (index) => {


    const newtodo = Todo.filter((_, r) =>   r !== index )
    setTodo(newtodo)
  }
  return (
    

    <main className="flex flex-col justify-center items-center min-h-screen">

      
      <div className="flex justify-center mt-16 items-center">

        <h1 className="text-white text-2xl font-bold ">Todo App</h1>
      </div>

      <div className="bg-white w-[360px] h-[420px] my-16 rounded-md ">


     <div className="flex p-6 space-x-4">

        {/* left */}

        <input type="text" className="bg-gray-200 px-6 py-2 rounded-md 
         hover:border-2 hover:border-blue-700 outline-none" 
         placeholder="New todo.." 

         value={InputValue}
         onChange={handleInputvalue}
         
         
         />
       {/* right */}

       <button onClick={AddTodo} className="bg-green-700 text-white
       px-4 py-2 rounded-md hover:bg-green-400 transition-all duration-500">ADD</button>
     </div>



     <div className="max-w-2xl mx-auto p-6">

      {

        Todo.map((datas, index) => (

          <div key={index} className="flex space-y-4 justify-around items-center">

            <h1 className="text-purple-800 font-semibold">{datas}</h1>
            <div>
              <MdDelete className="cursor-pointer text-red-600"

              onClick={()  => handleDelete(index)}
              
              
              />


            </div>


          </div>
        ))
      }
     </div>

      </div>
    </main>

  );
}
