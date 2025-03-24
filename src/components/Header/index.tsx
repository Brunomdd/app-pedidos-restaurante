import Link from "next/link";

export function Header() {
    return (
        <header className="flex px-4 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div className="text-lg font-bold">
                    Restaurante
                </div>
                <nav>
                    <ul className="flex items-center gap-4 text-sm md:text-base">
                        <li>
                            <Link href="/" className="hover:text-zinc-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/contatos" className="hover:text-zinc-400 transition">
                                Contatos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
