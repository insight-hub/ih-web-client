import React, { SyntheticEvent, useRef } from 'react';
import {
  AlignItems,
  BorderRadius,
  Button,
  Color,
  Column,
  Display,
  FlexDirection,
  Input,
  JustifyContent,
  Label,
  Layout,
  Row,
  Text,
  Form,
} from 'src/components';
import { textType } from 'src/components/text';

export const Welcome = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleCreateAccount = (e: SyntheticEvent) => {
    e.preventDefault();
  };

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
      <Row padding={{ top: 5 }}>
        <Column cols={6}>
          <Text type={textType.H1} weigth="bold" size="2.5rem" color="white">
            Discover and Connect with Like-Minded People.
          </Text>
          <Layout padding={{ top: 0.5 }}>
            <Text size={'1.3rem'} color={Color.TextTransparent}>
              Community dedicated to sharing knowledge, building connections, and&#160;growing
              together. Join now to connect with experts and explore new ideas.
            </Text>
          </Layout>
        </Column>
        <Column offset={1} cols={5}>
          <Form
            display={Display.Flex}
            flexDirection={FlexDirection.Column}
            padding={{ x: 2, y: 2 }}
            borderRadius={BorderRadius.Medium}
            backgroundColor={Color.White}
            ref={formRef}
          >
            <Label id="username" label="Username" />
            <Input name="username" />
            <Label id="email" label="Email" />
            <Input name="email" />
            <Label id="password" label="Password" />
            <Input name="password" />
            <Text size="0.8rem" color="rgba(0, 0, 0, .7)">
              Make sure it's at least 15 characters OR at least 8 characters including a number and
              a lowercase letter.
            </Text>
            <Button onClick={handleCreateAccount} size="lg" variant="primary">
              Create account
            </Button>

            <Text size="0.8rem" color="rgba(0, 0, 0, .7)">
              By clicking «Create account», you agree to our <a href="/">Terms of Service</a> and{' '}
              <a href="/">Privacy Statement</a>. We’ll occasionally send you account related emails.
            </Text>
          </Form>
        </Column>
      </Row>
    </>
  );
};
