import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from 'components/Input/';

describe('Testing for Input component', () => {
  test('Value in input depends on props value', () => {
    const { rerender } = render(<Input value="h" onChange={() => {}} />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveValue('h');

    rerender(<Input value="he" onChange={() => {}} />);
    expect(inputElement).toHaveValue('he');

    rerender(<Input value="hel" onChange={() => {}} />);
    expect(inputElement).toHaveValue('hel');

    rerender(<Input value="hell" onChange={() => {}} />);
    expect(inputElement).toHaveValue('hell');

    rerender(<Input value="hello" onChange={() => {}} />);
    expect(inputElement).toHaveValue('hello');
  });

  test('Input use native tag input with type "text"', () => {
    render(<Input value="" onChange={() => {}} />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement.tagName).toBe('INPUT');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test('If condition disabled=true add "disabled" attribute', () => {
    const { rerender } = render(<Input value="" onChange={() => {}} disabled />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeDisabled();

    rerender(<Input value="" onChange={() => {}} />);

    expect(inputElement).not.toBeDisabled();
  });
});
