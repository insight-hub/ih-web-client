import React from 'react';
import { useInjection } from 'src/components';

import { Layout } from 'src/components/core';
import { CreateAccountForm } from 'src/components/CreateAccountForm';
import { TYPES } from 'src/iocTypes';
import { CreateAcoountController } from 'src/models/account.controller';

export const Join = () => {
  const formController = useInjection<CreateAcoountController>(TYPES.CreateAccountController);
  return (
    <Layout maxWidth="33vw" margin={{ y: 5, x: 'auto' }}>
      <CreateAccountForm form={formController} />
    </Layout>
  );
};
