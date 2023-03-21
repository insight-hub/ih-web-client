import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent } from 'react';

import { theme, Form, FormGroup, Label, Input, Hint, Layout, Text, Button } from 'src/components';
import { Display, FlexDirection, BorderRadius, Color } from 'src/components/core';
import { CreateAcoountController } from 'src/models/account.controller';

interface Props {
  form: CreateAcoountController;
}

export const CreateAccountForm: React.FC<Props> = observer(({ form }) => {
  const onUsernameChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    form.usernameField.setValue(target.value);
  };

  const onEmailChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    form.emailField.setValue(target.value);
  };

  const onPasswordChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    form.passwordField.setValue(target.value);
  };

  const handleCreateAccount = (e: SyntheticEvent) => {
    e.preventDefault();
    form.onCreateAccount();
  };

  return (
    <Form
      display={Display.Flex}
      flexDirection={FlexDirection.Column}
      padding={{ x: 2, y: 2 }}
      margin={{ top: 1 }}
      borderRadius={BorderRadius.Medium}
      backgroundColor={Color.White}
    >
      <FormGroup>
        <Label id="username" label="Username" />
        <Input value={form.usernameField.value} onChange={onUsernameChange} name="username" />
      </FormGroup>
      <FormGroup>
        <Label id="email" label="Email" />
        <Input
          value={form.emailField.value}
          onChange={onEmailChange}
          name="email"
          isValid={form.emailField.isValid}
        />
      </FormGroup>
      <FormGroup>
        <Label id="password" label="Password" />
        <Input
          value={form.passwordField.value}
          onChange={onPasswordChange}
          name="password"
          secure
        />
        <Hint>
          Make sure it's at least 15 characters OR at least 8 characters including a number and a
          lowercase letter.
        </Hint>
      </FormGroup>
      <Layout padding={{ top: 0.5 }}>
        <Button onClick={handleCreateAccount} size="lg" variant="primary" fullWidth>
          Create account
        </Button>
      </Layout>
      <Text size={theme.textSecondarySize} color={Color.Secondary} margin={{ top: 1 }}>
        By clicking «Create account», you agree to our{' '}
        <a target="_blank" href="/">
          Terms of Service
        </a>{' '}
        and{' '}
        <a target="_blank" href="/">
          Privacy Statement
        </a>
        . We’ll occasionally send you account related emails.
      </Text>
    </Form>
  );
});
