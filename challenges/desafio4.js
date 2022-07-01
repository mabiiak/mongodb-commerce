db.produtos
  .find({ vendidos: { $gt: 50, $lte: 100 } }, { _id: 0, nome: 1, vendidos: 1 });
