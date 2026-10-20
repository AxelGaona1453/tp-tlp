/** Calcula el precio luego de aplicar un porcentaje de descuento. */
export function calcularPrecioFinal(precio: number, descuento: number): number {
  if (descuento < 0 || descuento > 100) {
    throw new RangeError('El descuento debe estar entre 0 y 100.');
  }
  if (precio < 0) {
    throw new RangeError('El precio debe ser un valor positivo.');
  }
  if (descuento < 0){
    throw new RangeError('El descuento no puede ser negativo.');
  }
  return precio - (precio * descuento) / 100;
}
