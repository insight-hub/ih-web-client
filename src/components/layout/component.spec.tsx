import React from 'react';
import renderer from 'react-test-renderer';

import {
  AlignContent,
  AlignItems,
  AlignSelf,
  Background,
  Cursor,
  Display,
  FlexWrap,
  JustifyContent,
  Layout,
  LayoutProps,
  Overflow,
  Position,
  ZIndex,
} from './';

function getOptionalProps(): LayoutProps {
  return {
    position: Position.Relative,
    display: Display.Flex,
    justifyContent: JustifyContent.Around,
    flexWrap: FlexWrap.Wrap,
    alignContent: AlignContent.Around,
    alignSelf: AlignSelf.Center,
    alingItems: AlignItems.Center,
    cursor: Cursor.Pointer,
    overflow: Overflow.Scroll,
    zIndex: ZIndex.Above,
    background: Background.Base,
  };
}

describe('Layout', () => {
  it('should render correct', () => {
    const component = renderer.create(<Layout />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render correct with props', () => {
    const component = renderer.create(<Layout {...getOptionalProps()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render witn custom css', () => {
    const instance = renderer.create(<Layout className="test-class" />).root;
    const element = instance.findByType('div');
    expect(element.props.className).toContain('test-class');
  });
});
