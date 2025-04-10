import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold">Página 404 não encontrada</h1>
      <p className="text-gray-600">A página que tentou acessar não existe.</p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Voltar para home
      </Link>
      </div>
  );
}
