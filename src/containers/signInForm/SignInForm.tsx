import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import useAuth from '#hooks/useAuth';
import useThemeColors from '#hooks/useThemeColors';
import { SignInDataType } from '#models/authorizationTypes';
import { RouterLocationsEnum } from '#router/Router';
import { signInValidationSchema } from './signInValidationSchema';
import Button from '#ui/button';
import {
  Input,
  InputArea,
  Label,
  SignFormStyled,
} from '#containers/signUpForm/SignUpFormStyled';
import InputErrorMessage from '#ui/inputErrorMessage';

const SignInForm: React.FC = () => {
  const { textColorBlack, inputTextColor, inputBorderColor } = useThemeColors();

  const [singInError, setSingInError] = useState<string | undefined>(undefined);

  const { signIn } = useAuth();
  const navigation = useNavigate();

  const intialFormikValues: SignInDataType = {
    email: '',
    password: '',
  };

  const handleSubmit = (formikValues: SignInDataType) => {
    const { isSuccess, error } = signIn({
      email: formikValues.email,
      password: formikValues.password,
    });
    if (error) {
      setSingInError(error);
      return;
    }
    if (isSuccess) {
      navigation(RouterLocationsEnum.main);
    }
  };

  const formik = useFormik({
    validateOnMount: true,
    initialValues: intialFormikValues,
    validationSchema: signInValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <SignFormStyled>
      <InputArea>
        <Label htmlFor="email" $color={textColorBlack}>
          email
        </Label>
        <Input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          $color={inputTextColor}
          $borderColor={inputBorderColor}
        />
        {formik.touched.email && formik.errors.email ? (
          <InputErrorMessage>{formik.errors.email}</InputErrorMessage>
        ) : null}
        <Label htmlFor="password" $color={textColorBlack}>
          password
        </Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          $color={inputTextColor}
          $borderColor={inputBorderColor}
        />
        {formik.touched.password && formik.errors.password ? (
          <InputErrorMessage>{formik.errors.password}</InputErrorMessage>
        ) : null}
      </InputArea>
      {singInError && <InputErrorMessage>{singInError}</InputErrorMessage>}
      <Button
        type="submit"
        onClick={() => formik.submitForm()}
        disabled={!formik.isValid}
      >
        sign in
      </Button>
    </SignFormStyled>
  );
};

export default SignInForm;
