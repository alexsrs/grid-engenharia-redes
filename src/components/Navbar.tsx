import React from "react";
// logo from src/assets via runtime URL
const logo = "/assets/logo.png";

export default function Navbar(){
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Grid" className="h-16 w-auto" loading="lazy" draggable={false} />
        
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#servicos" className="hover:text-slate-900">Serviços</a>
          <a href="#projetos" className="hover:text-slate-900">Projetos</a>
          <a href="#sobre" className="hover:text-slate-900">Sobre Nós</a>
          <a href="#contato" className="hover:text-slate-900">Contato</a>
        </nav>
        <a href="#contato" className="ml-4 !bg-emerald-500 text-white px-3 py-2 rounded-md shadow-sm hover:opacity-85 inline-flex items-center">Solicitar Orçamento</a>
      </div>
    </header>
  )
}

