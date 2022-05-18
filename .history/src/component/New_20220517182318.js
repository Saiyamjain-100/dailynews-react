import React, { Component } from 'react'
import NewsIteam from './NewsIteam'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
 

export default class New extends Component {
    static defaultProps={
        country:'in',
        category:'technology',
        apiKey:''
    }

    static propTypes ={
        country:PropTypes.string,
        category:PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            loding: true,
            articles: [],
            page: 1,
            totalResults:0,
            pagesize: 20,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6289d760f4c497181e97da257027b16&page=${this.state.page}&pageSize=20`
        this.setState({
            loding:true
        })
        let data = await fetch(url);
        
        let praseData = await data.json();
        this.setState({
            totalResults: praseData.totalResults,
            articles: praseData.articles,
            loding:false
        })

    }

    handlePrevious = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6289d760f4c497181e97da257027b16&page=${this.state.page - 1}&pageSize=${this.state.pagesize}`; 
        this.setState({
            loding:true
        })
        let data = await fetch(url);
        let praseData = await data.json();
        this.setState({
            totalResults: praseData.totalResults,
            
            loding:false,
            page: this.state.page - 1,
            articles: praseData.articles

        })

    }
    handleNext = async () => {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults /this.state.pagesize)) {

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6289d760f4c497181e97da257027b16&page=${this.state.page + 1}&pageSize=${this.state.pagesize}`;
            this.setState({
                loding:true
            })
            let data = await fetch(url);
            let praseData = await data.json();
            this.setState({
                totalResultss: praseData.totalResults,
                loding:false,
                page: this.state.page + 1,
                articles: praseData.articles 
            })
        }
    }
    fetchMoreData =async () => {
        this.setState({page: this.state.page+1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6289d760f4c497181e97da257027b16&page=${this.state.page + 1}&pageSize=${this.state.pagesize}`;
            this.setState({
                loding:true
            })
            let data = await fetch(url);
            let praseData = await data.json();
            this.setState({
                loding: false,
                articles: this.state.articles.concat(praseData.articles) 
            })
      };
    
    render() {
        return (
            <div>
                <h1 className='text-center my-3'>Top highlight </h1>
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
                <div className="row container"> 
                    {this.state.articles.map((elements) => {
                        return <div className="col-md-4" key={elements.url}>
                            <NewsIteam title={elements.title} description={elements.description?elements.description.slice(0, 99):" "} Date1={elements.publishedAt} ImageUrl={elements.urlToImage} AboutUrl={elements.url} />
                        </div>
                    })}
                </div>
             
        </InfiniteScroll>  
            </div>
        )
    }
}
