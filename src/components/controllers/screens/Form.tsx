import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ScrollView } from 'react-native';
import { Container } from '~/components/views/styledContainers';
import { Header } from '~/components/views/styledTexts';
import PrimaryTextInput from '../PrimaryTextInput';
import PrimaryButton from '../PrimaryButton';
import { useTheme } from 'styled-components';
import { ITheme } from '~/utils/theme';
import Summary from '../Summary';

export interface IClientDetails {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
}

const validationSchema = yup.object({
  fullName: yup.string().required('required field'),
  email: yup.string().email().required('required field'),
  address: yup.string().required('required field'),
  city: yup.string().required('required field'),
  zipCode: yup
    .string()
    .matches(/\d{2}-\d{3}/, 'Zip code must be in xx-xxx format')
    .required('required field'),
  state: yup.string().required('required field'),
});

export default function Form({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const { colors } = useTheme() as ITheme;

  const clientDetails: IClientDetails = {
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    state: '',
  };

  return (
    <ScrollView>
      <Container flex={1}>
        <Container marginTop="50px">
          <Header color={colors.tertiary}>PERSONAL DETAILS</Header>
        </Container>
        <Formik
          initialValues={clientDetails}
          validationSchema={validationSchema}
          onSubmit={() => setShowSummary(true)}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const { fullName, email, address, city, zipCode, state } = values;

            return (
              <Container width="80%" flex={1}>
                <PrimaryTextInput
                  label="Full Name"
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={fullName}
                  Imagine={'account'}
                  error={touched.fullName && errors.fullName}
                />
                <PrimaryTextInput
                  label="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={email}
                  Imagine={'email'}
                  error={touched.email && errors.email}
                />
                <PrimaryTextInput
                  label="Address"
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={address}
                  Imagine={'home'}
                  error={touched.address && errors.address}
                />
                <PrimaryTextInput
                  label="City"
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  value={city}
                  Imagine={'city'}
                  error={touched.city && errors.city}
                />
                <PrimaryTextInput
                  label="Zip code"
                  onChangeText={handleChange('zipCode')}
                  onBlur={handleBlur('zipCode')}
                  value={zipCode}
                  Imagine={'post'}
                  error={touched.zipCode && errors.zipCode}
                />
                <PrimaryTextInput
                  label="State"
                  onChangeText={handleChange('state')}
                  onBlur={handleBlur('state')}
                  value={state}
                  Imagine={'city'}
                  error={touched.state && errors.state}
                />
                <Container marginTop="50px">
                  <PrimaryButton
                    text="VIEW SUMMARY"
                    handler={() => handleSubmit()}
                  />
                </Container>
              </Container>
            );
          }}
        </Formik>
        {showSummary && (
          <Summary
            clientDetails={clientDetails}
            setShowSummary={setShowSummary}
            navigation={navigation}
          />
        )}
      </Container>
    </ScrollView>
  );
}
