/**
 * Classe de erro customizada para
 * parâmetros inválidos.
 *
 * @author PAULOZINXZ_BOT
 */
export default class InvalidParameterError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidParameterError";
  }
}
