const express = require('express');
const multer = require('multer');
const path = require('path');
const CachorroDB = require('./class/CachorroDB');  // Importar a classe
const FuncionarioDB = require('./class/FuncionarioDB');  // Importar a classe
const AdotanteDB = require('./class/AdotanteDB');  // Importar a classe
const router = express.Router();
const EstadoAdocao = require('./public/js/estadoAdocao');
const EmailObservador = require('./public/js/observadores');
const transporter = require('./public/js/emailConfig');
const FuncionarioFactory = require('./class/FuncionarioFactory');
const CachorroFactory = require('./class/CachorroFactory');


const emailObservador = new EmailObservador();
EstadoAdocao.adicionarObservador(emailObservador);
const cachorroDB = new CachorroDB()
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
  cachorroDB.buscarCachorros((err, cachorros) => {  // Usar o método da classe
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar os cachorros.');
    } else {
      res.render('mostraCachorro', { cachorros });
    }
  });
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
router.get('/cadastroAdotante', (req, res) => {
  res.render('cadastroAdotante');
});
router.get('/loginFuncionario', (req, res) => {
res.render('loginFuncionario');
});
// Mandando dados
router.post('/cadastroCachorro', upload.single('foto'), (req, res) => {
    // realizando tratamento na imagem 
    const imagem = req.file ? '/uploads/' + req.file.filename : null
    // criando o objeto cachorro utilizando a factory
    const dados = CachorroFactory.criarCachorro(req.body); // Criar uma instância da classe
    dados.imagem = req.file ? '/uploads/' + req.file.filename : null;
    // Enviar o e-mail quando um novo cachorro é cadastrado
    const mailOptions = {
      from: 'seu-email@gmail.com',
      to: 'email-destinatario@gmail.com',
      subject: 'Novo cachorro disponível para adoção!',
      text: 'Um novo cachorro foi cadastrado e está disponível para adoção.'
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviado: ' + info.response);
      }
    });

    dados.inserirCachorro(dados, (err) => {  // Usar o método da classe
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar o cachorro.');
      } else {
        EstadoAdocao.notificarObservadores(dados);
        res.send('Cadastro realizado com sucesso!');
      }
    });
});
router.post('/cadastroFuncionario', (req, res) => {
  // criando objeto funcionario utilizando a factory
  const dados = FuncionarioFactory.criarFuncionario(req.body);

  // Inserir o novo funcionário no banco de dados
  dados.inserirFuncionario(dados, (err) => {  
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao cadastrar o funcionario.');
    } else {
      res.send('Cadastro realizado com sucesso!');
    }
  });
});
router.post('/cadastroAdotante', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;

  const dados = new AdotanteDB(nome, email, senha, endereco, cpf);

  // Inserir o novo adotante no banco de dados
  dados.inserirAdotante(dados, (err) => {  
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao cadastrar o adotante.');
    } else {
      res.send('Cadastro realizado com sucesso!');
    }
  });
});

module.exports = router;
