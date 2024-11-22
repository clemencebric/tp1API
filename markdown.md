**TP 2 de Clémence Bricout**

## 1- Effectuez une requête GET sur les comments.

mettre dans postman cette adresse en **GET**  :
https://jsonplaceholder.typicode.com/comments 
cela nous renvoie toutes les informations de tous les commentaires présents dans la base de données
le premier renvoyé est :     

    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },



## 2-Effectuez une requête POST sur les todos, en vous basant sur les paramètres existantspour créer votre objet (au format x-www-form-urlencoded).

on met dans postman en **POST** l'adresse suivante :
https://jsonplaceholder.typicode.com/todos
puis nous allons simuler un form en allant dans Body > x-www-form-utlencoded et nous ajoutons les champs 

name  clem 
email clem@gmail.com
body bonjour je suis du texte

et cela renvoie ça avec le code 201 Created :

    {
        "name": "clem",
        "email": "clem@gmail.com",
        "body": "bonjour je suis du texte",
        "id": 201
    }



## 3-Effectuez une requête PATCH sur les posts, en vous basant sur un objet existant et ses paramètres (modifiez le title et le body).

je met dans postman l'adresse suivante avec **GET** afin de **voir l'article que je vais modifier** :
https://jsonplaceholder.typicode.com/posts/201

cela me renvoie :

    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

je **modifie** donc cet article en utilisant **PATCH** :
je garde l'url **https://jsonplaceholder.typicode.com/posts/1** et je met en PATCH 

je remplie les champs du formulaire afin de modifier l'article :

title   titre de l'article
body    contenu de l'article

cela renvoie le contenu après modification :

    {
        "userId": 1,
        "id": 1,
        "title": "titre de l'article",
        "body": "contenu de l'article"
    }

## 4-Effectuez une requête GET permettant d’afficher les commentaires associés au post ayant l’identifiant 1.

Pour voir les commentaires associés à l'article, nous allons en **GET** dans : 
**https://jsonplaceholder.typicode.com/posts/1/comments**

cela nous rend des commentaires, dont le premier est :
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },

## 5- Effectuez une requête GET permettant d’afficher les photos affiliées à l’album numéro 2.

Nous recherchons avec la methode **GET***, l'url :
**https://jsonplaceholder.typicode.com/albums/2/photos**

cela nous renvoie les photos associées à l'album 2, dont la première est :

    {
        "albumId": 2,
        "id": 51,
        "title": "non sunt voluptatem placeat consequuntur rem incidunt",
        "url": "https://via.placeholder.com/600/8e973b",
        "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
    },
