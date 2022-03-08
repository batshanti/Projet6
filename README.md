# Projet 6 -  Développez une interface utilisateur pour une application web Python



## Introduction

Ce projet a pour but de remplacer la newsletter de l'association JustStreamIt qui réalise des classements de film.
Une application web réalisé en html, css et javascript va fournir la possibilité de visualiser en temps réel un classement de film.  
L'application récupère les informations sur les films au moyen d'une API REST nommé OCMovies-API.

## Installation de l'API  OCMovies
####  Cloner ce dépôt : 
```
git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git
cd ocmovies-api-fr
```
####  Créer un environnement virtuel pour le projet :
(Linux or Mac)
```
 python3 -m venv venv
 source venv/bin/activate
```
(Windows)
```
 python -m venv env
 env\Scripts\activate
```
#### Installer les packages :
```
pip install -r requirements.txt
```
#### Créer et alimenter la base de données :
```
python manage.py create_db
```
#### Démarrer le serveur  :
```
python manage.py runserver
```

## Installation de l'application web
####  Cloner ce dépôt : 
```
git clone https://github.com/batshanti/Projet6.git
cd Projet6/
```
##  Lancement de l'application web
Ouvrir le fichier "index.html" dans votre navigateur. 

### Navigateurs  web

Cette application fonctionne avec les navigateurs : Chrome, Firefox, Safari, Edge.
Pour certaines versions de Firefox il convient de passer la valeur `dom.dialog_element.enabled`à True via le menu "about:config". Cette manutention concerne uniquement l'affichage de la fenêtre modale.
