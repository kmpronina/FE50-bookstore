import React, { useState } from 'react';
import { useFormik } from 'formik';
import useAuth from '#hooks/useAuth';
import useThemeColors from '#hooks/useThemeColors';
import { setIsSignUpActive } from '#store/reducers/userReducer';
import { useAppDispatch } from '#store/store';
import { SingUpDataType } from '#models/authorizationTypes';
import Button from '#ui/button';
import InputErrorMessage from '#ui/inputErrorMessage';
import { signUpValidationSchema } from './signUpValidationSchema';
import { Input, InputArea, Label, SignFormStyled } from './SignUpFormStyled';

const SignUpForm: React.FC = () => {
  const { inputBorderColor, inputTextColor, textColorBlack } = useThemeColors();

  const { signUp } = useAuth();

  const dispatch = useAppDispatch();

  const [singUpError, setSingUpError] = useState<string | undefined>(undefined);

  const intialFormikValues: SingUpDataType = {
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  };

  const handleSubmit = (formikValues: SingUpDataType) => {
    const { isSuccess, error } = signUp({
      password: formikValues.password,
      email: formikValues.email,
      name: formikValues.name,
      confirmedPassword: formikValues.confirmedPassword,
    });

    if (error) {
      setSingUpError(error);
      return;
    }

    if (isSuccess) {
      formik.resetForm();
      dispatch(setIsSignUpActive('1'));
    }
  };

  const formik = useFormik({
    validateOnMount: true,
    initialValues: intialFormikValues,
    validationSchema: signUpValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <SignFormStyled>
        <InputArea>
          <Label htmlFor="name" $color={textColorBlack}>
            name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            $color={inputTextColor}
            $borderColor={inputBorderColor}
          />
          {formik.touched.name && formik.errors.name ? (
            <InputErrorMessage>{formik.errors.name}</InputErrorMessage>
          ) : null}
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
          <Label htmlFor="confirmedPassword" $color={textColorBlack}>
            confirm password
          </Label>
          <Input
            type="password"
            id="confirmedPassword"
            name="confirmedPassword"
            value={formik.values.confirmedPassword}
            onChange={formik.handleChange}
            $color={inputTextColor}
            $borderColor={inputBorderColor}
          />
          {formik.touched.confirmedPassword &&
          formik.errors.confirmedPassword ? (
            <InputErrorMessage>
              {formik.errors.confirmedPassword}
            </InputErrorMessage>
          ) : null}
        </InputArea>
        {singUpError && <InputErrorMessage>{singUpError}</InputErrorMessage>}
        <Button
          type="submit"
          onClick={() => formik.submitForm()}
          disabled={!formik.isValid}
        >
          sign up
        </Button>
      </SignFormStyled>
    </form>
  );
};

export default SignUpForm;
