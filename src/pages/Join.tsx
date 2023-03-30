import React from 'react';
import { Column, Row, useInjection } from 'src/components';

import { CreateAccountForm } from 'src/components/CreateAccountForm';
import { TYPES } from 'src/iocTypes';
import { CreateAcoountController } from 'src/models/account.controller';
import { AppConfigService } from 'src/models/config';

export const Join = () => {
  const formController = useInjection<CreateAcoountController>(TYPES.CreateAccountController);
  const configService = useInjection<AppConfigService>(TYPES.ConfigService);
  const captchaKey = configService.getApplicationConfig().recaptchaPubKey;
  return (
    <Row>
      <Column offset={{ xs: 0, sm: 2, md: 4 }} cols={{ xs: 12, sm: 8, md: 4 }}>
        <CreateAccountForm form={formController} captchaKey={captchaKey} />
      </Column>
    </Row>
  );
};
