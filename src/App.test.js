import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('clicks the dummy button', async () => {
  render(<App />);
  const buttonElement = screen.getByText(/Hey, a button!/i);
  fireEvent(buttonElement, new MouseEvent('click', {
    bubbles: true, 
    cancelable: true
  }));
  const outputText = await screen.findByText(/Button clicked./i);
  expect(outputText).toBeInTheDocument();
});



test('clicks the dummy button (wait for)', async () => {
  render(<App />);
  const buttonElement = screen.getByText(/Hey, a button!/i);

  fireEvent(buttonElement, new MouseEvent('click', {
    bubbles: true, 
    cancelable: true
  }));


  await waitFor(async () => {
    const outputText = await screen.findByText(/Button clicked./i);
    expect(outputText).toBeInTheDocument();
  })

});
test('dummy test is toggled', async () => {
  render(<App />);
  const buttonElement = screen.getByText(/Hey, a button!/i);

  fireEvent(buttonElement, new MouseEvent('click', {
    bubbles: true, 
    cancelable: true
  }));
  fireEvent(buttonElement, new MouseEvent('click', {
    bubbles: true, 
    cancelable: true
  }));
  const outputText = screen.queryByText(/Button clicked./i);
  expect(outputText).toBeNull();
});