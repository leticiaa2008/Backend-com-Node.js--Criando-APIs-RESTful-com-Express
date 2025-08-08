const express = require('express');
const app = express();

//permitir receber dadosem JSON
app.use(express.json());

//simula em "banco de dados" em memoria
let produtos =[
    {id: 1, nome:"Mouse"},
    {id: 2, nome:"Teclado"}
];

//GET = Lista todos os produtos
app.get('/api/produtos', (req,res) =>{
    res.json (produtos);
})

//post
app.post('/api/produtos', (req,res) =>{
    const novoProduto = {
        id:produto.lenght +1,
        nome:req.body.nome
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
})

//rota principal
app.get('/', (req, res) =>{
    res.send('Olá, este é o servidor com Express');
})

//rota "sobre"
app.get('/sobre',(req,res)=>{
    res.send('pagina sobre');
});

//rota "produtos"
app.get('/produtos',(req,res)=>{
    res.send('Lista de Produtos');
});

//rota que retorna JSON (simula uma API)
app.get('/api/produtos', (req,res)=>{
    const produtos = [
        {id: 1,nome:'mouse'},
        {id: 2,nome:'teclado'},
    ];
    res.json(produtos);

})

//inicia o servidor na portal 3000
app.listen(3000, () =>{
    console.log('Servidor rodando http://localhost:3000');
});