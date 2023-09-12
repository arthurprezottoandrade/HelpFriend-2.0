const express = require('express');
const multer = require('multer');
const path = require('path');
const CachorroDB = require('./class/CachorroDB');  // Importar a classe
const FuncionarioDB = require('./class/FuncionarioDB');  // Importar a classe
const router = express.Router();

const cachorroDB = new CachorroDB();  // Criar uma instância da classe
const funcionarioDB = new FuncionarioDB();  // Criar uma instância da classe
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.get('/inicio', (req, res) => {
    cachorroDB.buscarCachorros((err, cachorros) => {  // Usar o método da classe
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar os cachorros.');
      } else {
        res.render('inicio', { cachorros });
      }
    });
});

router.get('/cadastroCachorro', (req, res) => {
  res.render('cadastroCachorro');
});
router.get('/mostraCachorro', (req, res) => {
res.render('mostraCachorro');
});
router.get('/atualizaCachorro', (req, res) => {
res.render('atualizaCachorro');
});
router.get('/deletaCachorro', (req, res) => {
res.render('deletaCachorro');
});
router.get('/cadastroFuncionario', (req, res) => {
  res.render('cadastroFuncionario');
});
router.get('/loginFuncionario', (req, res) => {
res.render('loginFuncionario');
});
// Mandando dados

router.post('/cadastroCachorro', upload.single('foto'), (req, res) => {
    const dados = {
      nome: req.body.nome,
      apelido: req.body.apelido,
      anoNascimento: req.body.anoNascimento,
      porte: req.body.porte,
      raca: req.body.raca,
      situacao: req.body.situacao,
      imagem: req.file ? '/uploads/' + req.file.filename : null
    };

    cachorroDB.inserirCachorro(dados, (err) => {  // Usar o método da classe
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar o cachorro.');
      } else {
        res.send('Cadastro realizado com sucesso!');
      }
    });
});
router.post('/cadastroFuncionario', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;
  const cargo = req.body.cargo;
  const cpf = req.body.cpf;

  // Criar uma nova instância de Funcionario
  const novoFuncionario = new FuncionarioDB(nome, email, senha, cargo, cpf);

  // Inserir o novo funcionário no banco de dados
  novoFuncionario.inserirFuncionario(novoFuncionario, (err) => {  
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao cadastrar o funcionario.');
    } else {
      res.send('Cadastro realizado com sucesso!');
    }
  });
});

module.exports = router;