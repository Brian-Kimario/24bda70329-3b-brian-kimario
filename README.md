# 📚 Library Management System (Experiment 3B)

A simple library management web app built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.  
Users can add, search, edit, and remove books from an in‑memory collection.

---

## 🚀 Features

- 🔍 **Search** books by title or author (case‑insensitive)
- ➕ **Add** new books with title and author
- ✏️ **Edit** existing book details
- ❌ **Remove** books from the list
- 💅 Clean UI using shadcn/ui components (Button, Card, Input)

---

## 🧱 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **UI Library**: React + shadcn/ui
- **Styling**: Tailwind CSS
- **State Management**: React `useState` hooks
- **Package Manager**: pnpm

---

## 📂 Project Structure

```text
.
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          # Main Library Management page
├── components/
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── library-button.tsx # Custom button with variants (add/edit/remove)
├── lib/
│   └── utils.ts          # cn() utility for className merging
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
└── tsconfig.json
