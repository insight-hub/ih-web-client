import React, { SyntheticEvent, useRef } from 'react';

import { Layout, Form, FormGroup, Input, Label, Button } from 'src/components';
import { Margin, Padding, FlexDirection, Display, BorderRadius } from 'src/components/core/layout';
import { Color, theme } from 'src/components/core';
import ReCAPTCHA from 'react-google-recaptcha';
import { LoginController } from 'src/models/login.controller';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { User } from 'src/models';

interface Props {
  form: LoginController;
  captchaKey: string;
}

export const LoginForm: React.FC<Props> = observer(({ form, captchaKey }) => {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const navigate = useNavigate();

  const onCaptchaChange = () => {
    const token = captchaRef.current?.getValue();
    form.humanVerify(token as string);
  };
  const onUsernameChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    form.usernameField.setValue(target.value);
  };
  const onPasswordChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    form.passwordField.setValue(target.value);
  };

  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    form.onLogin().then((user: User) => navigate(`/${user.username}`));
  };

  const eyeIcon = form.isPasswordSecure ? (
    <FontAwesomeIcon
      style={styles.passwordIcon}
      icon={faEyeSlash}
      onClick={form.toggleSecurePassword}
    />
  ) : (
    <FontAwesomeIcon style={styles.passwordIcon} icon={faEye} onClick={form.toggleSecurePassword} />
  );

  return (
    <Form {...styles.form}>
      <FormGroup>
        <Label id="username" label="Username" required />
        <Input
          value={form.usernameField.value}
          onChange={onUsernameChange}
          error={form.usernameField.error}
          name="username"
        />
      </FormGroup>
      <FormGroup>
        <Label id="password" label="Password" required />
        <Input
          value={form.passwordField.value}
          onChange={onPasswordChange}
          error={form.passwordField.error}
          name="password"
          renderIcon={eyeIcon}
          secure={form.isPasswordSecure}
        />
      </FormGroup>
      <ReCAPTCHA size="normal" sitekey={captchaKey} onChange={onCaptchaChange} ref={captchaRef} />
      <Layout padding={{ top: 0.5 }}>
        <Button
          onClick={handleLogin}
          size="lg"
          variant="primary"
          disabled={!form.isFullfilled}
          fullWidth
        >
          Continue
        </Button>
      </Layout>
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
  secondaryText: {
    size: theme.textSecondarySize,
    color: Color.Secondary,
    padding: { bottom: 1, top: 0.5 } as Padding,
  },
  passwordIcon: {
    cursor: 'pointer',
  },
};
