import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import Header from "./components/Header";
import Card from './components/Card';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import content from './data/content';

export interface ITheme {
	colors: {
		header: string,
		body: string,
		footer: string
	},
	breakpoints: {
		mobile: string
	}
}

const theme: ITheme = {
	colors: {
		header: '#ebfbff',
		body: '#fff',
		footer: '#003333'
	},
	breakpoints: {
		mobile: '768px'
	}
};

const App: React.FC = () => {
  return (
	  <ThemeProvider theme={theme}>
		  <GlobalStyles />
		  <Header />
		  <Container>
			  {content.map(card => (
				  <Card key={card.id} item={card} />
			  ))}
		  </Container>
		  <Footer />
	  </ThemeProvider>
  );
}

export default App;
