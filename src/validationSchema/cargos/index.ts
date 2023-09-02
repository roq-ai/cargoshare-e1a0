import * as yup from 'yup';

export const cargoValidationSchema = yup.object().shape({
  cargo_name: yup.string().required(),
  cargo_weight: yup.number().integer().required(),
  cargo_volume: yup.number().integer().required(),
  cargo_type: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  driver_id: yup.string().nullable().required(),
});
