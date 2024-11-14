# **[Accéder au projet](https://brextiar.github.io/CPI_3-25_DEV_ISI_RENNES/)**

# CPI_3-25_DEV_ISI_RENNES

# Projet Développement Web - Formateur : **[Brice AIELLO](https://github.com/baiello)**
**CPI 3-25 DEV ISI RENNES**

---

## 1. Contexte et définition du besoin

Vous êtes freelance et vous venez d’être missionné par l’entreprise “Sup de Cuisine” en tant que développeur Front-End pour une mission de développement Web.

Après avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g.

Marine, cheffe de projet, est chargée de la "digitalisation" de l'entreprise avec la création de ce site web. Pour l’instant, elle travaille uniquement avec des freelances comme vous, avant de créer une équipe en interne pour gérer ce projet.

Afin de s’assurer que vous avez tout ce qu’il vous faut à disposition, elle vous envoie un message :

---

### À Vous

**De** : Marine  
**Objet** : Sup de Cuisine - Onboarding

Je suis ravie de t’avoir dans l’équipe pour cette nouvelle étape du projet.

Comme tu le sais, les sites offrant des recettes de cuisine sont nombreux et l’équipe a pensé que l’un des éléments qui peuvent faire la différence sur notre site est la fluidité du moteur de recherche. Ce que l’on veut avant tout c’est quelque chose de performant car nos utilisateurs veulent une recherche rapide, presque instantanée !

L’équipe Back-end n’étant pas encore formée, nous disposons uniquement d’un fichier contenant un tableau JSON de 50 recettes, que je vais te mettre à disposition.

Je vais aussi te partager un lien permettant de télécharger une archive contenant 50 images pour les recettes. Elles ne sont pas celles définitives mais elles te permettront d’avoir un rendu fidèle au wireframe.

**Ta mission consistera à :**
- Intégrer les wireframes pour en faire un site web responsive ;
- Utiliser les données fournies pour le contenu ;
- Implémenter la fonction de recherche ;
- Fournir un code organisé et testé pour qu'il puisse être repris par notre future équipe interne de développeurs.

**Voici les ressources dont tu auras besoin :**
- Les wireframes ;
- Les images ;
- Les données des recettes au format JSON ;
- La description du cas d’utilisation de recherche.

Je te laisse voir comment procéder en détail directement avec Alan.

Bien à toi,  
Marine.

---

En fin de matinée, vous recevez une notification Slack d'Alan, votre Tech Lead :

**Alan** : Salut ! Comme tu as pu le voir, la performance et la recherche sont des fonctionnalités très importantes et on compte sur toi pour les développer d’une manière optimale.

**Vous** : Très bien. Du coup, tu me conseilles de procéder comment ?

**Alan** : Alors ce que je te conseille c’est de commencer par implémenter ton interface comme ça tu es débarrassé.

Fais en sorte d'avoir un document HTML structuré car nous souhaitons être bien positionnés sur les moteurs de recherche. Il faudra aussi que tu écrives tout le CSS toi-même, nous n'aimons pas utiliser des outils comme Bootstrap ou Tailwind.

Veille à bien écrire du code qui passe avec succès le validateur W3C et qui offre un bon score Lighthouse.

**Vous** : Ok et ensuite la recherche ?

**Alan** : Exactement🙂

Tu peux commencer par faire un schéma afin qu’on comprenne bien l'enchaînement des étapes de ton algorithme, cela sera surtout utile à l’équipe Back-end.

Et ensuite il faudra l'implémenter !

Comme pour le CSS, il faudra aussi que tu écrives tout le code Javascript toi-même, sans utiliser de librairies.

J'aimerais aussi que ton code soit organisé, en respectant les bonnes pratiques de Green Code : découpe ton code au maximum en fonctions réutilisables, par exemple pour les cartes des recettes ou encore la génération des listes de tags. Utilise des design patterns si tu le peux.

Tu feras aussi attention au risque d’injection de balises html ou toute autre faille de sécurité dans le site via les formulaires.

**Vous** : C'est compris, je me lance !🚀

- [Wireframe lien Balsamiq](https://balsamiq.cloud/sv3grk7/p897p2f)
- [Images lien Google Drive](https://drive.google.com/file/d/1JsGRKz-4Mxo0MJm6UrbblXDptZomCmP5/view?usp=sharing)
- [JSON lien GitHub Gist](https://gist.githubusercontent.com/baiello/0a974b9c1ec73d7d0ed7c8abc361fc8e/raw/e598efa6ef42d34cc8d7e35da5afab795941e53e/recipes.json)

**Alan** : Pas si vite😇

Tu devras aussi versionner ton projet, pour que l'on puisse collaborer dessus. Cet historique devra être organisé : chaque commit doit correspondre à un petit ajout ou une petite amélioration, et son label devra être cohérent.

Enfin, il sera nécessaire d'y ajouter quelques tests, unitaires et fonctionnels, afin que l'on puisse s'assurer du bon fonctionnement des fonctionnalités les plus importantes !

**Vous** : Parfait, tout est clair, merci pour tes conseils !

---

## 2. Consignes et livrables

Ce projet sert d'évaluation commune aux modules :
- HTML/CSS/JS
- MISE EN SITUATION DEV

Il devra être réalisé de façon individuelle.

**Livrables demandés :**
- Les sources de votre projet dans un dépôt Github privé et partagé avec votre formateur (github username : baiello) ;
- Le lien vers votre projet déployé (indiquer ce lien dans un fichier README.md à la racine du projet) ;
- Un document au format PDF contenant le schéma de votre algorithme, incluant un feedback sur la réalisation du projet (difficultés et solutions).

**Date limite de rendu** : 14 Novembre 2024 à 18h00. L'accès au dépôt devra être fourni à votre formateur avant la date limite de rendu. Tout retard sera pénalisé ainsi que tout commit ajouté entre la deadline et la remise des notes.

---

## 3. Barème

**Module - HTML / CSS / JS**

| Critère                                                | Barème |
|--------------------------------------------------------|--------|
| Structure HTML                                         | / 2    |
| Intégration du design et gestion du responsive         | / 3    |
| Qualité et organisation du code                        | / 3    |
| Qualité de l'algorithme de recherche et schématisation | / 4    |
| Implémentation de l'algorithme de recherche            | / 8    |

**Module - Mise en situation dev**

| Critère                                            | Barème |
|----------------------------------------------------|--------|
| Gestion de versions                                | / 4    |
| Qualité du dépôt git                               | / 4    |
| Implémentation de tests unitaires et d'intégration | / 5    |
| Déploiement du site                                | / 3    |
| Feedback projet                                    | / 4    |

---

## Annexe : Description du cas d’utilisation de recherche

### Scénario nominal

1. Le cas d’utilisation commence lorsque l’utilisateur entre au moins 3 caractères dans la barre de recherche principale.
2. Le système recherche des recettes correspondant à l’entrée utilisateur dans : le titre de la recette, la liste des ingrédients de la recette, la description de la recette.
3. L’interface est actualisée avec les résultats de recherche.
4. Les champs de recherche avancée sont actualisés avec les informations : ingrédients, ustensiles, appareil des différentes recettes restantes.
5. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil.
6. Au fur et à mesure du remplissage, les mots-clés ne correspondant pas à la frappe dans le champ disparaissent. Par exemple, si l’utilisateur entre “coco” dans la liste d’ingrédients, seuls “noix de coco” et “lait de coco” resteront.
7. L’utilisateur choisit un mot-clé dans le champ.
8. Le mot-clé apparaît sous forme de tag sous la recherche principale.
9. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée.

### Scénario alternatif 1 : Aucune recette correspondante à la recherche

1. Le cas d’utilisation commence lorsque l’utilisateur entre au moins 3 caractères dans la barre de recherche principale.
2. Le système recherche des recettes correspondant à l’entrée utilisateur dans : le titre de la recette, la liste des ingrédients de la recette, la description de la recette.
3. L’interface affiche « Aucune recette ne contient ‘XXX’. Vous pouvez chercher «tarte aux pommes», «poisson», etc. (le XXX correspond à ce que l’utilisateur a écrit dans la recherche).

### Scénario alternatif 2 : L’utilisateur commence sa recherche par un tag

1. L’utilisateur commence la recherche par un tag.
2. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée.

### Scénario alternatif 3 : L’utilisateur ajoute d’autres tags pour la recherche avancée

1. Le cas d’utilisation commence lorsque l’utilisateur entre au moins 3 caractères dans la barre de recherche principale.
2. Le système recherche des recettes correspondant à l’entrée utilisateur dans : le titre de la recette, la liste des ingrédients de la recette, la description de la recette.
3. L’interface est actualisée avec les résultats de recherche.
4. Les champs de recherche avancée sont actualisés avec les informations : ingrédients, ustensiles, appareil des différentes recettes restantes.
5. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil.
6. Au fur et à mesure du remplissage, les mots-clés ne correspondant pas à la frappe dans le champ disparaissent. Par exemple, si l’utilisateur entre “coco” dans la liste d’ingrédients, seuls “noix de coco” et “lait de coco” resteront.
7. L’utilisateur choisit un mot-clé dans le champ.
8. Le mot-clé apparaît sous forme de tag sous la recherche principale.
9. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée.
10. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil.
11. Au fur et à mesure du remplissage, les mots-clés ne correspondant pas à la frappe dans le champ disparaissent.
12. L’utilisateur choisit un mot-clé dans le champ.
13. Le mot-clé apparaît sous forme de tag sous la recherche principale.
14. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée.

### Règles de gestion

Ces points doivent absolument être respectés durant le développement :

1. La recherche doit pouvoir se faire via le champ principal ou via les tags (ingrédients, ustensiles ou appareil).
2. La recherche principale se lance à partir de 3 caractères entrés par l’utilisateur dans la barre de recherche.
3. La recherche s’actualise pour chaque nouveau caractère entré.
4. La recherche principale affiche les premiers résultats le plus rapidement possible.
5. Les champs ingrédients, ustensiles et appareil de la recherche avancée proposent seulement les éléments restants dans les recettes présentes sur la page.
6. Les retours de recherche doivent être une intersection des résultats. Si l’on ajoute les tags “coco” et “chocolat” dans les ingrédients, on doit récupérer les recettes qui ont à la fois de la coco et du chocolat.
7. Comme pour le reste du site, le code HTML et CSS pour l’interface devra passer avec succès le validateur W3C.
8. Aucune librairie ne sera utilisée pour le JavaScript du moteur de recherche.
