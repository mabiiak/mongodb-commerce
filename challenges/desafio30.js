// funciona localmente
db.produtos
  .updateMany({ nome: "Big Mac" }, { $unset: { curtidas: "" } });
