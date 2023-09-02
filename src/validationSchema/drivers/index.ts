import * as yup from 'yup';

export const driverValidationSchema = yup.object().shape({
  license_number: yup.string().required(),
  vehicle_type: yup.string().required(),
  vehicle_capacity: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
