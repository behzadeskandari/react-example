import React from 'react';
import logo from './logo.svg';
import JSONSecond from './db.json';
import './App.css';
import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';
import Life from './components/lifecycle';

class App extends React.Component {
  
  state = {
    news: JSONSecond,
    filtered:[],
    footerText: 'I am Happy Footer'

  }

  getKeywords = (event) => {
    console.log(event.target.value);
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item)=> {
      return item.title.indexOf(keywords) > -1;
    })

    this.setState({
      filtered:filtered
    })
    console.log('log')
  }


  render(){

    const {news ,footerText,filtered} = this.state;
    console.log(this.state.news)
    return (
      <div>
        <>
          <Header keywords={this.getKeywords}/>

          <NewsList news={filtered}>
              <h1>Header</h1>

          </NewsList>
          
          <Life/>
          
          <Footer footerText={footerText}/>
        </>
      </div>
    );
  }
}

export default App;
