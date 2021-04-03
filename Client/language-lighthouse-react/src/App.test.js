import App from './App';
import { fireEvent, cleanup, screen } from '@testing-library/react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Controls from "./components/Controls"

let container = null

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

describe('Homepage <Controls />', () => {
  it('renders without crashing', () => {
    render(<Controls id="123" />, container)
  });
  // it('test Title is shown works', () => {
  //    render(<Controls />, container)
  //    expect(container.querySelector("h1").textContent).toBe("Language LightHouse")
  // })
})

describe('App', () => {
  it('renders data', async () => {

//     const fakeWord = {
//       id: 0,
//       eng: 'to run',
//       ger: 'laufen'
//     };
//     jest.spyOn(global, "fetch").mockImplementation(() =>
//       Promise.resolve({
//         status: 200,
//         json: () => Promise.resolve(fakeWord)
//       }))
//
//     // jest.spyOn(global, 'fetch').mockResolvedValue({ json: jest.fn().mockResolvedValue({ fakeWord }) });
//
// // use asynchronous version of act to apply resolved Promise
  await act(async () => {
    render(<Controls />, container)
    const test = await screen.queryByTestId('eng')
    console.log(test)
  })

  expect(await screen.queryByTestId('eng').textContent).toBe("english:")
  expect(await screen.queryByTestId('ger').textContent).toBe("german:")
  // global.fetch.mockRestore();
  })
})
