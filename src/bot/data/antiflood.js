const filteredUsers = new Map(); // chave = número, valor = timestamp

function isFiltered(sender) {
  const tempo = 1000; // 1 segundo
  if (!filteredUsers.has(sender)) return false;

  const ultimoUso = filteredUsers.get(sender);
  return (Date.now() - ultimoUso) < tempo;
}

function addFilter(sender) {
  filteredUsers.set(sender, Date.now());
}

module.exports = { isFiltered, addFilter };