"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const checkMobile = () => setIsMobile(window.innerWidth <= 768);
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return () => window.removeEventListener("resize", checkMobile);
        }
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!menuOpen || !event) return;
            
            const menu = menuRef?.current;
            const button = buttonRef?.current;
            
            if (menu && button && !menu.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setMenuOpen(false);
    }
        };
        
        
        
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [menuOpen]);

    return (
        <header className="bg-zinc-900 text-white px-4 py-4 relative">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div className="text-lg font-bold">
                    Restaurante
                </div>
                
                {/* Menu lateral apenas para mobile */}
                {isMobile ? (
                    <div className="relative">
                        <button 
                            ref={buttonRef}
                            className="text-white text-2xl" 
                            aria-label="Abrir menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            ☰
                        </button>
                        <nav 
                            ref={menuRef}
                            className={`fixed top-0 right-0 h-auto w-48 bg-zinc-900 shadow-lg p-4 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform z-50`}
                        >
                            <ul className="flex flex-col items-start gap-4 text-sm md:text-base w-full">
                                <li>
                                    <Link href="/" className="hover:text-zinc-400 transition" aria-label="Página inicial">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contatos" className="hover:text-zinc-400 transition">
                                        Contatos
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cardapios" className="hover:text-zinc-400 transition">
                                        Cardápios
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cadastro" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition block text-center">
                                        Cadastro/Login
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                ) : (
                    <nav>
                        <ul className="flex gap-6 text-sm md:text-base">
                            <li>
                                <Link href="/" className="hover:text-zinc-400 transition" aria-label="Página inicial">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/contatos" className="hover:text-zinc-400 transition">
                                    Contatos
                                </Link>
                            </li>
                            <li>
                                <Link href="/cardapios" className="hover:text-zinc-400 transition">
                                    Cardápios
                                </Link>
                            </li>
                            <li>
                                <Link href="/cadastro" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
                                    Cadastro/Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}