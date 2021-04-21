import App from './App';
import { act, fireEvent, cleanup, waitFor, render } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { screen } from '@testing-library/dom';
import Home from "./components/Home.js"
import GermanNouns from "./components/GermanNouns.js"
import FrenchNouns from "./components/FrenchNouns.js"
import LatinNouns from "./components/LatinNouns.js"
import GermanVerbs from "./components/GermanVerbs.js"
import FrenchVerbs from "./components/FrenchVerbs.js"
import LatinVerbs from "./components/LatinVerbs.js"
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

   it('testing German Nouns button', () => {
     const clickButton = jest.fn();
     const { getByTestId } = render(<Home Deutsch={clickButton} />, { wrapper: BrowserRouter });
     const germanButton = getByTestId('nouns-de')
     fireEvent.click(germanButton);
     waitFor(() => {
       expect(clickButton).toHaveBeenCalled();
     });
   });

   it('testing French Nouns button', () => {
     const clickButton = jest.fn();
     const { getByTestId } = render(<Home Francais={clickButton} />, { wrapper: BrowserRouter });
     const frenchButton = getByTestId('nouns-fr')
     fireEvent.click(frenchButton);
     waitFor(() => {
       expect(clickButton).toHaveBeenCalled();
     });
   });

   it('testing Latin Nouns button', () => {
     const clickButton = jest.fn();
     const { getByTestId } = render(<Home Latin={clickButton} />, { wrapper: BrowserRouter });
     const latinButton = getByTestId('nouns-la')
     fireEvent.click(latinButton);
     waitFor(() => {
       expect(clickButton).toHaveBeenCalled();
     });
   });

   it('testing German verbs button', () => {
     const clickButton = jest.fn();
     const { getByTestId } = render(<Home Deutsch={clickButton} />, { wrapper: BrowserRouter });
     const germanButton = getByTestId('verbs-de')
     fireEvent.click(germanButton);
     waitFor(() => {
       expect(clickButton).toHaveBeenCalled();
     });
   });

   it('testing French verbs button', () => {
     const clickButton = jest.fn();
     const { getByTestId } = render(<Home Francais={clickButton} />, { wrapper: BrowserRouter });
     const frenchButton = getByTestId('verbs-fr')
     fireEvent.click(frenchButton);
     waitFor(() => {
       expect(clickButton).toHaveBeenCalled();
     });
   });

   it('testing Latin verbs button', () => {
     const clickButton = jest.fn();
     const { getByTestId } = render(<Home Latin={clickButton} />, { wrapper: BrowserRouter });
     const latinButton = getByTestId('verbs-la')
     fireEvent.click(latinButton);
     waitFor(() => {
       expect(clickButton).toHaveBeenCalled();
     });
   });
})

describe('footer', () => {
  it('testing home button', () => {
    const clickButton = jest.fn();
    const { getByText } = render(<Footer home={clickButton} />, { wrapper: BrowserRouter });
    const homeButton = screen.getByAltText('home-icon')
    fireEvent.click(homeButton);
    waitFor(() => {
      expect(clickButton).toHaveBeenCalled();
    });
  });
})

describe('German Nouns page', () => {
   it('instructions and score are shown', () => {
      const homeDisplay = render(<GermanNouns />)
      expect(homeDisplay.queryAllByText(/Language LightHouse/))
      expect(homeDisplay.queryAllByText(/(English:)/))
      expect(homeDisplay.queryAllByText(/(Score:)/))
   })
})

describe('French Nouns page', () => {
   it('instructions and score are shown', () => {
      const homeDisplay = render(<FrenchNouns />)
      expect(homeDisplay.queryAllByText(/Language LightHouse/))
      expect(homeDisplay.queryAllByText(/(English:)/))
      expect(homeDisplay.queryAllByText(/(Score:)/))
   })
})

describe('Latin Nouns page', () => {
   it('instructions and score are shown', () => {
      const homeDisplay = render(<LatinNouns />)
      expect(homeDisplay.queryAllByText(/Language LightHouse/))
      expect(homeDisplay.queryAllByText(/(English:)/))
      expect(homeDisplay.queryAllByText(/(Score:)/))
   })
})

describe('German Verbs page', () => {
   it('instructions and score are shown', () => {
      const homeDisplay = render(<GermanVerbs />)
      expect(homeDisplay.queryAllByText(/Language LightHouse/))
      expect(homeDisplay.queryAllByText(/(English:)/))
      expect(homeDisplay.queryAllByText(/(Score:)/))
   })
})

describe('French Verbs page', () => {
   it('instructions and score are shown', () => {
      const homeDisplay = render(<FrenchVerbs />)
      expect(homeDisplay.queryAllByText(/Language LightHouse/))
      expect(homeDisplay.queryAllByText(/(English:)/))
      expect(homeDisplay.queryAllByText(/(Score:)/))
   })
})

describe('Latin Verbs page', () => {
   it('instructions and score are shown', () => {
      const homeDisplay = render(<LatinVerbs />)
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
//  //use asynchronous version of act to apply resolved Promise
//  await act(async () => {
//    render(<GermanNouns />)
//    const test = await screen.queryByTestId('eng')
//  })
//
//  expect(await screen.queryByTestId('eng').textContent).toBe("english:")
//  expect(await screen.queryByTestId('ger').textContent).toBe("german:")
//  global.fetch.mockRestore();
//  })
// })
