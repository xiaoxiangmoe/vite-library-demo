import * as React from 'react';
import { mount } from '@cypress/react';
import { Box } from './box';
import { prefix } from '../utils/prefix';

it('render box', () => {
  mount(<Box>Foo</Box>);
  cy.get('.' + prefix + 'box').contains('Foo');
});

it('1 + 1 = 2', () => {
  expect(1 + 1).to.equal(2);
});
