"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { motion } from "framer-motion";
import { Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { loginAction, type LoginState } from "@/actions/auth";

const initialState: LoginState = {
  success: false,
  message: "",
  errors: {},
  data: null,
};

export default function LoginPage() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.success && state.data) {
      setAuth({
        user: state.data.user,
        accessToken: state.data.accessToken,
      });
      router.push("/");
    }
  }, [state.success, state.data, setAuth, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to access your account and checkout.
          </p>
        </div>

        {state.message && !state.success && (
          <div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-lg flex items-center gap-2 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <p>{state.message}</p>
          </div>
        )}

        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue="john@mail.com"
              className={`w-full px-4 py-3 rounded-lg bg-background border outline-none transition-all focus:ring-2 focus:ring-primary/20 ${
                state.errors?.email ? "border-destructive" : "border-border"
              }`}
              placeholder="john@mail.com"
            />
            {state.errors?.email && (
              <p className="text-xs text-destructive mt-1">{state.errors.email[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              defaultValue="changeme"
              className={`w-full px-4 py-3 rounded-lg bg-background border outline-none transition-all focus:ring-2 focus:ring-primary/20 ${
                state.errors?.password ? "border-destructive" : "border-border"
              }`}
              placeholder="••••••••"
            />
            {state.errors?.password && (
              <p className="text-xs text-destructive mt-1">
                {state.errors.password[0]}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed mt-6"
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="#" className="font-bold hover:text-foreground underline">
            Sign up
          </Link>
        </div>

        {/* Demo Hint */}
        <div className="mt-8 p-4 bg-secondary/50 rounded-lg text-xs text-muted-foreground text-center">
          <p className="font-bold mb-1">Demo Credentials:</p>
          <p>Email: john@mail.com</p>
          <p>Password: changeme</p>
        </div>
      </motion.div>
    </div>
  );
}
