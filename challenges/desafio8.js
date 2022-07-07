db.produtos.deleteMany({ curtidas: { $lte: 50 } });
db.produtos.find({}, { _id: 0, nome: 1 });
