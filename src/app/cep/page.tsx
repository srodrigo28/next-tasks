'use client'

import { useState } from "react"

interface ViaCepResult {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  estado: string
}

export default function Cep() {
  const [cep, setCep] = useState("")

  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [complemento, setComplemento] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")

  const [error, setError] = useState<string | null>(null)

  const buscarCep = async (e: React.FormEvent) => {
    e.preventDefault()

    // Verifica se o CEP está no formato correto (exemplo: 12345-678)
    const regex = /^[0-9]{5}[0-9]{3}$/
    
    if (!regex.test(cep)) {
      setError("CEP inválido. Use o formato 12345-678")
      return
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data: ViaCepResult = await response.json()

      if (!data) {
        setError("CEP não encontrado.")
        return
      }

      // Atualiza os estados com os dados retornados
      setLogradouro(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setEstado(data.estado)
      setError(null) // Reseta o erro, caso tenha algum anterior
    } catch (err) {
      setError("Erro ao buscar o CEP.")
    }
  }


  // const [data, setData] = useState<ViaCepResult>()>

  return (
    <div className="bg-black w-screen h-screen flex items-center justify-center">
      <form onSubmit={buscarCep}
        className="w-[400pxz] p-10 bg-[#1d1d1d] text-white flex flex-col space-y-4">
        <div className="flex gap-3">
            <input
              placeholder="CEP (ex: 12345-678)"
              type="text"
              className="p-2 rounded-md border-none text-black font-semibold tracking-widest"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 p-2 rounded-md text-white"
            >
              Buscar
            </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {logradouro && (
          <div className="mt-4 flex gap-2 items-center justify-center flex-wrap">

            <input className="input-text" value={logradouro} 
              onChange={ event => setLogradouro(event.target.value)}
            />
            
            <input className="input-text" value={bairro} 
              onChange={ event => setBairro(event.target.value)}  
            />
            
            <input className="input-text" value={cidade} 
              onChange={ event => setCidade(event.target.value)}  
            />
            
            <input className="input-text" value={estado} 
              onChange={ event => setEstado(event.target.value)}  
            />
          </div>
        )}
      </form>
    </div>
  )
}