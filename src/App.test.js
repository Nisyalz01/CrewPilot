// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CrewPilot title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CrewPilot/i);
    expect(titleElement).toBeInTheDocument();
});
