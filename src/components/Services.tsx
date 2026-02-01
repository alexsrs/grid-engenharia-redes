import React from "react";
import { Camera, Shield, Network, Eye, Phone, Wifi } from "lucide-react";

// Use runtime URLs to reference `src/assets` images (avoid static bundling issues)
const cftvImg = "/assets/cftv.jpg";
const cabeamentoImg = "/assets/estructure-cable.jpg";
const acessoImg = "/assets/door_access_control.jpg";
const facialImg = "/assets/facial-recognition.jpg";
const voipImg = "/assets/voip.jpg";
const wifiImg = "/assets/wifi.jpg";
const items = [
  { title: "CFTV e Câmeras", icon: <Camera className="text-emerald-500" />, image: cftvImg, desc: "Monitoramento inteligente com análise avançada." },
  { title: "Cabeamento Estruturado", icon: <Network className="text-emerald-500" />, image: cabeamentoImg, desc: "Projeto e cabeamento para alta performance maximizando a velocidade de transmissão" },
  { title: "Controle de Acesso", icon: <Shield className="text-emerald-500" />, image: acessoImg, desc: "Sistemas seguros para gestão e controle de ambientes." },
  { title: "Reconhecimento Facial", icon: <Eye className="text-emerald-500" />, image: facialImg, desc: "Tecnologia avançada para identificação e segurança." },
  { title: "Telefonia VOIP & PABX", icon: <Phone className="text-emerald-500" />, image: voipImg, desc: "Soluções de comunicação integrada e eficiente." },
  { title: "Wi-Fi Corporativo e Hotspots", icon: <Wifi className="text-emerald-500" />, image: wifiImg, desc: "Projetamos redes Wi-Fi de alta densidade garantindo sinal em toda a planta" },
];

export default function Services(){
  return (
    <section id="servicos" className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(it => (
            <div key={it.title} className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="relative h-40 w-full">
                <img src={it.image} alt={it.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
                <div className="absolute left-4 right-4 bottom-4 text-white">
                <div className="absolute inset-0 px-3 pb-3 flex items-end">
                    <p className="text-sm text-white/90">{it.desc}</p>
                </div>
                </div>
              </div>
              <div className="p-4 pt-3">
                <div className="flex items-center gap-3">
                  <div className="text-emerald-500">{it.icon}</div>
                  <div className="font-semibold text-md leading-tight">{it.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

