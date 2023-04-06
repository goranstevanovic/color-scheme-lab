import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ColorSwatch from '.';

describe('ColorSwatch', () => {
  it('displays correct text', () => {
    render(
      <ColorSwatch
        colorCode="#2196f3"
        colorName="Dodger Blue"
        textColor="#000000"
      />
    );

    const colorName = screen.getByText('Dodger Blue');
    const colorCode = screen.getByText('#2196f3');

    expect(colorName).toBeInTheDocument();
    expect(colorCode).toBeInTheDocument();
  });

  it('displays correct background color', () => {
    render(
      <ColorSwatch
        colorCode="#2196f3"
        colorName="Dodger Blue"
        textColor="#000000"
      />
    );

    const element = screen.getByText('Dodger Blue');

    expect(element).toHaveStyle('background-color: rgb(33, 150, 243');
  });

  it('displays text in correct color', () => {
    render(
      <ColorSwatch
        colorCode="#2196f3"
        colorName="Dodger Blue"
        textColor="#000000"
      />
    );

    const element = screen.getByText('Dodger Blue');

    expect(element).toHaveStyle('color: rgb(0, 0, 0');
  });
});
