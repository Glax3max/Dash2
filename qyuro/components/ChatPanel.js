import Link from "next/link";
import { ArrowUp, Plus, Sparkles } from "lucide-react";

const suggestions = [
  "Summarize today's workspace updates.",
  "Draft a roadmap for the next release.",
  "Give me a crisp product pitch.",
];

export default function ChatPanel() {
  return (
    <section className="flex min-h-screen flex-1 flex-col">
      <header className="flex items-center justify-between px-6 pt-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/80 via-white/30 to-white/10 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <div className="h-4 w-4 rounded-full bg-black/50" />
          </div>
          <div>
            <p className="text-lg font-semibold text-white">Qyuro</p>
            <p className="text-xs text-white/50">Ambient research workspace</p>
          </div>
        </div>
        <Link
          href="/sign-in"
          className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/20"
        >
          Sign In
        </Link>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-44 w-44 rounded-full bg-cyan-300/10 blur-2xl" />
          <div className="absolute h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div className="h-24 w-24 rounded-full border border-white/20 bg-gradient-to-br from-white/80 via-white/40 to-white/10 shadow-[0_0_30px_rgba(255,255,255,0.35)]" />
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.5em] text-white/50">
          Hey Qyuro
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
          What's on your mind?
        </h1>
        <p className="mt-4 max-w-xl text-sm text-white/60 sm:text-base">
          Ask, explore, and refine ideas with a calm, cinematic workspace built
          for deep thinking.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 transition hover:border-white/30 hover:text-white"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full px-6 pb-10 lg:px-10">
        <div className="mx-auto flex w-full max-w-3xl items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:border-white/30 hover:text-white"
            aria-label="Add attachment"
          >
            <Plus className="h-4 w-4" />
          </button>
          <input
            type="text"
            placeholder="Hey Qyuro, What's up?"
            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white hover:border-white/40"
            aria-label="Send message"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
        <div className="mx-auto mt-6 flex w-full max-w-3xl items-center justify-between text-xs text-white/50">
          <span className="hidden sm:block">
            Tip: Press shift + enter for a new line.
          </span>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full border border-white/10 bg-white/5" />
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
              aria-label="Settings"
            >
              <Sparkles className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
