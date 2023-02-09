import React from 'react';
import { AlignItems, Button, Color, Column, JustifyContent, Layout, Row, Text } from 'src/components';
import { textType } from 'src/components/text';

export const Welcome = () => {
  return (
    <>
      <Row height="3rem" alignItems={AlignItems.Center} justifyContent={JustifyContent.Between}>
        <Text color="white" weigth="bold" size="x-large">
          Logo
        </Text>
        <Layout>
          <Button>Sing in</Button>
          <Button variant="outline">Sing up</Button>
        </Layout>
      </Row>
      <Row>
        <Column cols={8}>
          <Row padding={{ top: 5 }}>
            <Text type={textType.H1} weigth="bold" size="2.5rem" color="white">
              Discover and Connect with Like-Minded People.
            </Text>
          </Row>
          <Row padding={{ top: 0.5 }}>
            <Text size={'1.5rem'} color={Color.TextTransparent}>
              Community dedicated to sharing knowledge, building connections, and growing together.
              Join now to connect with experts and explore new ideas.
            </Text>
          </Row>
        </Column>
      </Row>
    </>
  );
};
