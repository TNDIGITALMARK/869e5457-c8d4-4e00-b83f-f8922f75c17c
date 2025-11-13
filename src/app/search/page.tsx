"use client";

import { GoogleLogo } from "@/components/google-logo";
import { SearchBar } from "@/components/search-bar";
import { GoogleFooter } from "@/components/google-footer";
import { Grid3x3, User, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Mock search results data
const getMockResults = (query: string) => {
  const results = [
    {
      url: "https://cookingmasters.example.com/pizza",
      displayUrl: "cookingmasters.example.com › pizza",
      title: "Ultimate Homemade Pizza Recipe - Cooking Masters",
      description:
        "Step by step guide with photos showing you how to make the perfect homemade pizza. Includes tips for the best dough, sauce, and topping combinations.",
    },
    {
      url: "https://foodnetwork-clone.example.com/recipes/pizza",
      displayUrl: "foodnetwork-clone.example.com › recipes › pizza",
      title: "10 Best Pizza Recipes - Food Network Clone",
      description:
        "Professional chef recommendations for creating restaurant-quality pizza at home. Features classic Margherita, pepperoni, and gourmet options.",
    },
    {
      url: "https://bakingbasics.example.com/easy-pizza-dough",
      displayUrl: "bakingbasics.example.com › easy-pizza-dough",
      title: "Easy Pizza Dough Recipe - Baking Basics",
      description:
        "Simple ingredients you have at home to make delicious pizza dough. No special equipment needed. Perfect for beginners and experienced bakers alike.",
    },
    {
      url: "https://pizzalovers.example.com/techniques",
      displayUrl: "pizzalovers.example.com › techniques",
      title: "Pizza Making Techniques - From Novice to Expert",
      description:
        "Learn professional pizza making techniques including hand-tossing, proper oven temperatures, and achieving the perfect crispy crust every time.",
    },
    {
      url: "https://italianfood.example.com/authentic-pizza",
      displayUrl: "italianfood.example.com › authentic-pizza",
      title: "Authentic Italian Pizza - Traditional Methods",
      description:
        "Discover the secrets of authentic Italian pizza making. Traditional methods passed down through generations for the perfect Neapolitan-style pizza.",
    },
  ];

  return results;
};

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = getMockResults(query);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with search */}
      <header className="border-b border-[hsl(var(--google-border-light))] sticky top-0 bg-white z-10">
        <div className="flex items-center gap-8 px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <GoogleLogo className="h-8 w-auto" />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-3xl">
            <SearchBar defaultValue={query} showSuggestions />
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-[hsl(var(--google-button-bg))] transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5 text-[hsl(var(--google-text-secondary))]" />
            </button>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-[hsl(var(--google-button-bg))] transition-colors"
              aria-label="Google apps"
            >
              <Grid3x3 className="w-5 h-5 text-[hsl(var(--google-text-secondary))]" />
            </button>
            <button
              type="button"
              className="w-8 h-8 rounded-full bg-[hsl(var(--google-blue))] flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="User account"
            >
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Search tools */}
        <div className="px-44 py-3 flex gap-6 text-sm">
          <button className="text-[hsl(var(--google-link-blue))] border-b-2 border-[hsl(var(--google-blue))] pb-3">
            All
          </button>
          <button className="text-[hsl(var(--google-text-secondary))] hover:text-[hsl(var(--foreground))]">
            Images
          </button>
          <button className="text-[hsl(var(--google-text-secondary))] hover:text-[hsl(var(--foreground))]">
            Videos
          </button>
          <button className="text-[hsl(var(--google-text-secondary))] hover:text-[hsl(var(--foreground))]">
            News
          </button>
          <button className="text-[hsl(var(--google-text-secondary))] hover:text-[hsl(var(--foreground))]">
            Maps
          </button>
          <button className="text-[hsl(var(--google-text-secondary))] hover:text-[hsl(var(--foreground))]">
            More
          </button>
        </div>
      </header>

      {/* Results */}
      <main className="flex-1 px-6 sm:px-24 lg:px-44 py-4">
        <div className="mb-3 text-sm text-[hsl(var(--google-text-secondary))]">
          About 1,247,000 results (0.23 seconds)
        </div>

        <div className="space-y-8">
          {results.map((result, index) => (
            <div key={index} className="max-w-2xl">
              {/* URL */}
              <div className="flex items-center gap-2 mb-1">
                <div className="text-sm text-[hsl(var(--google-text-secondary))]">
                  {result.displayUrl}
                </div>
              </div>

              {/* Title */}
              <a
                href={result.url}
                className="text-xl text-[hsl(var(--google-link-blue))] hover:underline block mb-1"
              >
                {result.title}
              </a>

              {/* Description */}
              <div className="text-sm text-[hsl(var(--google-text-secondary))] leading-relaxed">
                {result.description}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 mb-8 flex items-center justify-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-[hsl(var(--google-button-bg))] rounded transition-colors">
            <ChevronLeft className="w-5 h-5 text-[hsl(var(--google-blue))]" />
            <span className="text-[hsl(var(--google-link-blue))]">Previous</span>
          </button>

          <div className="flex gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${
                  page === 1
                    ? "bg-[hsl(var(--google-blue))] text-white"
                    : "text-[hsl(var(--google-link-blue))] hover:bg-[hsl(var(--google-button-bg))]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 px-4 py-2 hover:bg-[hsl(var(--google-button-bg))] rounded transition-colors">
            <span className="text-[hsl(var(--google-link-blue))]">Next</span>
            <ChevronRight className="w-5 h-5 text-[hsl(var(--google-blue))]" />
          </button>
        </div>
      </main>

      <GoogleFooter />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
