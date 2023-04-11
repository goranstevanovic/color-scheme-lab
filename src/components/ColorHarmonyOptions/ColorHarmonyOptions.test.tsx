import { render, screen } from '@testing-library/react';

import ColorHarmonyOptions from '.';

describe('ColorHarmonyOptions', () => {
  it('displays the base color input', () => {
    render(
      <ColorHarmonyOptions
        baseColor="#2196F3"
        colorHarmonyRule="monochrome"
        setBaseColor={() => {}}
        setColorHarmonyRule={() => {}}
        setColorSchemeData={() => {}}
      />
    );

    expect(screen.getByLabelText(/Base color/)).toBeInTheDocument();
  });

  it('displays the color harmony rule select menu', () => {
    render(
      <ColorHarmonyOptions
        baseColor="#2196F3"
        colorHarmonyRule="monochrome"
        setBaseColor={() => {}}
        setColorHarmonyRule={() => {}}
        setColorSchemeData={() => {}}
      />
    );

    expect(screen.getByLabelText(/Color harmony rule/)).toBeInTheDocument();
  });

  it('displays the color harmony rule description', () => {
    render(
      <ColorHarmonyOptions
        baseColor="#2196F3"
        colorHarmonyRule="monochrome"
        setBaseColor={() => {}}
        setColorHarmonyRule={() => {}}
        setColorSchemeData={() => {}}
      />
    );

    expect(screen.getByText(/This color scheme/)).toBeInTheDocument();
  });

  it('displays the create color scheme button', () => {
    render(
      <ColorHarmonyOptions
        baseColor="#2196F3"
        colorHarmonyRule="monochrome"
        setBaseColor={() => {}}
        setColorHarmonyRule={() => {}}
        setColorSchemeData={() => {}}
      />
    );

    expect(screen.getByText(/Create Color Scheme/)).toBeInTheDocument();
  });
});
