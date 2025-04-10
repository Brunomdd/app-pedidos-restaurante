import Link from "next/link";

const cardapios = [
   { nome: "Pizzas 🍕", descricao: "Confira nossas deliciosas pizzas artesanais.", link: "/cardapio/pizzas" },
    { nome: "Lanches 🍔", descricao: "Hambúrgueres artesanais, combos e muito mais.", link: "/cardapio/lanches" },
   { nome: "Bebidas 🥤", descricao: "Sucos naturais, refrigerantes e drinks especiais.", link: "/cardapio/bebidas" },
    { nome: "Sobremesas 🍰", descricao: "Doces irresistíveis para finalizar sua refeição.", link: "/cardapio/sobremesas" },
    { nome: "Massas 🍝", descricao: "Deliciosas massas italianas feitas com ingredientes frescos.", link: "/cardapio/massas" },
    { nome: "Saladas 🥗", descricao: "Opções leves e saudáveis para todos os gostos.", link: "/cardapio/saladas" },
    { nome: "Pratos Principais 🍽️", descricao: "Escolha entre carnes, aves e peixes bem servidos.", link: "/cardapio/pratos-principais" },
      { nome: "Vegano 🌱", descricao: "Opções 100% vegetais, nutritivas e saborosas.", link: "/cardapio/vegano" }
  ];

export default function Cardapios() {
  return (
    <div className="p-6">
   <h1 className="text-3xl font-bold mb-6 text-center">Escolha um Cardápio</h1>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
   {cardapios.map((item, index) => (
       <Link key={index} href={item.link}>
       <div className="border p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white hover:bg-gray-50 cursor-pointer">
         <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.nome}</h2>
       <p className="text-gray-600">{item.descricao}</p>
       </div>
       </Link>
       ))}
      </div>
    </div>
  );
}
