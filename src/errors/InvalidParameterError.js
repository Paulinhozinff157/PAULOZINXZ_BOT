/**
 * Classe de erro customizada para
 * parâmetros inválidos.
 *
<<<<<<< HEAD
 * @author PAULOZINXZ_BOT
=======
 * @author PAULOZINXZ18
>>>>>>> 7b68792 (Atualização do bot)
 */
export default class InvalidParameterError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidParameterError";
  }
}
