import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_date: yup.date().required(),
  expected_delivery_date: yup.date().required(),
  status: yup.string().required(),
  cargo_id: yup.string().nullable().required(),
  shipping_agent_id: yup.string().nullable().required(),
});
