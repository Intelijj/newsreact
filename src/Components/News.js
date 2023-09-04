import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
  articles= [
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "this.props.pageSizethis.props.pageSize-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "this.props.pageSizethis.props.pageSize-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  static  defaultProps = {
    pageSize:15,
    country:'in',
    category:'sports'
  
  };

   static propTypes = {
    pageSize:PropTypes.number,
    country: PropTypes.string,
    category:PropTypes.string
  
  }
   capitalizeFirstLetter=(str)=> {
    return str[0].toUpperCase() + str.slice(1);
  }
  
  constructor(props){
    super(props);
    this.state={
     articles: this.articles,
     loading:true,
     page:1,
     totalResults:0
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}->>NewsFeed`
  }


  async update(){
    this.props.setprogress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b44545958d44c6d859eabef491a758c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setprogress(50);
    let parseddata=await data.json();
    this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults,
    loading:false})
    this.props.setprogress(100);
  
  }
   async componentDidMount(){
   this.update();
  }


  
  fetchMoreData =async () => {
   
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b44545958d44c6d859eabef491a758c&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
      this.setState({
        page:this.state.page + 1
        })
    let data = await fetch(url);
    let parseddata=await data.json();
    this.setState({articles:this.state.articles.concat(parseddata.articles),totalResults:parseddata.totalResults
  })
      
  }; 

  render() {
    return (
      <>
       <h2 style={{margin:'35px 0px',marginTop:'90px'}}><center>News Section</center></h2> 
       {this.state.loading && <Spinner/>}
       
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
       <div className="row">
       
       {this.state.articles.map((element)=>{
          return <div className="col-md-4 "  key={element.url} >
         <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} newsurl={element.url} imgurl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name}></Newsitem>
         </div>
  })}
           
            
            
        </div>
        </div>
        </InfiniteScroll>
      
        
       
       
      </>
    )
  }
}

export default News
