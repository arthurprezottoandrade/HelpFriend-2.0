const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { db, inserirCachorro, buscarCachorros } = require('./banco'); // Importar a função



const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  const upload = multer({ storage: storage });

// Rotas de páginas
router.get('/inicio', (req, res) => {
    buscarCachorros((err, cachorros) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar os cachorros.');
      } else {
        res.render('inicio', { cachorros }); // Renderiza a página de início com os dados dos cachorros
      }
    });
  });

router.get('/cadastroCachorro', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/cadastroCachorro.ejs'));
  });
router.get('/mostraCachorro', (req, res) => {
    res.sendFile(__dirname + '/views/mostraCachorro.ejs');
});
router.get('/atualizaCachorro', (req, res) => {
    res.sendFile(__dirname + '/views/atualizaCachorro.ejs');
});
router.get('/deletaCachorro', (req, res) => {
    res.sendFile(__dirname + '/views/deletaCachorro.ejs');
});

// Mandando dados
router.post('/cadastro', upload.single('foto'), (req, res) => {
    const dados = {
      nome: req.body.nome,
      apelido: req.body.apelido,
      anoNascimento: req.body.anoNascimento,
      porte: req.body.porte,
      raca: req.body.raca,
      situacao: req.body.situacao,
      imagem: req.file ? '/uploads/' + req.file.filename : null // Caminho para a imagem
    };

    inserirCachorro(dados, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar o cachorro.');
      } else {
        res.send('Cadastro realizado com sucesso!');
      }
    });
  });
module.exports = router;