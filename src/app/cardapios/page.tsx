import { link } from "fs";
import Link from "next/link";

const cardapios = [
  { nome: "Pizzas", descricao: "Confira nossas deliciosas pizzas.", link: "/cardapio/pizzas" },
  { nome: "Lanches", descricao: "Hambúrgueres artesanais e combos.", link: "/cardapio/lanches" },
  { nome: "Bebidas", descricao: "Sucos naturais, refrigerantes e drinks.", link: "/cardapio/bebidas" },
  { nome: "Bebidas", descricao: "Sucos naturais, refrigerantes e drinks.", link: "/cardapio/bebidas" },
  {nome: "Sobremessas",descricao:"Doces Irresistíveis para finalizar sua refeição",link: "/cardapio/sobremesas"}

];

export default function Cardapios() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Escolha um Cardápio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardapios.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white hover:bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{item.nome}</h2>
              <p className="text-gray-600">{item.descricao}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
