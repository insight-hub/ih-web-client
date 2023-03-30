import React from 'react';
import { Column, JustifyContent, Row, useInjection } from 'src/components';
import { OneTimePasswordFrom } from 'src/components/OneTilmePasswordForm';
import { TYPES } from 'src/iocTypes';
import { OTPController } from 'src/models/otp.controller';

export const OneTimePassword = () => {
  const controller = useInjection<OTPController>(TYPES.OTPController);
  return (
    <Row justifyContent={JustifyContent.Center}>
      <Column cols={{ xs: 12, md: 4 }}>
        <OneTimePasswordFrom controller={controller} />
      </Column>
    </Row>
  );
};
