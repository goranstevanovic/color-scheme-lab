import { render, screen } from '@testing-library/react';

import ColorHarmonyOptions from './ColorHarmonyOptions';

describe('ColorHarmonyOptions', () => {
  it('displays the base color input', () => {
    render(<ColorHarmonyOptions />);

    expect(screen.getByLabelText(/Base color/)).toBeInTheDocument();
  });

  it('displays the color harmony rule select menu', () => {
    render(<ColorHarmonyOptions />);

    expect(screen.getByLabelText(/Color harmony rule/)).toBeInTheDocument();
  });

  it('displays the color harmony rule description', () => {
    render(<ColorHarmonyOptions />);

    expect(screen.getByText(/This color scheme/)).toBeInTheDocument();
  });

  it('displays the create color scheme button', () => {
    render(<ColorHarmonyOptions />);

    expect(screen.getByText(/Create Color Scheme/)).toBeInTheDocument();
  });
});
