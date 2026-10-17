const EmptyState = () => {
  return (
    <section
      className="mx-auto mt-12 flex w-full max-w-3xl flex-1 items-center justify-center pb-4"
      aria-labelledby="empty-state-heading">
      <div className="relative w-full overflow-hidden rounded-3xl border border-white/8 bg-[#10171f]/60 px-6 py-10 text-center shadow-2xl shadow-black/10 sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.1),transparent_42%)]" />

        <div className="relative">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-lg shadow-emerald-950/30">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7 fill-none stroke-current stroke-2">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4M8.5 11h5M11 8.5v5" strokeLinecap="round" />
            </svg>
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-emerald-400">Ready to explore</p>
          <h2 id="empty-state-heading" className="mt-2 text-2xl font-black tracking-tight text-white">
            Search for a GitHub developer
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">
            Enter a username above to reveal their profile, community stats, and popular repositories.
          </p>

          <div className="mx-auto mt-7 flex max-w-lg flex-wrap justify-center gap-2.5 text-xs font-semibold text-slate-400">
            <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5">Profile details</span>
            <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5">Follower stats</span>
            <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5">Repositories</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmptyState;
