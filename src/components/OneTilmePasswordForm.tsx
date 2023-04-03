import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { OTPController } from 'src/models/otp.controller';
import { Button } from './button';
import { BorderRadius, Color, Display, FlexDirection, Margin, Padding } from './core';
import { Form, Input } from './form';
import { Text, textType } from './text';

interface Props {
  controller: OTPController;
}

export const OneTimePasswordFrom: React.FC<Props> = observer(({ controller }) => {
  const navigate = useNavigate();
  const onOTPSumbit = (e: SyntheticEvent) => {
    e.preventDefault();
    controller.verifyOTP().then((user) => {
      if (user) navigate('/');
    });
  };

  const onOTPChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    controller.oneTimePasswordField.setValue(target.value);
  };

  return (
    <Form {...styles.form}>
      <Text weigth="bold">One time password</Text>
      <Text size="small" padding={{ top: 1, bottom: 1 }}>
        To complete the verification process, a one-time password has been sent to{' '}
        <Text type={textType.Span} weigth="bold">
          {controller.userEmail}
        </Text>
      </Text>
      <Input value={controller.oneTimePasswordField.value} onChange={onOTPChange} />
      <Text size="small" padding={{ top: 1, bottom: 1 }}>
        Please ensure to check your spam folder if&#160;you do not see the email in&#160;your inbox.
      </Text>
      <Button onClick={onOTPSumbit} disabled={controller.submitDisabled} variant="primary">
        Confirm
      </Button>
    </Form>
  );
});

const styles = {
  form: {
    display: Display.Flex,
    flexDirection: FlexDirection.Column,
    padding: { x: 2, y: 2 } as Padding, // TODO ???
    margin: { top: 1 } as Margin,
    borderRadius: BorderRadius.Medium,
    backgroundColor: Color.White,
  },
};
