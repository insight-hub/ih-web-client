import React from 'react';
import { Column, JustifyContent, Row, useInjection } from 'src/components';

import { CreateAccountForm } from 'src/components/CreateAccountForm';
import { TYPES } from 'src/iocTypes';
import { CreateAcoountController } from 'src/models/createUser.controller';
import { AppConfigService } from 'src/models/config';

export const Join = () => {
  const formController = useInjection<CreateAcoountController>(TYPES.CreateAccountController);
  const configService = useInjection<AppConfigService>(TYPES.ConfigService);
  const captchaKey = configService.getApplicationConfig().recaptchaPubKey;
  return (
    <Row justifyContent={JustifyContent.Center}>
      <Column cols={{ xs: 12, md: 5 }}>
        <CreateAccountForm form={formController} captchaKey={captchaKey} />
      </Column>
    </Row>
  );
};
