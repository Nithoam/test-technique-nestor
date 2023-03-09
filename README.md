### Test Technique "Chez Nestor" - Nicolas Garilliere

## Stack technique du projet
- Next.js
- Typescript
- TailwindCSS
- Hebergement sur Vercel

## Résumé de travail effectué
- Toutes les tâches ont été réalisées, à l'exception du CRUD des apppartements, en 2h40 de travail environ.
- Les données des appartements sont stockées dans un fichier json.
- La page d'accueil permet de visualier les différents appartements.
- Chaque appartement possède une page détaillée.
- Le context permet la gestion du mode clair/sombre du site.

## Justification de mes choix
- J'ai choisi Next.js car c'est le framework React que je connais le mieux. J'envisageais de créer le CRUD directement grâce à Next, ce qui était aussi une justication de ce choix
- J'ai utilisé Tailwind CSS car c'est aussi une question d'habitude. 
- J'ai déployé via Vercel pour des raisons évidentes de simplicité et d'efficacité.
- Sur la page détaillée d'un appartement, j'ai ajouté une map "google map" afin de vous montrer que je pouvais mettre en place ce genre de service externe.
- J'ai ajouté un mode clair/sombre dans le but d'utiliser le contexte. J'avais envisager d'y stocker une variable pour le tri par prix, mais je n'ai pas eu le temps d'y revenir. 