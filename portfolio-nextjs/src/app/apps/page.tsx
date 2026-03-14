"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { getAppUrl } from "@/utils/url";
import { useEffect, useState } from "react";

type AppItem = {
  name: string;
  description: string;
  path: string;
  status: "Live" | "WIP";
  tags: string[];
};

const appsData: AppItem[] = [
  {
    name: "Turn-Based Battle Arena",
    description: "Gim strategi turn-based berbasis HTML5 Canvas untuk eksplorasi mekanik pertempuran dan game loop.",
    path: "/apps/turnbasedgame/",
    status: "Live",
    tags: ["Game", "Canvas", "Vite"],
  },
];

export default function AppsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-foreground dark:bg-background">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_circle_at_10%_10%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(800px_circle_at_90%_20%,rgba(168,85,247,0.30),transparent_60%),radial-gradient(800px_circle_at_50%_90%,rgba(34,197,94,0.25),transparent_60%)] dark:bg-[radial-gradient(900px_circle_at_10%_10%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(700px_circle_at_90%_20%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(700px_circle_at_50%_90%,rgba(34,197,94,0.12),transparent_55%)]" />

      <header className="relative border-b border-border/60 bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a
            href="https://rizqibennington.com/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            Kembali ke Situs Utama
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Apps</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Kumpulan aplikasi eksperimen dan proyek sampingan yang saya publikasikan.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {appsData.map((app, index) => (
            <motion.div
              key={app.path}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold leading-tight">{app.name}</h2>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        app.status === "Live"
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/30"
                          : "bg-amber-500/15 text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/30"
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{app.description}</p>
                </div>
                <a
                  href={mounted ? getAppUrl(app.path) : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                  aria-label={`Open ${app.name}`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted/40 px-3 py-1 text-xs text-muted-foreground ring-1 ring-border/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card/70 p-6 text-sm text-muted-foreground backdrop-blur-sm">
          Daftar ini akan diperbarui secara berkala seiring bertambahnya eksperimen dan proyek baru.
        </div>
      </main>
    </div>
  );
}
