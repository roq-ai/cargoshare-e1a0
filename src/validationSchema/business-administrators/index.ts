import * as yup from 'yup';

export const businessAdministratorValidationSchema = yup.object().shape({
  admin_name: yup.string().required(),
  admin_contact: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
