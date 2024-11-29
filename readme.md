# Citronix - Gestion de Ferme de Citrons 🍋
## Présentation du Projet
Citronix est une application conçue pour simplifier et optimiser la gestion des fermes de citrons. Ce système permet aux agriculteurs de suivre la production, la récolte et la vente de leurs produits, tout en garantissant une gestion efficace des ressources disponibles, notamment les fermes, champs, arbres, récoltes, et ventes.

## Fonctionnalités Principales

### 1. Positionnement des Joueurs Selon la Formation Tactique Sélectionnée
### 2. Gestion des cartes de joueurs
### 3. Formulaires Dynamiques pour la Gestion des Joueurs
### 4. Calcul de la Chimie de l'Équipe
### 5. Validation des Champs des Formulaires(RegEx)
### 6. LocalStorage des Formations et Joueurs
### 6. Drag & Drop pour le Changement des Joueurs 
### 7. Changement de Formation Dynamique
### 6. Drag & Drop pour le Changement des Joueurs 
### 9. Responsive Design



## Architecture Technique
1. Technologies Utilisées
- Spring Boot : Framework principal pour créer l'API REST.
- MapStruct : Mapper pour convertir entre entités et DTOs.
- Lombok : Réduction du code répétitif pour les entités (getters, setters, etc.).
- JUnit & Mockito : Tests unitaires pour garantir la fiabilité.
- Validation Spring : Validation des données via annotations.
2. Architecture en Couches
```bash
📂 src
└── 📂 main
    ├── 📂 java
    │   └── 📂 com.citronix
    │       ├── 📂 controller           # Contrôleurs REST
    │       │   ├── FermeController.java
    │       │   ├── ChampController.java
    │       │   ├── ArbreController.java
    │       │   ├── RecolteController.java
    │       │   ├── RecolteDetailController.java
    │       │   └── VenteController.java
    │       │
    │       ├── 📂 service              # Services contenant la logique métier
    │       │   ├── FermeService.java
    │       │   ├── ChampService.java
    │       │   ├── ArbreService.java
    │       │   ├── RecolteService.java
    │       │   ├── RecolteDetailService.java
    │       │   └── VenteService.java
    │       ├── 📂 repository           # Repositories JPA
    │       │   ├── FermeRepository.java
    │       │   ├── ChampRepository.java
    │       │   ├── ArbreRepository.java
    │       │   ├── RecolteRepository.java
    │       │   ├── RecolteDetailRepository.java
    │       │   └── VenteRepository.java
    │       │
    │       ├── 📂 model                # Entités JPA représentant les tables de la base de données
    │       │   ├── Ferme.java
    │       │   ├── Champ.java
    │       │   ├── Arbre.java
    │       │   ├── Recolte.java
    │       │   ├── RecolteDetail.java
    │       │   └── Vente.java
    │       │
    │       └── 📂 dto                  # Objets de transfert de données (DTO)
    │           ├── FermeDto.java
    │           ├── ChampDto.java
    │           ├── ArbreDto.java
    │           ├── RecolteDto.java
    │           ├── RecolteDetailDto.java
    │           └── VenteDto.java
    │
    └── 📂 resources
        └── data.sql             
```
## Exécution
### Cloner le dépôt :
```bash
git clone https://github.com/YounessBoumeshouli/FUT_Champions.git
```


#### Accéder à l'API :

- DATA API : https://younessboumeshouli.github.io/FUT_CHAMPIONS_API/players.json

#### Lien du planification GithubProjects
[Planification](https://github.com/users/YounessBoumeshouli/projects/2/views/1)
## Auteur
Développé avec ❤️ par [Youness Boumeshouli](https://github.com/younessboumeshouli)