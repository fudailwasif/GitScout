const ProfileCard = ({ userResponse }) => {
  return (
    <aside className="overflow-hidden rounded-3xl border border-white/10 bg-[#10171f]/90 shadow-2xl shadow-black/20">
      <div className="h-28 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.34),_transparent_45%),linear-gradient(120deg,#16202a,#111827)]" />

      <div className="px-6 pb-7">
        <div className="-mt-14 mb-5 flex items-end justify-between gap-4">
          <div className="rounded-3xl bg-[#10171f] p-1.5 shadow-xl">
            <img
              src={userResponse.avatar_url}
              alt={`${userResponse.login}'s avatar`}
              className="size-28 rounded-[1.25rem] object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-black tracking-tight text-white">
          {userResponse.name !== null ? userResponse.name : 'Not Listed'}
        </h2>
        <p className="mt-0.5 text-sm font-medium text-emerald-400">
          {userResponse.login !== null ? userResponse.login : 'Not Listed'}
        </p>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          {userResponse.bio === null ? 'Not Listed' : userResponse.bio}
        </p>

        <dl className="mt-6 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/8 bg-white/[0.025] py-4 text-center">
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Repos</dt>
            <dd className="mt-1 text-lg font-black text-white">
              {userResponse.public_repos !== null ? userResponse.public_repos : '0'}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Followers</dt>
            <dd className="mt-1 text-lg font-black text-white">
              {userResponse.followers !== null ? userResponse.followers : '0'}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Following</dt>
            <dd className="mt-1 text-lg font-black text-white">
              {userResponse.following !== null ? userResponse.following : '0'}
            </dd>
          </div>
        </dl>

        <div className="mt-6 space-y-3 text-sm text-slate-400">
          <div className="flex items-center gap-3">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-slate-500 stroke-2">
              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {userResponse.location === null ? 'Not Listed' : userResponse.location}
          </div>
          <div className="flex items-center gap-3">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-slate-500 stroke-2">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
            </svg>
            <span className="text-slate-300">
              {userResponse.blog !== null && userResponse.blog !== '' ? userResponse.blog : 'Not Listed'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-slate-500 stroke-2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            {userResponse.email === null ? 'Not Listed' : userResponse.email}
          </div>
        </div>

        <a
          href={userResponse.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/[0.08]">
          View on GitHub
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
            <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </aside>
  );
};

export default ProfileCard;
