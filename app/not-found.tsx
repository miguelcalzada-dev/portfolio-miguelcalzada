import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";

export default function NotFound() {
  return (
    <main id="main" className="not-found" tabIndex={-1}>
      <div className="shell not-found__inner">
        <p className="mono">Error 404</p>
        <h1>Esta página no está en el registro.</h1>
        <p>
          Puede que el enlace haya cambiado o que la página nunca haya existido.
          El índice sigue disponible.
        </p>
        <div className="not-found__actions">
          <Link href="/" className="button button--solid">
            <ArrowLeft size={16} /> Volver al inicio
          </Link>
          <Link href="/work" className="text-link">
            Ver sistemas <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
