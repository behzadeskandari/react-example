import React from 'react';
import logo from './logo.svg';
import JSONSecond from './db.json';
import './App.css';
import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';

class App extends React.Component {
  
  state = {
    news: JSONSecond,
    footerText: 'I am Happy Footer'
  }

  render(){

    const {news ,footerText} = this.state;
    console.log(this.state.news)
    return (
      <div>
        <>
          <Header />
          <NewsList news={news}>
              <h1>Header</h1>

          </NewsList>
          <Footer footerText={footerText}/>
        </>
      </div>
    );
  }
}

export default App;
