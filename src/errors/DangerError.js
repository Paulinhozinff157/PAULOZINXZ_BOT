/**
 * Classe de erro customizada para
 * erros críticos.
 *
 * @author PAULOZINXZ_BOT
 */
export default class DangerError extends Error {
  constructor(message) {
    super(message);
    this.name = "DangerError";
  }
}
