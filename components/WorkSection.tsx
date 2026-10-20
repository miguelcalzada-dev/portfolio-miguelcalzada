import Link from "next/link";
import ProjectLedger from "./ProjectLedger";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";

export default function WorkSection() {
  return (
    <section id="sistemas" className="section work" aria-labelledby="work-title">
      <div className="shell">
        <Reveal>
          <header className="section-head">
            <h2 id="work-title">Sistemas</h2>
            <p>
              Cuatro productos públicos. Cada uno con su problema, sus decisiones
              y su código.
            </p>
          </header>
        </Reveal>

        <Reveal>
          <ProjectLedger />
        </Reveal>

        <Reveal className="work__foot">
          <Link href="/work" className="text-link">
            Índice completo <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
