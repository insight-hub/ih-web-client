import React from 'react';
import renderer from 'react-test-renderer';

import { Row } from './';

describe('Row', () => {
  it('should render correct', () => {
    const component = renderer.create(<Row />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
