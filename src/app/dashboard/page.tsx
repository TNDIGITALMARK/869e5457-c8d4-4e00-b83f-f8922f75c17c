"use client";

import { GoogleHeader } from "@/components/google-header";
import { GoogleFooter } from "@/components/google-footer";
import { GoogleLogo } from "@/components/google-logo";
import { Clock, Bookmark, TrendingUp, ExternalLink } from "lucide-react";
import Link from "next/link";

// Mock user data
const mockUserData = {
  recentSearches: [
    { query: "machine learning tutorial", timestamp: "2 hours ago" },
    { query: "local weather forecast", timestamp: "5 hours ago" },
    { query: "healthy breakfast recipes", timestamp: "1 day ago" },
    { query: "best laptops 2024", timestamp: "2 days ago" },
    { query: "javascript async await", timestamp: "3 days ago" },
  ],
  savedSearches: [
    { query: "job opportunities tech", category: "Career" },
    { query: "apartment rentals downtown", category: "Housing" },
    { query: "weekend hiking trails", category: "Recreation" },
    { query: "best coffee shops nearby", category: "Food & Drink" },
  ],
  frequentlyVisited: [
    {
      name: "Gmail",
      url: "https://gmail.example.com",
      favicon: "📧",
      visits: 127,
    },
    {
      name: "News Today",
      url: "https://news.example.com",
      favicon: "📰",
      visits: 89,
    },
    {
      name: "Social Platform",
      url: "https://social.example.com",
      favicon: "👥",
      visits: 76,
    },
    {
      name: "Developer Docs",
      url: "https://docs.example.com",
      favicon: "📚",
      visits: 64,
    },
  ],
  analytics: {
    totalSearches: 1247,
    mostPopular: "current events summary",
    avgResponseTime: "0.23 seconds",
  },
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <GoogleHeader />

      <main className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full">
        {/* Logo and Title */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <GoogleLogo className="h-12 w-auto" />
          </Link>
          <h1 className="text-2xl text-[hsl(var(--foreground))]">My Dashboard</h1>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-[hsl(var(--google-border-light))] rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-[hsl(var(--google-blue))]" />
              <h3 className="text-sm font-medium text-[hsl(var(--google-text-secondary))]">
                Total Searches
              </h3>
            </div>
            <p className="text-3xl font-light text-[hsl(var(--foreground))]">
              {mockUserData.analytics.totalSearches}
            </p>
            <p className="text-xs text-[hsl(var(--google-text-secondary))] mt-1">
              Today
            </p>
          </div>

          <div className="p-6 bg-white border border-[hsl(var(--google-border-light))] rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-[hsl(var(--google-green))]" />
              <h3 className="text-sm font-medium text-[hsl(var(--google-text-secondary))]">
                Most Popular
              </h3>
            </div>
            <p className="text-lg font-light text-[hsl(var(--foreground))] line-clamp-1">
              {mockUserData.analytics.mostPopular}
            </p>
            <p className="text-xs text-[hsl(var(--google-text-secondary))] mt-1">
              Search query
            </p>
          </div>

          <div className="p-6 bg-white border border-[hsl(var(--google-border-light))] rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-[hsl(var(--google-yellow))]" />
              <h3 className="text-sm font-medium text-[hsl(var(--google-text-secondary))]">
                Avg Response Time
              </h3>
            </div>
            <p className="text-3xl font-light text-[hsl(var(--foreground))]">
              {mockUserData.analytics.avgResponseTime}
            </p>
            <p className="text-xs text-[hsl(var(--google-text-secondary))] mt-1">
              Average
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Searches */}
          <div className="bg-white border border-[hsl(var(--google-border-light))] rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[hsl(var(--google-blue))]" />
              <h2 className="text-lg font-medium text-[hsl(var(--foreground))]">
                Recent Searches
              </h2>
            </div>
            <div className="space-y-3">
              {mockUserData.recentSearches.map((search, index) => (
                <Link
                  key={index}
                  href={`/search?q=${encodeURIComponent(search.query)}`}
                  className="flex items-center justify-between p-3 hover:bg-[hsl(var(--google-button-bg))] rounded-lg transition-colors group"
                >
                  <div className="flex-1">
                    <p className="text-sm text-[hsl(var(--google-link-blue))] group-hover:underline">
                      {search.query}
                    </p>
                    <p className="text-xs text-[hsl(var(--google-text-secondary))] mt-1">
                      {search.timestamp}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[hsl(var(--google-text-secondary))] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Saved Searches */}
          <div className="bg-white border border-[hsl(var(--google-border-light))] rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Bookmark className="w-5 h-5 text-[hsl(var(--google-yellow))]" />
              <h2 className="text-lg font-medium text-[hsl(var(--foreground))]">
                Saved Searches
              </h2>
            </div>
            <div className="space-y-3">
              {mockUserData.savedSearches.map((search, index) => (
                <Link
                  key={index}
                  href={`/search?q=${encodeURIComponent(search.query)}`}
                  className="flex items-center justify-between p-3 hover:bg-[hsl(var(--google-button-bg))] rounded-lg transition-colors group"
                >
                  <div className="flex-1">
                    <p className="text-sm text-[hsl(var(--google-link-blue))] group-hover:underline">
                      {search.query}
                    </p>
                    <p className="text-xs text-[hsl(var(--google-text-secondary))] mt-1">
                      {search.category}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[hsl(var(--google-text-secondary))] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Frequently Visited Sites */}
        <div className="mt-8 bg-white border border-[hsl(var(--google-border-light))] rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[hsl(var(--google-green))]" />
            <h2 className="text-lg font-medium text-[hsl(var(--foreground))]">
              Frequently Visited
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockUserData.frequentlyVisited.map((site, index) => (
              <a
                key={index}
                href={site.url}
                className="flex items-start gap-3 p-4 hover:bg-[hsl(var(--google-button-bg))] rounded-lg transition-colors group"
              >
                <div className="text-3xl">{site.favicon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--google-link-blue))] truncate">
                    {site.name}
                  </p>
                  <p className="text-xs text-[hsl(var(--google-text-secondary))] mt-1">
                    {site.visits} visits
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <GoogleFooter />
    </div>
  );
}
