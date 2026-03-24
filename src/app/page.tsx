import Image from "next/image";

const stats = [
  { label: "Token Standard", value: "ERC-20" },
  { label: "Network", value: "Polygon" },
  { label: "Launch Phase", value: "ICO Coming" },
  { label: "Contract", value: "Audit Ready" },
];

const utilities = [
  {
    title: "Low-Fee Transactions",
    text: "Built on Polygon for quick confirmations and efficient gas costs.",
  },
  {
    title: "Community Access",
    text: "Early holders get access to gated updates, governance discussions, and rewards.",
  },
  {
    title: "Future Ecosystem",
    text: "Planned integrations across partner projects and utility-based campaigns.",
  },
];

const tokenomics = [
  { label: "Public ICO", value: "40%" },
  { label: "Liquidity", value: "20%" },
  { label: "Community Rewards", value: "20%" },
  { label: "Team + Ops", value: "20%" },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Preparation",
    description: "Finalize tokenomics, audit contract, and onboard early supporters.",
  },
  {
    phase: "Phase 2",
    title: "ICO Coming",
    description: "Open ICO participation, release official mint details, and verify contract address.",
  },
  {
    phase: "Phase 3",
    title: "Post-Launch Growth",
    description: "Expand utility, partnerships, and reward programs for long-term holders.",
  },
];

const faqs = [
  {
    q: "What is Nux Coin?",
    a: "Nux Coin is an ERC-20 token on Polygon focused on scalable, community-first growth.",
  },
  {
    q: "Is the token live now?",
    a: "Not yet. We are currently in the ICO coming phase and preparing official launch materials.",
  },
  {
    q: "Where will I find the official contract?",
    a: "The verified contract address will be shared on launch day via official channels only.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090909] text-[#f5f5f5]">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-8 md:px-10 lg:py-10">
        <header className="flex items-center justify-between gap-4 rounded-2xl border border-yellow-400/30 bg-black p-4">
          <div className="flex items-center gap-3">
            <Image
              src="/nux-coin.svg"
              alt="Nux Coin logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <div>
              <p className="text-sm text-[#bdbdbd]">Nux Coin</p>
              <p className="text-base font-semibold text-yellow-300">ERC-20 on Polygon</p>
            </div>
          </div>
          <span className="rounded-full border border-yellow-400/40 bg-yellow-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-300">
            ICO Coming
          </span>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-5">
            <p className="inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-300">
              Official Landing Page
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Nux Coin ICO is coming.
              <span className="mt-2 block text-yellow-300">Bold Vision. Built on Polygon.</span>
            </h1>
            <p className="max-w-2xl text-base text-[#c5c5c5] sm:text-lg">
              Nux Coin is an ERC-20 token minting on Polygon, designed for low
              fees, quick settlement, and long-term utility for a growing global
              community.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#notify"
                className="rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
              >
                Join Waitlist
              </a>
              <a
                href="#roadmap"
                className="rounded-xl border border-yellow-400/40 bg-black px-6 py-3 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400/10"
              >
                View Roadmap
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-yellow-400/30 bg-black p-3">
            <Image
              src="/banner.svg"
              alt="Nux Coin banner"
              width={1200}
              height={675}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-yellow-400/20 bg-black p-5"
            >
              <p className="text-sm text-[#9f9f9f]">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-yellow-300">{item.value}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {utilities.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-yellow-400/20 bg-black p-6"
            >
              <h3 className="text-lg font-semibold text-yellow-300">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#c2c2c2]">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-yellow-400/25 bg-black p-6 md:p-8">
          <h2 className="text-2xl font-bold">Tokenomics Snapshot</h2>
          <p className="mt-2 text-[#bbbbbb]">Initial allocation overview before ICO opens.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tokenomics.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-yellow-400/20 bg-[#111111] px-4 py-3"
              >
                <p className="text-xs uppercase tracking-wider text-[#a6a6a6]">{item.label}</p>
                <p className="mt-1 text-xl font-bold text-yellow-300">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="roadmap"
          className="rounded-3xl border border-yellow-400/25 bg-black p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold">Launch Roadmap</h2>
          <p className="mt-2 text-[#bdbdbd]">
            High-level milestones before and after public mint.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {roadmap.map((step) => (
              <article
                key={step.phase}
                className="rounded-2xl border border-yellow-400/20 bg-[#111111] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-yellow-300">
                  {step.phase}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#c2c2c2]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-yellow-400/25 bg-black p-6 md:p-8">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl border border-yellow-400/20 bg-[#111111] p-4">
                <summary className="cursor-pointer list-none text-base font-semibold text-yellow-300">
                  {faq.q}
                </summary>
                <p className="mt-2 text-sm leading-6 text-[#c2c2c2]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="notify"
          className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-yellow-400/30 bg-black p-6 md:flex-row md:items-center"
        >
          <div>
            <h2 className="text-2xl font-bold">Get launch updates first</h2>
            <p className="mt-2 text-[#c2c2c2]">
              Follow our channels and join early access for the mint announcement.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://x.com/nux_coin_x"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black"
            >
              Follow on X
            </a>
            {false && (
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-yellow-400/40 px-5 py-2.5 text-sm font-semibold text-yellow-300"
              >
                Join Telegram
              </a>
            )}
          </div>
        </section>

        <footer className="pb-4 text-center text-sm text-[#8f8f8f]">
          © {new Date().getFullYear()} Nux Coin. Built on Polygon.
        </footer>
      </main>
    </div>
  );
}
