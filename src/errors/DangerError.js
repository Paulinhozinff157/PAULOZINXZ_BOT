/**
 * Classe de erro customizada para
 * erros críticos.
 *
<<<<<<< HEAD
 * @author PAULOZINXZ_BOT
=======
 * @author PAULOZINXZ18
>>>>>>> 7b68792 (Atualização do bot)
 */
export default class DangerError extends Error {
  constructor(message) {
    super(message);
    this.name = "DangerError";
  }
}
