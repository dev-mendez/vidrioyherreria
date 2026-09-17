import { PROCESO } from "@/lib/site-data";

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-slate-950 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Nuestro proceso de trabajo
          </h2>
          <p className="mt-3 text-slate-400">
            No improvisamos: cada proyecto sigue un proceso pensado para dar
            resultados seguros, duraderos y a tu medida.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {PROCESO.map((item) => (
            <li key={item.step} className="flex flex-col gap-2 border-t border-amber-400/40 pt-4">
              <span className="text-sm font-mono text-amber-400">
                {item.step}
              </span>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
