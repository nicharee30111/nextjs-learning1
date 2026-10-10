# ☕ Americano Portfolio

A modern, responsive personal portfolio built with **Next.js, React, and TypeScript**. Featuring interactive components, API integration, and a clean user experience.

### 🌐 Live Demo

**[Visit Americano Portfolio ↗](https://americano-by-aa.vercel.app/)**

---

## ✨ Features

- **Responsive Design** — Optimized for desktop and mobile devices.
- **Interactive UI** — Smooth navigation and engaging user interactions.
- **Coffee & What? ☕** — Discover random Thai dishes with a single click.
- **API Integration** — Fetch real food data from a public REST API.
- **Loading & Error Handling** — Smooth experience while fetching and displaying data.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | React Framework & App Router |
| **React** | UI Components & State Management |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Styling (if configured) |
| **REST API** | External Data Integration |
| **Vercel** | Hosting & Deployment |

## 🔗 API Integration

This project integrates with **[TheMealDB API](https://www.themealdb.com/api.php)** to display random Thai food recommendations in the *Coffee & What?* section.

**API Endpoint**

`GET https://www.themealdb.com/api/json/v1/1/filter.php?a=Thai`

The application fetches Thai dishes and randomly selects a meal to display, including its name and image.

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Open your browser**

Visit [http://localhost:3000](http://localhost:3000) to explore the website locally.

## ☁️ Deployment

This project is deployed on **Vercel**, with automatic deployments through GitHub integration.

**Live Website:** [americano-by-aa.vercel.app](https://americano-by-aa.vercel.app/)

---

Built with ☕ and curiosity.
