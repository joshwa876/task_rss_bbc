import React, {Component} from 'react';
import Item from './Item';

class NewsArticles extends Component{

    render(){
        //console.log('NewsArticles::render()');
        let news_items;
        if(this.props.articleApp){
            news_items = this.props.articleApp.map(article=>{
                return(<Item 
                    key={article.username} 
                    mGetNewsItem={this.props.mGetNewsItem} 
                    articleNA={article}/>);
            });
        }
        return(<div>{news_items}</div>);
    }
}
export default NewsArticles;