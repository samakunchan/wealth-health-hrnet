[![](https://img.shields.io/badge/Plateform-Openclassroom-7451eb)](https://openclassrooms.com)
[![](https://img.shields.io/badge/Projet-Projet_13-blue)]()
[![](https://img.shields.io/badge/View_projet-Click_here-darkGreen)](https://samakunchan.github.io/wealth-health-hrnet/)

# SportSee

Projet 14 Openclassrooms. <br>
Site Internet pour une banque fictifs. Le but est de :
- créer une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
- spécifier des endpoints d'API nécessaires pour une éventuelle deuxième mission une fois que nous aurons terminé la première.

## Installation

1. Repo public

        git clone https://github.com/samakunchan/wealth-health-hrnet
        npm install
2. Repo privé

        git clone https://<ACCESS_TOKEN>@github.com/samakunchan/wealth-health-hrnet
        npm install

## Test

Voir les rôles pour les tests ici : https://www.w3.org/TR/html-aria/#docconformance


## Build local

T'inquiète, je n'installe pas `serve` en global, mais uniquement par projet.

```shell
yarn build && serve -s build -l 4005
```

## Dépendences

```shell
# prettier
yarn add prettier
```
```shell
# serve
yarn add serve
```
```shell
# github pages
yarn add gh-pages
```
```shell
# for management environment
yarn add cross-env
```
```shell
# redux
yarn add react-redux
yarn add @reduxjs/toolkit
```
