/**
 * Calcula o preço final após aplicar um desconto percentual.
 *
 * @param {number} preco - Preço original do produto.
 * @param {number} descontoPercentual - Desconto entre 0 e 100.
 * @returns {number} Preço final com o desconto aplicado.
 * @throws {Error} "Desconto inválido" se o desconto for < 0 ou > 100.
 */
function calcularDesconto(preco, descontoPercentual) {
  if (descontoPercentual < 0 || descontoPercentual > 100) {
    throw new Error("Desconto inválido");
  }

  return preco - preco * (descontoPercentual / 100);
}

module.exports = { calcularDesconto };
