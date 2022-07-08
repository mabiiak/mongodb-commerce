// funciona localmente
db.produtos
  .updateMany({}, { $rename: { descricao: "descricaoSite" } });