import React,{ Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { Card } from 'antd';


import 'antd/dist/antd.css';



class PCNewsBlock extends Component {
  constructor(){
    super();
    this.state = {
      news: ''
    };
  }

  componentWillMount(){
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" +
      this.props.type + "&count=" + this.props.count, myFetchOptions)
      .then(response => response.json())
      .then(json => this.setState({news: json}));
  }

  render() {
    const { news } = this.state;
    const newsList = news.length ?
      news.map((newsItem,index)=>(
        <li key={index}>
          <Link to={`details/${newsItem.uniquekey}`} target="_blank">
            {newsItem.title}
          </Link>
        </li>
      ))
      : "没有加载到任何新闻";

    return (
      <div className="topNewsList">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>
    );
  }
}


export default PCNewsBlock;
