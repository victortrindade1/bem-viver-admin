import * as Yup from "yup";

export const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;

export const cepFormat = /^\d{5}-\d{3}$/;

export const nullableIntegerBetween0and100 = Yup.number()
  .integer("Somente números inteiros são aceitos.")
  .typeError("Somente números inteiros são aceitos.")
  .min(0, "Mínimo valor é 0.")
  .max(100, "Máximo valor é 100.")
  .nullable()
  .transform((value: string, originalValue: string) =>
    originalValue.trim() === "" ? null : value
  );

export const nullablePositiveInteger = Yup.number()
  .integer("Somente números inteiros são aceitos.")
  .typeError("Somente números inteiros são aceitos.")
  .min(0, "Mínimo valor é 0.")
  .nullable()
  .transform((value: string, originalValue: string) =>
    originalValue.trim() === "" ? null : value
  );
