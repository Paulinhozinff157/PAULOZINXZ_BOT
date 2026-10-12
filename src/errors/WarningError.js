/**
 * Classe de erro customizada para
 * avisos.
 *
<<<<<<< HEAD
 * @author PAULOZINXZ_BOT
=======
 * @author PAULOZINXZ18
>>>>>>> 7b68792 (Atualização do bot)
 */
export default class WarningError extends Error {
  constructor(message) {
    super(message);
    this.name = "WarningError";
  }
}
