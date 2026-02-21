const dictionary = {
  disclaimer: {
    text: "This is an example app built with General Translation to demonstrate i18n capabilities.",
    link: "View all examples",
  },
  header: {
    brand: "General Translation",
    title: "Dictionary Pattern",
  },
  hero: {
    heading: "Key-based translation with dictionaries",
    description:
      "This demo shows the traditional dictionary pattern using loadDictionary, useTranslations, and getTranslations. This approach is familiar to teams migrating from other i18n libraries like next-intl or react-i18next.",
  },
  serverSection: {
    title: "Server Component",
    badge: "getTranslations",
    description:
      "Server components use getTranslations to access dictionary entries. The function is async and returns translated strings at render time.",
    greeting: "Hello, {name}!",
    itemCount: "You have {count} items in your cart.",
    welcome: "Welcome back to the dashboard.",
  },
  clientSection: {
    title: "Client Component",
    badge: "useTranslations",
    description:
      "Client components use the useTranslations hook to access dictionary entries. It works identically to the server version but runs in the browser.",
    searchPlaceholder: "Search for anything...",
    resultsFound: "{count} results found",
    noResults: "No results found. Try a different search term.",
    filterLabel: "Filter by category",
  },
  variablesSection: {
    title: "Variables in Translations",
    badge: "Dynamic values",
    description:
      "Dictionary entries support variable interpolation using curly brace syntax. Pass values as the second argument to the translation function.",
    temperature: "The current temperature is {temp} degrees.",
    lastLogin: "Last login: {date}",
    notification: "You have {count} unread notifications.",
  },
  prefixSection: {
    title: "Prefix Scoping",
    badge: "Nested keys",
    description:
      "Use prefixes to scope dictionary access to a specific section. This keeps component code clean and avoids repeating long key paths.",
    settings: {
      theme: "Theme",
      language: "Language",
      notifications: "Notifications",
      privacy: "Privacy",
    },
  },
  howItWorks: {
    title: "How it works",
    step1:
      "Define all translatable strings in a central dictionary.ts file with nested keys.",
    step2:
      "Use getTranslations in server components or useTranslations in client components to access entries by key.",
    step3:
      "Run npx gtx-cli translate to generate translation files for each locale. The CLI reads your dictionary and produces JSON files.",
    step4:
      "Load translations at runtime with loadTranslations, which imports the generated JSON for the current locale.",
  },
  migration: {
    title: "Migrating from other libraries",
    description:
      "The dictionary pattern in gt-next mirrors the approach used by next-intl, react-i18next, and similar libraries. If you have existing translation files, you can reuse your key structure and gradually adopt GT features.",
  },
};

export default dictionary;
