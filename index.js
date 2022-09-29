var express = require('Express');   
//Importa O express
var app = express();                
//Atribui app ao chamado da funçao express

var things = require('./things.js');
//Importa e atribui o arquivo de rotas /things.js

app.use('/things', things);
//app.use atribui a as rotas dentro de things.js como subrotas de /things

app.listen(3000);   
// Liga as conecoes ao host(dominio{nao especificado aqui}), a porta(3000), backlog(limite de conecoes padrao 511) e callback(funcao async que retorna assim que o servidor inicia).s


/*----------------------------------------------------------------
//  Verbos do HTTP:

GET = METODO que faz uma REQUISIÇAO da REPRESENTAÇAO de um dado recurso. Chamados do tipo GET DEVEM APENAS RETORNAR DADOS.
POST = METODO que envia uma SOLICITAÇAO ao SERVIDOR para que o mesmo aceite os DADOS que estão no pedido como um NOVO OBJETO ou ENTIDADE no recurso identificado pelo URI.
PUT = METODO que envia uma SOLICITAÇAO ao SERVIDOR para que possa ALTERAR um OBJETO ou ENTIDADE EXISTENTE.
DELETE = METODO que envia uma SOLICITAÇAO ao SERVIDOR para que possa DELETAR um RECURSO ESPECIFICO.
*/

/*----------------------------------------------------------------
//  URL BUILDING: Rota Dinamica exemplos

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.listen(3000);

//  Rota dinamica composta de 2 parametros

app.get('/things/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
app.listen(3000);

//  Rota dinamica com Regex limitada a numeros(0-9) de ate 5 digitos

app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

app.listen(3000);

//  Rota dinamica de exception exemplo

app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});
app.listen(3000);

*/
