"use client";

import { Grid3x3, User } from "lucide-react";
import Link from "next/link";

export function GoogleHeader() {
  return (
    <header className="flex items-center justify-between px-5 py-3 h-[60px]">
      {/* Left side - Gmail and Images links */}
      <div className="flex items-center gap-4">
        <Link
          href="/gmail"
          className="text-[13px] text-[hsl(var(--foreground))] hover:underline"
        >
          Gmail
        </Link>
        <Link
          href="/images"
          className="text-[13px] text-[hsl(var(--foreground))] hover:underline"
        >
          Images
        </Link>
      </div>

      {/* Right side - Apps grid and user icon */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="p-2 rounded-full hover:bg-[hsl(var(--google-button-bg))] transition-colors"
          aria-label="Google apps"
        >
          <Grid3x3 className="w-6 h-6 text-[hsl(var(--google-text-secondary))]" />
        </button>
        <button
          type="button"
          className="w-8 h-8 rounded-full bg-[hsl(var(--google-blue))] flex items-center justify-center hover:opacity-90 transition-opacity"
          aria-label="User account"
        >
          <User className="w-5 h-5 text-white" />
        </button>
      </div>
    </header>
  );
}
