"use client";

import { GoogleHeader } from "@/components/google-header";
import { GoogleFooter } from "@/components/google-footer";
import { GoogleLogo } from "@/components/google-logo";
import { SearchBar } from "@/components/search-bar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <GoogleHeader />

      {/* Main content - centered logo and search */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-20">
        {/* Logo */}
        <div className="mb-8">
          <GoogleLogo />
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-[584px] mb-8">
          <SearchBar autoFocus showSuggestions />
        </div>

        {/* Search Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {}}
            className="px-4 h-9 bg-[hsl(var(--google-button-bg))] hover:bg-[hsl(var(--google-button-hover))] border border-[hsl(var(--google-button-bg))] hover:border-[hsl(var(--google-border-light))] rounded text-sm text-[hsl(var(--foreground))] transition-all"
          >
            Google Search
          </button>
          <button
            type="button"
            onClick={() => {}}
            className="px-4 h-9 bg-[hsl(var(--google-button-bg))] hover:bg-[hsl(var(--google-button-hover))] border border-[hsl(var(--google-button-bg))] hover:border-[hsl(var(--google-border-light))] rounded text-sm text-[hsl(var(--foreground))] transition-all"
          >
            I&apos;m Feeling Lucky
          </button>
        </div>
      </main>

      <GoogleFooter />
    </div>
  );
}