import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from 'components/Button';
import { BUTTON_TEXT, Locators } from './constants';

describe('testing Button component', () => {
  test('text children throw through correctly', () => {
    render(<Button>{BUTTON_TEXT}</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent(BUTTON_TEXT);
  });

  test('span as children throw through correctly', () => {
    render(
      <Button>
        <span data-testid={Locators.BUTTON_CHILDREN}>{BUTTON_TEXT}</span>
      </Button>
    );

    const button = screen.getByRole('button');
    const innerElem = screen.getByTestId(Locators.BUTTON_CHILDREN);

    expect(button).toContainElement(innerElem);
  });
});
