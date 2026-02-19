"use client";

import { useState } from "react";
import { useTranslations } from "gt-next";

export default function ClientDemo() {
  const d = useTranslations("clientSection");
  const [query, setQuery] = useState("");
  const resultCount = query.length > 0 ? query.length * 3 : 0;

  return (
    <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 space-y-4">
      <div className="flex items-center gap-3 flex-wrap">
        <h2 className="text-base font-semibold text-neutral-100">
          {d("title")}
        </h2>
        <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
          {d("badge")}
        </span>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed">
        {d("description")}
      </p>
      <div className="space-y-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={String(d("searchPlaceholder"))}
          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
        />
        <div className="bg-neutral-950 rounded-lg px-4 py-3 text-neutral-100 text-lg font-medium border border-neutral-800">
          {resultCount > 0
            ? d("resultsFound", { count: resultCount })
            : d("noResults")}
        </div>
        <p className="text-xs text-neutral-500">
          {d("filterLabel")}
        </p>
      </div>
      <p className="text-xs text-neutral-600 font-mono leading-relaxed break-all">
        {`const d = useTranslations("clientSection"); d("searchPlaceholder")`}
      </p>
    </div>
  );
}
