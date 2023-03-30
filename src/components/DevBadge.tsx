import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Text, Layout, Color, Button, Display, AlignItems, JustifyContent } from 'src/components';

export const DevBadge = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return isOpen ? (
    <Layout
      display={Display.Flex}
      justifyContent={JustifyContent.Center}
      alignItems={AlignItems.Center}
      background={Color.Danger}
    >
      <Text size="small" color={Color.White}>
        Please note that this is a development stand. If you face an issue, mail to{' '}
        <a style={{ color: Color.White, fontWeight: 'bold' }} href="mailto:support@insighthub.org">
          support@insighthub.org.
        </a>
      </Text>
      <Button size="sm" onClick={() => setIsOpen(false)}>
        <FontAwesomeIcon icon={faXmark} />
      </Button>
    </Layout>
  ) : null;
};
