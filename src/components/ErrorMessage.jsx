const ErrorMessage = ({ status }) => {
  const isNotFound = status === 404;
  const isRateLimited = status === 403 || status === 429;
  const heading = isNotFound ? 'User not found' : isRateLimited ? 'GitHub request limit reached' : 'Search failed';
  const message = isNotFound
    ? 'We couldn’t find a GitHub user with that username. Check the spelling and try searching again.'
    : isRateLimited
      ? 'GitHub is limiting requests right now. Please wait a little and try again.'
      : 'We couldn’t load this profile and its repositories. Please try again.';

  return (
    <section
      className="mx-auto mt-12 flex w-full max-w-3xl flex-1 items-center justify-center pb-4"
      aria-labelledby="error-heading"
      role="alert">
      <div className="relative w-full overflow-hidden rounded-3xl border border-white/8 bg-[#10171f]/60 px-6 py-10 text-center shadow-2xl shadow-black/10 sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(248,113,113,0.1),transparent_42%)]" />

        <div className="relative">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/10 text-red-300 shadow-lg shadow-red-950/30">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7 fill-none stroke-current stroke-2">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m15.5 15.5 4.5 4.5M8.5 10.5h4" strokeLinecap="round" />
            </svg>
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-red-400">
            {isNotFound ? '404 error' : 'Request error'}
          </p>
          <h2 id="error-heading" className="mt-2 text-2xl font-black tracking-tight text-white">
            {heading}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">
            {message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ErrorMessage;
