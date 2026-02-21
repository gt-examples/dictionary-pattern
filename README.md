# Dictionary Pattern

Key-based translation using `loadDictionary`, `useTranslations`, and `getTranslations` — the traditional dictionary pattern familiar to teams migrating from other i18n libraries.

**[Live Demo](https://dictionary-pattern.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example demonstrates the dictionary-based translation pattern in gt-next. All translatable strings are defined in a central `dictionary.ts` file with nested keys, then accessed via `getTranslations` (server) or `useTranslations` (client). This approach mirrors how libraries like next-intl and react-i18next work, making migration straightforward.

## GT Features Used

- `getTranslations` — Server-side dictionary access
- `useTranslations` — Client-side dictionary hook
- `loadTranslations` — Local translation storage
- `getGT` — String translations for metadata
- `<LocaleSelector>` — Language picker
- Variable interpolation with `{curly brace}` syntax
- Prefix scoping for nested dictionary keys

## Getting Started

```bash
git clone https://github.com/gt-examples/dictionary-pattern.git
cd dictionary-pattern
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
