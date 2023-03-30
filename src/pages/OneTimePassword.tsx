import React from 'react';
import { Column, Row, useInjection } from 'src/components';
import { OneTimePasswordFrom } from 'src/components/OneTilmePasswordForm';
import { TYPES } from 'src/iocTypes';
import { OTPController } from 'src/models/otp.controller';

export const OneTimePassword = () => {
  const controller = useInjection<OTPController>(TYPES.OTPController);
  return (
    <Row>
      <Column offset={{ xs: 0, sm: 2, md: 4 }} cols={{ xs: 12, sm: 8, md: 4 }}>
        <OneTimePasswordFrom controller={controller} />
      </Column>
    </Row>
  );
};
