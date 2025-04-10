"use client";

import { useState } from "react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cadastro enviado:", { nome, email, senha });
    // aqui futuramente você vai integrar com o banco ou Firebase
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Criar Conta</h2>
        <form onSubmit={handleCadastro} className="space-y-4">
          <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
         <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
             required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            />
          </div>
          <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
           <input
          type="email"
             id="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2" />
        </div>
     <div>
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
          <input
          type="password"
           id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"/>
          </div>
            <button
        type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >Cadastrar
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Já tem uma conta? <a href="/login" className="text-blue-600 hover:underline">Faça login</a>
        </p>
      </div>
    </div>
  );
}
