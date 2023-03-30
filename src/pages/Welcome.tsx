import React from 'react';

import { Color, Column, Row, Text, useInjection } from 'src/components';
import { textType } from 'src/components/text';
import { TYPES } from 'src/iocTypes';
import { CreateAcoountController } from 'src/models/createUser.controller';
import { CreateAccountForm } from 'src/components/CreateAccountForm';
import { AppConfigService } from 'src/models/config';

export const Welcome = () => {
  const formController = useInjection<CreateAcoountController>(TYPES.CreateAccountController);
  const configService = useInjection<AppConfigService>(TYPES.ConfigService);
  const captchaKey = configService.getApplicationConfig().recaptchaPubKey;
  return (
    <>
      <Row padding={{ top: 5 }}>
        <Column cols={{ xs: 12, md: 6 }}>
          <Text type={textType.H1} weigth="bold" size="2.5rem" color="white">
            Discover and Connect with Like-Minded People.
          </Text>
          <Text padding={{ top: 2 }} lineHeight={1.3} size={'1.3rem'} color={Color.TextTransparent}>
            Community dedicated to sharing knowledge, building connections, and&#160;growing
            together. Join now to connect with experts and explore new ideas.
          </Text>
        </Column>
        <Column offset={{ xs: 0, md: 1 }} cols={{ xs: 12, md: 5 }}>
          <CreateAccountForm captchaKey={captchaKey} form={formController} />
        </Column>
      </Row>
    </>
  );
};
