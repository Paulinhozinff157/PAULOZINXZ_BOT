/**
 * Classe de erro customizada para
 * avisos.
 *
 * @author PAULOZINXZ_BOT
 */
export default class WarningError extends Error {
  constructor(message) {
    super(message);
    this.name = "WarningError";
  }
}
