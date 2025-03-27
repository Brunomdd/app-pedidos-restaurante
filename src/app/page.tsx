import { Metadata } from "next";
import Link from "next/link";

export const metadata = {
  title: "Restaurante",
  description: "Explore nosso menu incrível e desfrute de pratos deliciosos no conforto da sua casa.",
  openGraph: {
    title: "Restaurante - Sabores Inesquecíveis",
    description: "Explore nosso menu incrível e desfrute de pratos deliciosos no conforto da sua casa.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googlebot: {
      index: true,
      follow: true,
    }
  }
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/restaurant-banner.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white py-32">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo ao Restaurante "Sem Nome"</h1>
          <p className="text-lg mb-8">Sabores incríveis, ambiente acolhedor, e uma experiência única.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Sobre Nós</h2>
          <p className="text-lg mb-8">
            Nosso restaurante oferece uma experiência gastronômica única, com pratos que combinam ingredientes frescos e sabores autênticos. 
            Venha desfrutar de momentos especiais em um ambiente acolhedor e moderno.
          </p>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Pratos Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img src="/images/dish1.jpg" alt="Prato 1" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Prato Especial 1</h3>
                <p className="text-gray-700 mb-4">Uma deliciosa combinação de sabores, com ingredientes frescos e temperos únicos.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img src="/images/dish2.jpg" alt="Prato 2" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Prato Especial 2</h3>
                <p className="text-gray-700 mb-4">Uma opção incrível para quem ama sabores exóticos e ingredientes frescos.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img src="/images/dish3.jpg" alt="Prato 3" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Prato Especial 3</h3>
                <p className="text-gray-700 mb-4">Uma mistura de sabores que vai surpreender seu paladar e deixar você querendo mais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-8 text-center">
        <p>&copy; 2025 Restaurante "Sem Nome". Todos os direitos reservados.</p>
        <div className="mt-4">
          <Link href="https://facebook.com">
            <div className="mx-4 hover:text-blue-500">Facebook</div>
          </Link>
          <Link href="https://instagram.com">
            <div className="mx-4 hover:text-pink-500">Instagram</div>
          </Link>
        </div>
      </footer>
    </div>
  );
}
