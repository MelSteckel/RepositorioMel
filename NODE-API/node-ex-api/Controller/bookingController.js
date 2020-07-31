
exports.message = function (req, res) {
  res.send('Reservas: Servidor em execução na porta 3000')
};

exports.post = function (req, res) {    
    res.status(200).send({
    message: 'Rota de criação de uma reserva.',
    criacaoReserva: {
     tipo: 'SAIBRO',
     inicioEm: '2018-05-30T18:00:00Z',
     fimEm: '2018-05-30T19:00:00Z',
     id: Math.random().toString(26).slice(2),
     status:"ativa",
     criadoEm: "2018-05-29T16:00:00Z"}
    });           
  };

 
