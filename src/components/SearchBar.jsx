const SearchBar = ({ userData, setUserData, handleData, isLoading }) => {
  const handleSubmit = e => {
    e.preventDefault();
    handleData(userData);
  };

  return (
    <section className="mx-auto w-full max-w-3xl" aria-labelledby="search-heading">
      <div className="mb-7 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.34em] text-emerald-400">Discover developers</p>
        <h1 id="search-heading" className="text-balance text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          Find the people behind the code.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          Search any GitHub username to explore their profile, stats, and latest repositories in one clean view.
        </p>
      </div>

      <form className="group relative" aria-label="Search GitHub profiles" onSubmit={handleSubmit}>
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500/50 via-cyan-500/30 to-violet-500/50 opacity-60 blur transition duration-300 group-focus-within:opacity-100" />
        <div className="relative flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#111820] p-2 shadow-2xl shadow-black/30 sm:flex-row">
          <label htmlFor="github-username" className="sr-only">
            GitHub username
          </label>
          <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 fill-slate-500">
              <path d="M10.75 3.5a7.25 7.25 0 1 0 4.56 12.89l3.65 3.65 1.08-1.08-3.65-3.65A7.25 7.25 0 0 0 10.75 3.5Zm0 1.5a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5Z" />
            </svg>
            <span className="hidden text-sm font-medium text-slate-500 sm:inline">github.com/</span>
            <input
              id="github-username"
              name="username"
              type="text"
              placeholder="username"
              autoComplete="off"
              value={userData}
              onChange={e => setUserData(e.target.value)}
              className="h-12 min-w-0 flex-1 bg-transparent text-base font-semibold text-white outline-none placeholder:font-normal placeholder:text-slate-600"
            />
            <kbd className="hidden rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-500 sm:block">
              ⌘ K
            </kbd>
          </div>
          <button
            type="submit"
            disabled={!userData.trim()}
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 text-sm font-extrabold text-slate-950 transition hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
            {isLoading ? 'Searching…' : 'Fetch profile'}
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
              <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-500">
        <span>Try:</span>
        <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-slate-400">torvalds</span>
        <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-slate-400">gaearon</span>
        <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-slate-400">
          sindresorhus
        </span>
      </div>
    </section>
  );
};

export default SearchBar;
