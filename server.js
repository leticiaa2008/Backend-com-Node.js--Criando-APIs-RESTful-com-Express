const express = require('express');
const app = express();

// Permite receber dados em JSON
app.use(express.json());

// Simula um "banco de dados" na memória
let produtos = [
    { id: 1, nome: "Mousse" },
    { id: 2, nome: "Teclado" },
];

// GET = Lista todos os produtos
app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

// POST - Adiciona um novo produto
app.post('/api/produtos', (req, res) => {
    const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// PUT - Atualiza um produto
app.put('/api/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const produto = produtos.find(p => p.id === id); 

    if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado!' }); 
    }

    produto.nome = req.body.nome;
    res.json(produto);
});

// DELETE - Remove um produto
app.delete('/api/produtos/:id',(req,res)=>{
    const  id = parseInt(req,params.id);
  if(isNaN(id)){
    return res.status(400).json({mensagem: 'O ID fornecido não é valido '})
  }
  const tamanhoOriginal = produtos.length;
  produtos = produtos.filter(p => p.id !== id );
  if (tamanhoOriginal === produtos.length){
    return res.status(404).json({mensagem:'Produto não encontrado para exclussão'})
  }
});

// Rota principal
app.get('/', (req, res) => {
    res.send('Olá, este é o servidor com Express');
});

// Rota "sobre"
app.get('/sobre', (req, res) => {
    res.send('Página Sobre');
});

// Rota "produtos"
app.get('/produtos', (req, res) => {
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

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
