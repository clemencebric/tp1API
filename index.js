// Clemence Bricout

const express = require("express");
const {Pool} = require("pg");
require("dotenv").config();

const app = express(); //on stocke express dans app
const port = process.env.PORT || 3000;



//Connexion à PostgreSQL

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
});

//Création de la table user(à exécuter une seule fois)

pool.query(`CREATE TABLE IF NOT EXISTS articles(
        id SERIAL PRIMARY KEY,
        title TEXT,
        content TEXT,
        author TEXT
    )`)
.then (() => console.log("la table articles a bien ete creee ou est deja existante"))
.catch (err => console.error(`une erreur c'est produite lors de la tentative de creation de la table user : ${err}`));

//middleware
app.use(express.json())


//définir nos routes

app.get("/", (req, res)=> { //requete et result
    res.send("Hello world")
});


app.get("/articles", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM articles ORDER BY id ASC"); 
        if (result.rows.length <= 0 || !result.rows){
            throw new Error("La table articles est vide ou inexistante.");
        }

        res.status(200).json(result.rows)
    }catch (err) {
        res.status(500).json({
            "message": `une erreur c'est produite lors de la tentative de récupération des données dans la table user : ${err}.`
        });

    }
});

app.post("/articles", async (req,res) => {
    try{
        const {title, content, author} = req.body;

        const result = await pool.query("INSERT INTO articles(title, content, author) VALUES ($1, $2, $3) RETURNING *", [title, content, author]);
        res.status(201).json({
            result : result.rows[0]
        }) //ressource à été créée en conséquence
    } catch (err) {
        console.error(err)
        res.status(500).json({
            message: `Erreur lors de la creation de l'utilisateur: ${err}`,
            reqBody: `${JSON.stringify(req.body)}`
        })
    }
});


app.patch("/articles/edit/title", async (req, res) => {
    try {
        
        const {id, title} = req.body;
        const result = pool.query("UPDATE articles SET title=$2 WHERE id=$1", [id, title])

        res.status(200).json({
            message : `le nom de l'article à été modifié`,
            result: result
        })
    } catch (err) {
        res.status(500).json({
            message : `Une erreur s'est produite lors de la lise à jour du nom de l'article: ${err}`
        })
    }
})

app.delete("/articles/edit/delete", async (req, res) => {
    try {
        const {id} = req.body;
        const result = pool.query("DELETE FROM articles WHERE id=$1", [id])

        res.status(200).json({
            message : `le nom de l'article à été supprimé`,
            result: result
        })

    } catch (err) {
        res.status(500).json({
            message : `une erreur s'est produite lors de la suppréssion de l'article : ${err}`
        })
    }
})

// on lance le serveur express

app.listen(port, () => console.log(`le serveur express est lancé et écoute sur le port ${port}`));

