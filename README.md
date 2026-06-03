# Fermetures Djem – Site Web

Site vitrine pour Fermetures Djem, spécialiste en volets roulants, rideaux métalliques, fenêtres, portails, garde-corps, vérandas et motorisations.

## Stack

- **Vite** – bundler ultra-rapide
- **React 18** – UI déclarative
- **Tailwind CSS** – styles utilitaires
- **Lucide React** – icônes SVG

## Lancer en local

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
npm run dev
```

Ouvrez ensuite [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## Structure

```
src/
├── components/
│   ├── Header.jsx        # Navigation fixe responsive
│   ├── Hero.jsx          # Section d'accueil plein écran
│   ├── Services.jsx      # Grille des 8 services
│   ├── WhyUs.jsx         # Section "Pourquoi nous choisir"
│   ├── Realisations.jsx  # Galerie de réalisations
│   ├── Contact.jsx       # Formulaire de contact + coordonnées
│   └── Footer.jsx        # Pied de page complet
├── App.jsx
├── main.jsx
└── index.css
```

## Commandes disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement (hot-reload) |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualiser le build de production |
