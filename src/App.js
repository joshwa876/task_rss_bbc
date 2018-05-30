import React, { Component } from 'react';
import NewsArticles from './components/NewsArticles';
import NewsOverview from './components/NewsOverview';
import NewsOutlets from './components/NewsOutlets';
import './App.css';
//import data from './components/bbc.json';
//import ItemOV from './components/ItemOV';
class App extends Component {
    temp=[];
    constructor(props) {
        super(props);
        this.state = {
            articlesO: [],
            staticJson:[],
            newsItem:Object,
            news:[
                {key: '1',username: 'BBC', description: 'News Description'},
                {key: '2',username: 'CNN', description: 'News Description'},
                {key: '3',username: 'FOX', description: 'News Description'}
            ]
        }
    }

    componentWillMount(){
        //this.fetchData();
       this.mGetStaticJson();
    }
    fetchData(){
        const data = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Frss.xml';
        fetch(data)
            .then(response => response.json())
            .then(parsedJSON => parsedJSON.results.map(articleItem => (
                {
                    title: `${articleItem.title}`,
                    pubDate:`${articleItem.pubDate}`,
                    description: `${articleItem.description}`,
                    content: `${articleItem.content}`,
                    link: `${articleItem.link}`
                }
            )))
            .then(articlesO => this.setState({articlesO}))
            .catch(error => console.log(error));

    }
    mGetStaticJson(){
        let json = require('./components/bbc.json');
        this.setState({staticJson:json.items});
        this.temp = json.items;
        console.log('state.staticJson::',this.temp);
    }
    mGetDataFromItem(dataOV){
        this.setState({
            newsItem:dataOV
        });
        console.log('DataOV::',this.state.newsItem.username);

    }
    
    render(){

        let vNews = this.state.news;
       //console.log('APP::render()',this.state.articlesO);
        //console.log('Render::App:length',this.state.newsItem);
        return (
        <div  className="App" id='App'>
            <div id='header'> <h2>{this.state.newsItem.title}</h2></div>
            <div className='news_general' id='news_outlets'>
                <NewsOutlets vNews={vNews}/>
            </div>
            <div className='news_general' id="news_feed">
                <NewsArticles
                key={this.temp.pubDate}
                articleApp={this.temp}
                mGetNewsItem={this.mGetDataFromItem.bind(this)}/>
            </div>
            <div className='news_general'>
                <NewsOverview newsOV={this.state.newsItem}/>
            </div>
            
        </div>
    );
    
  }
  //this belongs in the divTag news_general:::  articleOV={this.state.articlesO}

}

export default App;
