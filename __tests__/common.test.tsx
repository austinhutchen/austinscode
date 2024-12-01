import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AudioVisualizer } from '../components/common/AudioVisualizer';
import { NavBar } from '../components/common/navbar';
import { Symbols } from '../components/common/symbols';
import WebCam from '../components/common/webCam'; // Assuming default export

describe('Common Components', () => {
  // Test AudioVisualizer rendering
  it('renders AudioVisualizer without crashing', () => {
    render(<AudioVisualizer stream={null} setStream={jest.fn()} />);
    expect(screen.getByTestId('audio-visualizer')).toBeInTheDocument();
  });

  // Test NavBar rendering
  it('renders NavBar and all navigation links', () => {
    render(<NavBar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  // Test Symbols rendering
  it('renders Symbols component', () => {
    render(<Symbols />);
    expect(screen.getByTestId('symbols-container')).toBeInTheDocument();
  });

  // Test WebCam rendering and state management
  it('renders WebCam and handles user permissions', () => {
    render(<WebCam />);
    expect(screen.getByTestId('webcam-component')).toBeInTheDocument();
  });
});
