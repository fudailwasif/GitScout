import { useRef, useState } from 'react';
import ProfileCard from './components/ProfileCard.jsx';
import RepoList from './components/RepoList.jsx';
import SearchBar from './components/SearchBar.jsx';
import EmptyState from './components/EmptyState.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const activeRequest = useRef(null);

  const handleData = async username => {
    const trimmedUsername = username.trim();
    if (!trimmedUsername) return;

    activeRequest.current?.abort();
    const controller = new AbortController();
    activeRequest.current = controller;

    setResult(null);
    setError(null);
    setIsLoading(true);

    const userUrl = `https://api.github.com/users/${encodeURIComponent(trimmedUsername)}`;

    try {
      const [profileResponse, reposResponse] = await Promise.all([
        axios.get(userUrl, { signal: controller.signal }),
        axios.get(`${userUrl}/repos`, {
          signal: controller.signal,
          params: { sort: 'updated', per_page: 100 },
        }),
      ]);

      if (!controller.signal.aborted) {
        setResult({ profile: profileResponse.data, repos: reposResponse.data });
      }
    } catch (requestError) {
      if (!controller.signal.aborted) {
        setError(requestError.response?.status ?? 'other');
      }
    } finally {
      if (activeRequest.current === controller) {
        activeRequest.current = null;
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#090e13] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_5%,rgba(52,211,153,0.12),transparent_28%),radial-gradient(circle_at_90%_30%,rgba(59,130,246,0.08),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px] [mask-linear-gradient(to_bottom,black,transparent_80%)]" />

      <header className="relative z-10 border-b border-white/8 bg-[#090e13]/70 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
          aria-label="Main navigation">
          <a href="/" className="flex items-center gap-3 text-white">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white text-slate-950 shadow-lg shadow-white/10">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-current">
                <path d="M12 .7A11.5 11.5 0 0 0 8.36 23.1c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.29-5.27-5.68 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.47.11-3.05 0 0 .98-.31 3.16 1.18A11.1 11.1 0 0 1 12 6.13c.98 0 1.95.13 2.86.38 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.76.11 3.05.75.81 1.2 1.83 1.2 3.09 0 4.4-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.15v3.25c0 .31.21.67.79.56A11.5 11.5 0 0 0 12 .7Z" />
              </svg>
            </span>
            <span className="text-lg font-black tracking-tight">GitScout</span>
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs font-semibold text-slate-500 sm:inline">Built for the GitHub API</span>
            <a
              href="https://github.com"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-bold text-slate-300 transition hover:bg-white/[0.08] hover:text-white">
              GitHub
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-16 pt-16 sm:px-8 sm:pt-20">
        <SearchBar userData={userData} setUserData={setUserData} handleData={handleData} isLoading={isLoading} />
        {isLoading ? (
          <p className="mt-12 text-center text-sm text-slate-400" role="status">
            Loading profile and repositories…
          </p>
        ) : error ? (
          <ErrorMessage status={error} />
        ) : result === null ? (
          <EmptyState />
        ) : (
          <div className="mt-16 grid items-start gap-7 lg:grid-cols-[330px_minmax(0,1fr)]">
            <ProfileCard userResponse={result.profile} />
            <RepoList userRepo={result.repos} />
          </div>
        )}
      </main>

      <footer className="relative z-10 border-t border-white/8 px-5 py-6 text-center text-xs text-slate-600">
        Explore GitHub profiles and repositories.
      </footer>
    </div>
  );
};

export default App;
