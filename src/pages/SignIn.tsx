import React from 'react';
import { Column, JustifyContent, Row, useInjection } from 'src/components';

import { TYPES } from 'src/iocTypes';
import { AppConfigService } from 'src/models/config';
import { LoginController } from 'src/models/login.controller';
import { LoginForm } from 'src/components/LoginForm';

export const SignIn = () => {
  const form = useInjection<LoginController>(TYPES.LoginController);
  const configService = useInjection<AppConfigService>(TYPES.ConfigService);
  const captchaKey = configService.getApplicationConfig().recaptchaPubKey;
  return (
    <Row justifyContent={JustifyContent.Center}>
      <Column cols={{ xs: 12, md: 5 }}>
        <LoginForm form={form} captchaKey={captchaKey} />
      </Column>
    </Row>
  );
};
