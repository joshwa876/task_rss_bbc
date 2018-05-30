import React, {Component} from 'react';
//import App from './../App';
import './../App.css';
//import ItemOV from './ItemOV';
//import NewsOverview from './NewsOverview';
class Item extends Component{
    temp = this.props.articleNA;
    mHandleClick(){
       //console.log("Clicked: ",this.temp);
       //todo: articleOV might be recieving the entire array
       return (
           <div>
           {this.props.mGetNewsItem(this.temp)}
         </div>);
       
    }
    render(){
       // this.mHandleClick = this.mHandleClick.bind(this);
      // console.log('Item::render() ',this.temp);
        return(
            <li className='newsItems' onClick={this.mHandleClick.bind(this)}>
               <div id='rss_title'>
                   {this.temp.title}
               </div>
               <div id='rss_summary'>
               
                   {this.temp.description}
               </div>
            </li>
        );
    }
}
export default Item;