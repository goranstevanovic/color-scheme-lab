import { render, screen } from '@testing-library/react';

import ColorHarmonyOptions from './ColorHarmonyOptions';

describe('ColorHarmonyOptions', () => {
  it('displays the ColorHarmonyOptions test', () => {
    render(<ColorHarmonyOptions />);

    expect(screen.getByText(/ColorHarmonyOptions/)).toBeInTheDocument();
  });
});
