import App from './App';
import { fireEvent, cleanup, waitFor, screen, render } from '@testing-library/react';
import Home from "./components/Home.js"
import GermanGame from "./components/GermanGame.js"
import FrenchGame from "./components/FrenchGame.js"
import LatinGame from "./components/LatinGame.js"
import Footer from "./components/Footer.js"

let container = null

beforeEach(() => {
  // setup a DOM element as a render target
  // container = document.createElement("div");
  // document.body.appendChild(container);
})

afterEach(() => {
  // cleanup on exiting
  cleanup
  // unmountComponentAtNode(container);
  // container.remove();
  // container = null;
})

describe('Homepage', () => {
   it('test Titles are shown', () => {
      const homeDisplay = render(<Home />)
      expect(homeDisplay.queryAllByText(/Language LightHouse/))
      expect(homeDisplay.queryAllByText(/(Langue Leuchtturm)/))
      expect(homeDisplay.queryAllByText(/(Select a language)/))
   })

   it('testing German button', () => {
     const clickButton = jest.fn();
     const { getByText } = render(<Home Deutsch={clickButton} />);
     const germanButton = getByText(/Deutsch/i)
     fireEvent.click(germanButton);
     waitFor(() => {
       expect(clickButton).toHaveBeenCalled();
     });
   });

   it('testing French button', () => {
     const clickButton = jest.fn();
     const { getByText } = render(<Home Francais={clickButton} />);
     const frenchButton = getByText(/Francais/i)
     fireEvent.click(frenchButton);
     waitFor(() => {
       expect(clickButton).toHaveBeenCalled();
     });
   });

   it('testing Latin button', () => {
     const clickButton = jest.fn();
     const { getByText } = render(<Home Latin={clickButton} />);
     const latinButton = getByText(/Lingua Romanorum/i)
     fireEvent.click(latinButton);
     waitFor(() => {
       expect(clickButton).toHaveBeenCalled();
     });
   });
})

describe('footer', () => {
  it('testing home button', () => {
    const clickButton = jest.fn();
    const { getByText } = render(<Footer home={clickButton} />);
    const homeButton = screen.getByAltText('home-icon')
    fireEvent.click(homeButton);
    waitFor(() => {
      expect(clickButton).toHaveBeenCalled();
    });
  });
})

describe('German page', () => {
   it('instructions and score are shown', () => {
      const homeDisplay = render(<GermanGame />)
      expect(homeDisplay.queryAllByText(/Language LightHouse/))
      expect(homeDisplay.queryAllByText(/(English:)/))
      expect(homeDisplay.queryAllByText(/(Score:)/))
   })
})

describe('French page', () => {
   it('instructions and score are shown', () => {
      const homeDisplay = render(<FrenchGame />)
      expect(homeDisplay.queryAllByText(/Language LightHouse/))
      expect(homeDisplay.queryAllByText(/(English:)/))
      expect(homeDisplay.queryAllByText(/(Score:)/))
   })
})

describe('Latin page', () => {
   it('instructions and score are shown', () => {
      const homeDisplay = render(<LatinGame />)
      expect(homeDisplay.queryAllByText(/Language LightHouse/))
      expect(homeDisplay.queryAllByText(/(English:)/))
      expect(homeDisplay.queryAllByText(/(Score:)/))
   })
})

// describe('App', () => {
//  it('renders data', async () => {
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
//     jest.spyOn(global, 'fetch').mockResolvedValue({ json: jest.fn().mockResolvedValue({ fakeWord }) });
//
//  use asynchronous version of act to apply resolved Promise
//  await act(async () => {
//    render(<Controls />, container)
//    const test = await screen.queryByTestId('eng')
//  })

//  expect(await screen.queryByTestId('eng').textContent).toBe("english:")
//  expect(await screen.queryByTestId('ger').textContent).toBe("german:")
// global.fetch.mockRestore();
//  })
// })
