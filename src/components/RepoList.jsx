const RepoList = ({ userRepo }) => {
  return (
    <section className="min-w-0 w-full" aria-labelledby="repositories-heading">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.24em] text-emerald-400">Latest work</p>
          <h2 id="repositories-heading" className="text-2xl font-black tracking-tight text-white">
            Repositories
          </h2>
        </div>
        <span className="hidden text-sm font-bold text-slate-400 sm:block">Showing {userRepo.length}</span>
      </div>
      {userRepo.length === 0 ? (
        <p className="rounded-2xl border border-white/10 bg-[#10171f]/80 p-6 text-sm text-slate-400">
          This user has no public repositories yet.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {userRepo.map(repo => (
            <article
              key={repo.id}
              className="group rounded-2xl border border-white/10 bg-[#10171f]/80 p-5 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-[#121b24]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/10 text-emerald-300">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2">
                    <path
                      d="M4 19.5V6a2 2 0 0 1 2-2h12v15.5M6 18h12M6 22h12a2 2 0 0 0 2-2V4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {repo.visibility}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-white transition group-hover:text-emerald-300">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="focus-visible:outline-emerald-400">
                  {repo.full_name}
                </a>
              </h3>
              <p className="mt-2 min-h-10 text-sm leading-5 text-slate-400">
                {repo.description || 'No description provided.'}
              </p>

              <div className="mt-5 flex items-center gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-amber-300" />
                  {repo.language || 'Unknown'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-base text-slate-400">★</span>
                  {repo.stargazers_count}
                </span>
                <span>⑂ {repo.forks_count}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default RepoList;
