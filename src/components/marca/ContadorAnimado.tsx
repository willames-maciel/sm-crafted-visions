import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface ContadorAnimadoProps {
  valor: number;
  sufixo?: string;
  rotulo: string;
  duracao?: number;
}

export function ContadorAnimado({ valor, sufixo = "", rotulo, duracao = 1600 }: ContadorAnimadoProps) {
  const { ref, visivel } = useReveal<HTMLDivElement>(0.4);
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    if (!visivel) return;
    let frame = 0;
    const inicio = performance.now();
    const passo = (agora: number) => {
      const p = Math.min((agora - inicio) / duracao, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setAtual(Math.round(valor * eased));
      if (p < 1) frame = requestAnimationFrame(passo);
    };
    frame = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(frame);
  }, [visivel, valor, duracao]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-6xl text-dourado sm:text-7xl">
        {atual}
        {sufixo}
      </p>
      <p className="mt-4 text-xs tracking-[0.24em] text-areia/70 uppercase">{rotulo}</p>
    </div>
  );
}
