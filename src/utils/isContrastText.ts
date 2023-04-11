export function isContrastText(hexColor: string) {
  // Converte a cor hexadecimal em um valor decimal
  let decimalColor = parseInt(hexColor.substring(1), 16);

  // Extrai os valores de cada canal de cor
  let red = (decimalColor >> 16) & 255;
  let green = (decimalColor >> 8) & 255;
  let blue = decimalColor & 255;

  // Calcula a luminosidade relativa da cor
  let luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

  // Verifica se o texto deve ser branco ou preto
  if (luminance > 0.5) {
    return false; // branco
  } else {
    return true; // preto
  }
}
