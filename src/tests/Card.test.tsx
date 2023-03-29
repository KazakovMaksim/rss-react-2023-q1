import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from 'components/Card/';
import { CARD_DESCRIPTION, CARD_TITLE, CARD_PRICE } from './constants';

describe('Testing Card Component', () => {
  test('Props title, description throwing and displaying', () => {
    render(
      <Card title={CARD_TITLE} description={CARD_DESCRIPTION} imgSrc="-" price={CARD_PRICE} />
    );

    const title = screen.getByText(CARD_TITLE);
    const description = screen.getByText(CARD_DESCRIPTION);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('Prop image throwing correctly into image', () => {
    const testImageSrc = 'https://www.google.com/favicon.ico';
    render(
      <Card
        imgSrc={testImageSrc}
        title={CARD_TITLE}
        description={CARD_DESCRIPTION}
        price={CARD_PRICE}
      />
    );

    const imageElement = screen.getByRole('img');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', testImageSrc);
  });

  test('For image is using html-tag img', () => {
    const testImageSrc = 'https://www.google.com/favicon.ico';
    const { baseElement } = render(
      <Card
        imgSrc={testImageSrc}
        title={CARD_TITLE}
        description={CARD_DESCRIPTION}
        price={CARD_PRICE}
      />
    );

    const imageElement = baseElement.querySelector('img');

    expect(imageElement).toHaveAttribute('src', testImageSrc);
  });
});
