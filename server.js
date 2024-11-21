import express from 'express';

const posts = [
    {
        id: 1,
        descrição: "Uma foto de teste",
        imagem: "https://placecats.com/millie/300/150",
    },

    {
        id: 2,
        descrição: "Uma foto de teste",
        imagem: "https://placecats.com/millie/300/150",
    },

    {
        id: 3,
        descrição: "Uma foto de teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    
    {
        id: 4,
        descrição: "Uma foto de teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor funcionando.");
});

app.get("/", (req, res) => {
    res.status(200).send("Imersão Backend Alura.");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

app.get("/posts/:id", (req, res) => {
    res.status(200).json(posts);
});