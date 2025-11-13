"use client";

import { Search, Mic } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  defaultValue?: string;
  autoFocus?: boolean;
  onSearch?: (query: string) => void;
  showSuggestions?: boolean;
}

// Mock search suggestions based on query
const getSearchSuggestions = (query: string): string[] => {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("python")) {
    return ["Python tutorial", "Python download", "Python documentation", "Python examples"];
  }
  if (lowerQuery.includes("weather")) {
    return ["Weather today", "Weather forecast", "Weather radar", "Weather app"];
  }
  if (lowerQuery.includes("news")) {
    return ["News today", "Breaking news", "Local news", "World news"];
  }

  // Default suggestions
  return [
    `${query} tutorial`,
    `${query} examples`,
    `${query} documentation`,
    `${query} guide`,
  ];
};

export function SearchBar({
  defaultValue = "",
  autoFocus = false,
  onSearch,
  showSuggestions = true,
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (query.length > 0 && isFocused && showSuggestions) {
      const newSuggestions = getSearchSuggestions(query);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query, isFocused, showSuggestions]);

  const handleSearch = (searchQuery: string = query) => {
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery);
      } else {
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      }
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        handleSearch(suggestions[selectedIndex]);
      } else {
        handleSearch();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Escape") {
      setSuggestions([]);
      setSelectedIndex(-1);
    }
  };

  return (
    <div className="relative w-full max-w-[584px]">
      <div
        className={`flex items-center w-full h-[44px] px-4 bg-white rounded-full border transition-shadow ${
          isFocused
            ? "border-transparent shadow-[0_1px_6px_rgba(32,33,36,0.28)]"
            : "border-[hsl(var(--google-border-light))] hover:shadow-[0_1px_6px_rgba(32,33,36,0.28)]"
        }`}
      >
        <Search className="w-5 h-5 text-[#9AA0A6] mr-3" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedIndex(-1);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            // Delay to allow click on suggestions
            setTimeout(() => setIsFocused(false), 200);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search Google or type a URL"
          className="flex-1 bg-transparent border-none outline-none text-base text-[hsl(var(--foreground))]"
        />
        <button
          type="button"
          className="ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Voice search"
        >
          <Mic className="w-6 h-6 text-[hsl(var(--google-blue))]" />
        </button>
      </div>

      {/* Search Suggestions Dropdown */}
      {suggestions.length > 0 && isFocused && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-[0_2px_8px_rgba(32,33,36,0.16)] overflow-hidden z-50">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSearch(suggestion)}
              className={`w-full px-4 py-2 text-left flex items-center gap-3 text-sm transition-colors ${
                index === selectedIndex
                  ? "bg-[hsl(var(--google-button-hover))]"
                  : "hover:bg-[hsl(var(--google-button-bg))]"
              }`}
            >
              <Search className="w-4 h-4 text-[#9AA0A6]" />
              <span className="text-[hsl(var(--foreground))]">{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
