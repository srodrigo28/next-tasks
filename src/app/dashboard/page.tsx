import Image from "next/image";

const imageUrl = "https://images.ctfassets.net/qjqyt7jorbng/3aoYWgkwJW45DHjdvfr5Fy/e2deb1c6d8040eca2cca58b86b311d07/cartao_multiplo2.png"
export default function Dashboard(){
  return(
    <div className="bg-black w-screen px-10 h-screen flex flex-col items-center justify-around lg:px-20 text-white">
      <header  className="flex gap-4 justify-between w-full md:w-[700px]">
          <div className="flex relative cursor-pointer animate-pulse">
            <h1 className="text-5xl"> Tarefas </h1>
            <div className=" text-white cursor-pointer font-extrabold text-5xl absolute bottom-5 -right-7"> + </div>
          </div>
          <button className="cursor-pointer p-2 border px-7 rounded-md text-xl hover:bg-blue-700 duration-200 hover:border-none">Acessar</button>
      </header>
      
      <Image width={500} height={300} alt="image" src={imageUrl} />

      <div className="flex md:flex-row flex-col gap-4 justify-center w-full px-5">
        <button className="w-full md:w-80 bg-blue-600 rounded-md text-white p-3 font-semibold text-2xl">+ Receber ?</button>
        <button className="w-full md:w-80 bg-blue-600 rounded-md text-white p-3 font-semibold text-2xl">- Pagar ?</button>
      </div>
    </div>
  )
}