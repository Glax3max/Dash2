"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Chrome, Loader2, Mail, Lock } from "lucide-react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

const getFriendlyError = (error) => {
  if (!error) return "";
  if (error.code === "auth/invalid-credential") {
    return "Incorrect email or password.";
  }
  if (error.code === "auth/too-many-requests") {
    return "Too many attempts. Please try again later.";
  }
  return "Unable to sign in. Please try again.";
};

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(getFriendlyError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(getFriendlyError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col px-6 pb-16 pt-6 text-white lg:px-12">
      <div>
        <Link
          href="/"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/70 transition hover:border-white/30 hover:text-white"
          aria-label="Back to home"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-black/40 px-8 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <div className="h-5 w-5 rounded-full bg-white/70" />
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-white/50">
              Welcome back
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Qyuro</h1>
            <p className="mt-3 text-sm text-white/60">
              Sign in below to unlock the full potential of Qyuro.
            </p>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Chrome className="h-4 w-4" />
            )}
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/40">
            <span className="h-px flex-1 bg-white/10" />
            or
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/50">
                Email
              </span>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80">
                <Mail className="h-4 w-4 text-white/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@qyuro.ai"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                  required
                />
              </div>
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/50">
                Password
              </span>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80">
                <Lock className="h-4 w-4 text-white/50" />
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Your password"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                  required
                />
              </div>
            </label>
            {error ? (
              <p className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-200">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Mail className="h-4 w-4" />
              )}
              Continue with Email
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-white/40">
            By continuing, you agree to our{" "}
            <span className="underline decoration-white/40 underline-offset-4">
              privacy policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
