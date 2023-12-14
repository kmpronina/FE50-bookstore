import React from 'react';
import { useFormik } from 'formik';
import {
  EmailArea,
  EmailInput,
  SubscribeSubtitle,
  SubscribeTitle,
  SubscribeToNewsletterStyled,
} from './SubscribeToNewsletterStyled';
import Button from '#ui/button';
import { emailValidationSchema } from './emailValidationSchema';
import { useAppDispatch, useAppSelector } from '#store/store';
import { setSubscribeEmailToStore } from '#store/reducers/userReducer';

const SubscribeToNewsletter: React.FC = () => {
  const { subscribeEmail } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  type SubscribeFormikType = {
    email: string;
  };

  const initialFormikValue: SubscribeFormikType = {
    email: '',
  };

  const handleSubmit = (formikValues: SubscribeFormikType) => {
    dispatch(setSubscribeEmailToStore(formikValues.email));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: initialFormikValue,
    validationSchema: emailValidationSchema,
    onSubmit: handleSubmit,
  });

  const handleSubscribeClick = () => {
    formik.submitForm();
  };

  return (
    <SubscribeToNewsletterStyled>
      <SubscribeTitle>
        {subscribeEmail
          ? `you already subscribed by email ${subscribeEmail}`
          : 'subscribe to newsletter'}
      </SubscribeTitle>
      <SubscribeSubtitle>
        {subscribeEmail
          ? 'To subscribe to the newletter by another email enter the detail below.'
          : 'Be the first to know about new IT books, upcoming releases, exclusive offers and more.'}
      </SubscribeSubtitle>
      <EmailArea>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <EmailInput
            name="email"
            type={'email'}
            value={formik.values.email}
            placeholder={'Your email'}
            onChange={formik.handleChange}
          />
          <Button type="submit" onClick={handleSubscribeClick}>
            subscribe
          </Button>
        </form>
      </EmailArea>
    </SubscribeToNewsletterStyled>
  );
};

export default SubscribeToNewsletter;
