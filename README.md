# ctOS Mini-Game

> Mini-jeu de devinettes inspiré de l'univers Watch Dogs 1

[![Made with Svelte](https://img.shields.io/badge/Svelte-4-FF3E00?style=flat&logo=svelte)](https://svelte.dev/)
[![Styled with Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Built with Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)](https://vitejs.dev/)

## 🎮 Description

Jeu de 10 énigmes de difficulté croissante avec système de score, chronomètre speedrun et easter eggs cachés. Interface inspirée du système ctOS de Watch Dogs 1.

**[🎯 Jouer en ligne](#)** _(lien à ajouter après déploiement)_

## ⚡ Installation

```bash
# Cloner le repo
git clone https://github.com/votre-username/base-de-bonner.git

# Installer les dépendances
npm install

# Lancer en dev
npm run dev
```

Le jeu sera accessible sur `http://localhost:5173`

## 🚀 Build & Deploy

```bash
# Build de production
npm run build

# Preview du build
npm run preview
```

## 🎯 Fonctionnalités

- ✅ 10 niveaux progressifs (facile → expert)
- ✅ Système de score avec bonus de vitesse
- ✅ Mode Speedrun avec chronomètre
- ✅ Indices progressifs débloquables
- ✅ Easter eggs cachés
- ✅ Sauvegarde automatique (localStorage)
- ✅ Fully responsive (mobile, tablette, desktop)

## 🛠️ Stack

- **Framework:** Svelte 4
- **Build:** Vite 5
- **Styling:** Tailwind CSS 3
- **State:** Svelte Stores
- **Backend:** Supabase _(optionnel)_

## 🔧 Configuration (Optionnel)

Pour activer le leaderboard en ligne, créer un fichier `.env` :

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## 📝 Licence

Aucune licence - Libre d'utilisation

## 👤 Auteur

**VIRY BRANDON**
