import App from './App';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    eng: "to run", ger: "laufen",
  }),
})
)

afterEach(cleanup)

describe('Homepage <Controls />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
  it('test Title is shown works', () => {
     const {getByText} = render(<App />);
     getByText(/Language LightHouse/);
  })
})

describe('App', () => {
  it('test Title is shown works', async () => {
     await act(async () => render(<App />));
     expect(screen.getByText("laufen")).toBeInDocument()
  })
})
