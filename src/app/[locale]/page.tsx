import { getTranslations } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import ClientDemo from "@/components/ClientDemo";
import LanguageBadge from "@/components/LanguageBadge";

export default async function Home() {
  const d = await getTranslations();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              {d("header.brand")}
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {d("header.title")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/dictionary-pattern"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            {d("hero.heading")}
          </h2>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed mb-4">
            {d("hero.description")}
          </p>
          <LanguageBadge />
        </div>

        <div className="space-y-6">
          {/* Server Component Section */}
          <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-base font-semibold text-neutral-100">
                {d("serverSection.title")}
              </h2>
              <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                {d("serverSection.badge")}
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {d("serverSection.description")}
            </p>
            <div className="space-y-2">
              <div className="bg-neutral-950 rounded-lg px-4 py-3 text-neutral-100 text-lg font-medium border border-neutral-800">
                {d("serverSection.greeting", { name: "Alice" })}
              </div>
              <div className="bg-neutral-950 rounded-lg px-4 py-3 text-neutral-100 text-lg font-medium border border-neutral-800">
                {d("serverSection.itemCount", { count: 3 })}
              </div>
              <div className="bg-neutral-950 rounded-lg px-4 py-3 text-neutral-100 text-lg font-medium border border-neutral-800">
                {d("serverSection.welcome")}
              </div>
            </div>
            <p className="text-xs text-neutral-600 font-mono leading-relaxed break-all">
              {`const d = await getTranslations(); d("serverSection.greeting", { name: "Alice" })`}
            </p>
          </div>

          {/* Client Component Section */}
          <ClientDemo />

          {/* Variables Section */}
          <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-base font-semibold text-neutral-100">
                {d("variablesSection.title")}
              </h2>
              <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                {d("variablesSection.badge")}
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {d("variablesSection.description")}
            </p>
            <div className="space-y-2">
              <div className="bg-neutral-950 rounded-lg px-4 py-3 text-neutral-100 text-lg font-medium border border-neutral-800">
                {d("variablesSection.temperature", { temp: "22" })}
              </div>
              <div className="bg-neutral-950 rounded-lg px-4 py-3 text-neutral-100 text-lg font-medium border border-neutral-800">
                {d("variablesSection.lastLogin", { date: "February 18, 2026" })}
              </div>
              <div className="bg-neutral-950 rounded-lg px-4 py-3 text-neutral-100 text-lg font-medium border border-neutral-800">
                {d("variablesSection.notification", { count: 7 })}
              </div>
            </div>
            <p className="text-xs text-neutral-600 font-mono leading-relaxed break-all">
              {`d("variablesSection.temperature", { temp: "22" })`}
            </p>
          </div>

          {/* Prefix Section */}
          <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-base font-semibold text-neutral-100">
                {d("prefixSection.title")}
              </h2>
              <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                {d("prefixSection.badge")}
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {d("prefixSection.description")}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {(["theme", "language", "notifications", "privacy"] as const).map(
                (key) => (
                  <div
                    key={key}
                    className="bg-neutral-950 rounded-lg px-4 py-3 text-neutral-100 font-medium border border-neutral-800"
                  >
                    {d(`prefixSection.settings.${key}`)}
                  </div>
                )
              )}
            </div>
            <p className="text-xs text-neutral-600 font-mono leading-relaxed break-all">
              {`const d = await getTranslations("prefixSection.settings"); d("theme")`}
            </p>
          </div>

          {/* How it works */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 space-y-3">
            <h2 className="text-base font-semibold text-neutral-100">
              {d("howItWorks.title")}
            </h2>
            <div className="text-sm text-neutral-400 space-y-2 leading-relaxed">
              <p>{d("howItWorks.step1")}</p>
              <p>{d("howItWorks.step2")}</p>
              <p>{d("howItWorks.step3")}</p>
              <p>{d("howItWorks.step4")}</p>
            </div>
          </div>

          {/* Migration note */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 space-y-3">
            <h2 className="text-base font-semibold text-neutral-100">
              {d("migration.title")}
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {d("migration.description")}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
