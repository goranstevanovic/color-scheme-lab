import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ColorScheme from '.';

import { colorSchemeSample } from '../../data/colorScheme';

describe('ColorScheme', () => {
  it('displays correct text', () => {
    render(
      <ColorScheme buttonType="save" colorSchemeData={colorSchemeSample} />
    );

    const colorCode = screen.getByText('#2196F3');

    expect(colorCode).toBeInTheDocument();
  });

  it('displays save button', () => {
    render(
      <ColorScheme buttonType="save" colorSchemeData={colorSchemeSample} />
    );

    const button = screen.getByText(/save/i);

    expect(button).toBeInTheDocument();
  });

  it('displays delete button', () => {
    render(
      <ColorScheme buttonType="delete" colorSchemeData={colorSchemeSample} />
    );

    const button = screen.getByText(/delete/i);

    expect(button).toBeInTheDocument();
  });

  it('displays color scheme title', () => {
    render(
      <ColorScheme
        buttonType="save"
        colorSchemeData={colorSchemeSample}
        colorSchemeTitle="#2196F3 Dodger Blue Monochromatic"
      />
    );

    const colorSchemeTitleElement = screen.getByText(
      /#2196F3 Dodger Blue Monochromatic/i
    );

    expect(colorSchemeTitleElement).toBeInTheDocument();
  });
});
