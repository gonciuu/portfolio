import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByText(
      'Instantly deploy your Next.js site to a shareable URL with Vercel.',
    );

    expect(heading).toBeInTheDocument();
  });
});
