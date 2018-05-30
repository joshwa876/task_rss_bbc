import React, { Component } from 'react';
import './../App.css';
//import ItemOV from './ItemOV';
//import logo from '../../src/res/news.jpg'


class NewsOverview extends Component {    
        
    render() {
        let readMore = 'Read More';
        console.log('News Overview Object:: ',this.props.newsOV);
        //let str =JSON.stringify(this.props.newsOV,null,4);
       // console.log(str);
        return (
            <div>
                <div id='overViewBODY'>
                    <div id='overViewIMG'>
                        <img
                            id='imgOV'
                            src={this.props.newsOV.thumbnail}
                            alt=''/>
                    </div>
                    <div><h6>{this.props.newsOV.pubDate}</h6></div>
                    <div>{this.props.newsOV.description}</div>
                    <div>
                        <a href={this.props.newsOV.link}>
                            {readMore}
                        </a></div>
                </div>

            </div>
        )
    }
}
export default NewsOverview;

/**
 * 
 * {this.props.newsOV.username}<br/>
 {this.props.newsOV.pubDate}<br/>
 {this.props.newsOV.link}<br/>
 {this.props.newsOV.description}<br/>
 {this.props.newsOV.content}<br/>
 *
 */