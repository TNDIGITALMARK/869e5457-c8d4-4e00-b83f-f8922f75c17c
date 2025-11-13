/**
 * Search utilities for the Google clone
 */

export interface SearchResult {
  url: string;
  displayUrl: string;
  title: string;
  description: string;
}

/**
 * Get mock search results based on query
 */
export function getSearchResults(query: string): SearchResult[] {
  // In a real app, this would call a search API
  const baseResults: SearchResult[] = [
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

  return baseResults;
}

/**
 * Get search suggestions based on query
 */
export function getSearchSuggestions(query: string): string[] {
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
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

/**
 * Calculate search result count estimate
 */
export function getResultCount(query: string): number {
  // Mock: generate a random-ish number based on query length
  const base = 1000000;
  const variance = query.length * 50000;
  return base + variance;
}
