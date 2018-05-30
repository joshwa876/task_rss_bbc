import React, { Component } from 'react';
import './../App.css';

class NewsOutlets extends Component {
    render() {
        //console.log(this.props);
        //let outlets = this.props.vNews;
        //console.log('Render::NewsOutlet:',outlets);

        return (
            <div>
                {this.props.vNews.length > 0 ? this.props.vNews.map(news=>{
                    return <li key={news.username} className='newsOutlet'> {news.username} </li>}):null
                }
            </div>
        );
    }
}

export default NewsOutlets;
/**
**/