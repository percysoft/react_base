export const required = (value: string) => {
  return value ? null : 'Este valor es requerido.';
};
