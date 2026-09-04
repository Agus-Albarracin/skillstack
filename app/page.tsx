import { SkillExplorer } from "@/components/skill-explorer";
import { skills } from "@/lib/skills";

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
      <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="contenido">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Skillstack, volver al inicio">
          <span className="brand-mark"><SparkIcon /></span>
          <span>skillstack<span className="brand-dot">.</span></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#catalogo">Explorar skills</a>
          <a href="#metodo">Cómo usarlo</a>
          <a className="nav-cta" href="#catalogo">
            Ver catálogo <ArrowIcon />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Curado para equipos modernos
          </div>
          <h1>
            Tu stack completo.
            <span>Skill por skill.</span>
          </h1>
          <p>
            Una colección curada de skills para diseñar, construir, probar y
            desplegar aplicaciones full stack con mejores decisiones desde el
            primer commit.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#catalogo">
              Explorar las {skills.length} skills <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#metodo">
              Conocer el método
            </a>
          </div>
          <dl className="hero-stats" aria-label="Resumen del catálogo">
            <div><dt>{skills.length}</dt><dd>skills curadas</dd></div>
            <div><dt>6</dt><dd>áreas clave</dd></div>
            <div><dt>100%</dt><dd>open source</dd></div>
          </dl>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="stack-card card-back">
            <span>SHIP</span><strong>Deploy<br />confidently.</strong>
          </div>
          <div className="stack-card card-middle">
            <span>BUILD</span><strong>Compose<br />the stack.</strong>
          </div>
          <div className="stack-card card-front">
            <div className="card-symbol"><SparkIcon /></div>
            <span>LEARN</span><strong>Master<br />every layer.</strong>
            <small>21 curated skills · v1.0</small>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Tecnologías incluidas">
        <span>REACT</span><i />
        <span>NEXT.JS</span><i />
        <span>TAILWIND</span><i />
        <span>POSTGRESQL</span><i />
        <span>DOCKER</span><i />
        <span>PLAYWRIGHT</span>
      </section>

      <SkillExplorer />

      <section className="method" id="metodo" aria-labelledby="method-title">
        <div className="section-kicker">Un sistema, no una lista</div>
        <div className="method-heading">
          <h2 id="method-title">De la idea a producción,<br />sin puntos ciegos.</h2>
          <p>
            Elegí las skills que acompañan cada etapa de tu proyecto. Cada una
            suma contexto especializado sin perder de vista el producto completo.
          </p>
        </div>
        <ol className="method-grid">
          <li><span>01</span><h3>Diseñá</h3><p>Define interfaces, contratos y datos antes de construir.</p></li>
          <li><span>02</span><h3>Construí</h3><p>Implementa cada capa con patrones probados y mantenibles.</p></li>
          <li><span>03</span><h3>Verificá</h3><p>Automatiza calidad, seguridad y accesibilidad desde el inicio.</p></li>
          <li><span>04</span><h3>Desplegá</h3><p>Observa, opera y evoluciona tu producto con confianza.</p></li>
        </ol>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark"><SparkIcon /></span>
          <span>skillstack<span className="brand-dot">.</span></span>
        </a>
        <p>Un mapa abierto para construir mejor software.</p>
        <a href="https://github.com/Agus-Albarracin/GSFS" target="_blank" rel="noreferrer">
          Ver en GitHub <ArrowIcon />
        </a>
      </footer>
    </main>
  );
}
