import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getCargoById, updateCargoById } from 'apiSdk/cargos';
import { cargoValidationSchema } from 'validationSchema/cargos';
import { CargoInterface } from 'interfaces/cargo';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { getOrganizations } from 'apiSdk/organizations';
import { getUsers } from 'apiSdk/users';

function CargoEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<CargoInterface>(
    () => (id ? `/cargos/${id}` : null),
    () => getCargoById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: CargoInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateCargoById(id, values);
      mutate(updated);
      resetForm();
      router.push('/cargos');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<CargoInterface>({
    initialValues: data,
    validationSchema: cargoValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Cargos',
              link: '/cargos',
            },
            {
              label: 'Update Cargo',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Cargo
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.cargo_name}
            label={'Cargo Name'}
            props={{
              name: 'cargo_name',
              placeholder: 'Cargo Name',
              value: formik.values?.cargo_name,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Cargo Weight"
            formControlProps={{
              id: 'cargo_weight',
              isInvalid: !!formik.errors?.cargo_weight,
            }}
            name="cargo_weight"
            error={formik.errors?.cargo_weight}
            value={formik.values?.cargo_weight}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('cargo_weight', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Cargo Volume"
            formControlProps={{
              id: 'cargo_volume',
              isInvalid: !!formik.errors?.cargo_volume,
            }}
            name="cargo_volume"
            error={formik.errors?.cargo_volume}
            value={formik.values?.cargo_volume}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('cargo_volume', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.cargo_type}
            label={'Cargo Type'}
            props={{
              name: 'cargo_type',
              placeholder: 'Cargo Type',
              value: formik.values?.cargo_type,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<OrganizationInterface>
            formik={formik}
            name={'organization_id'}
            label={'Select Organization'}
            placeholder={'Select Organization'}
            fetcher={getOrganizations}
            labelField={'name'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'driver_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/cargos')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'cargo',
    operation: AccessOperationEnum.UPDATE,
  }),
)(CargoEditPage);
