import Link from "next/link";

export function GoogleFooter() {
  return (
    <footer className="mt-auto bg-[hsl(var(--google-footer-bg))] border-t border-[hsl(var(--google-border-medium))]">
      <div className="px-4 sm:px-8 py-4 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-[hsl(var(--google-text-secondary))]">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/advertising" className="hover:underline">
          Advertising
        </Link>
        <Link href="/business" className="hover:underline">
          Business
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy
        </Link>
        <Link href="/terms" className="hover:underline">
          Terms
        </Link>
        <Link href="/settings" className="hover:underline">
          Settings
        </Link>
      </div>
    </footer>
  );
}
