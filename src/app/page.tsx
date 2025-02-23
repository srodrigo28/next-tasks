'use client'

import { motion } from "motion/react";
import Image from "next/image";

const imageUrl2 = "https://images.ctfassets.net/qjqyt7jorbng/3aoYWgkwJW45DHjdvfr5Fy/e2deb1c6d8040eca2cca58b86b311d07/cartao_multiplo2.png"
const imageUrl = "https://static.vecteezy.com/system/resources/previews/009/315/274/non_2x/white-clipboard-task-management-todo-check-list-efficient-work-on-project-plan-fast-progress-level-up-concept-assignment-and-exam-productivity-solution-icon-3d-clipboard-render-free-png.png"
export default function Dashboard() {
  return (
    <div className="bg-black w-screen px-10 h-screen flex flex-col items-center justify-around lg:px-20 text-white">
      <motion.div
        initial={{  y: -80, opacity: 0 }}
        whileInView={{  y: 0, opacity: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1.9 }}
      >
        <header className="flex gap-4 justify-between w-screen px-10 md:w-[700px]">
          
          <div className="flex relative cursor-pointer animate-pulse ">
            <h1 className="text-5xl"> Tarefas </h1>
            <div className=" text-white cursor-pointer font-extrabold text-5xl absolute bottom-5 -right-7"> + </div>
          </div>
          
          <button className="cursor-pointer p-2 border px-7 rounded-md text-xl hover:bg-blue-700 duration-200 hover:border-none">Acessar</button>
        
        </header>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1.1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1.9 }}
      >
        <Image width={500} height={300} alt="image" src={imageUrl} />
      </motion.div>

      <motion.div
        initial={{  y: 80, opacity: 0 }}
        whileInView={{  y: 0, opacity: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1.9 }}
      >
        <div className="flex md:flex-row flex-col gap-4 justify-center md:w-full w-screen px-10 ">
          <button className="w-full md:w-80 bg-blue-600 rounded-md text-white p-3 font-semibold text-2xl">+ Marcar </button>
          <button className="w-full md:w-80 bg-blue-600 rounded-md text-white p-3 font-semibold text-2xl">- Agenda </button>
        </div>
      </motion.div>
    </div>
  )
}