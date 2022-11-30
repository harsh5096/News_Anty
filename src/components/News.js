// import React, { Component } from 'react'
// import Newsitem from './Newsitem'
// import Spinner from './spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';

// export class News extends Component {

// static defaultProps ={
//   country:"in",
//   pageSize: 5,
//   category:"sports",
// }
// static PropType ={
//   country: PropTypes.string,
//   pageSize:PropTypes.number,
//   category:PropTypes.string,
// }

// // capitalizeFirstLetter = (string) =>{
// // return string.chartAt(0).toupperCase() + string.slice(1);
// // }

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults:0
//     }
//    // document.title = `${this.capitalizeFirstLetter(this.props.category)} - News-Anty`;
//     document.title = `${this.props.category} - News-Anty`;
//   }
//   async updateNews(){
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3cf07450fbc4421095f272f8fb2d7e88&page=${this.state.page}&pageSize=${this.props.pageSize}`
//     this.setState({loading:true})
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     //console.log(parsedData);
//     this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults, loading:false})

//   }

//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3cf07450fbc4421095f272f8fb2d7e88&page=1&pageSize=${this.props.pageSize}`
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parsedData = await data.json()
//     // console.log(parsedData);
//     // this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults, loading:false})
//     this.updateNews();
//   }

// //   handlePrevClick = async ()=>{
// //     //console.log("pre")
// //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3cf07450fbc4421095f272f8fb2d7e88&page=${this.state.page -1}&pageSize=${this.props.pageSize}`
// //     // this.setState({loading:true})
// //     // let data = await fetch(url);
// //     // let parsedData = await data.json()
// //     // console.log(parsedData);
// //     // this.setState({
// //     // page:this.state.page -1,
// //     // articles: parsedData.articles,
// //     // loading:false
// //     // })
// //     this.setState({page:this.state.page - 1})
// //     this.updateNews();
// //   }

// //   handleNextClick =async()=>{
// //     console.log("next");
// //     // if(!(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize))) {
// //     //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3cf07450fbc4421095f272f8fb2d7e88&page=${this.state.page +1}&pageSize=${this.props.pageSize}`
// //     //   this.setState({loading:true})
// //     //   let data = await fetch(url);
// //     //   let parsedData = await data.json()
// //     //   this.setState({
// //     //   page:this.state.page +1,
// //     //   articles: parsedData.articles,
// //     //   loading:false

// //   //})}
// //   this.setState({page:this.state.page + 1})
// //   this.updateNews();
// // }

// fetchMoreData = async() => {
//   this.setState({ page:this.state.page +1 });
//   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3cf07450fbc4421095f272f8fb2d7e88&page=1&pageSize=${this.props.pageSize}`

//   let data = await fetch(url);
//   let parsedData = await data.json()
//   console.log(parsedData);
//   this.setState({ articles: this.state.articles.concat(parsedData.articles) , totalResults:parsedData.totalResults, loading:false})
//   };

//   render() {
//     return (
//       <div className="container my-5">
//         <h3 className=" text-center">News - Anty - Top Headlines</h3>
//       <div>{this.state.loading && < Spinner/>}</div>

//       <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !==this.state.totalResults}
//           loader={< Spinner/>}
//         >
//           <div className="container">
//         <div className=" row " >"
//           { this.state.articles.map((element) => {
//             return <div className="col-md-4" key={element.url}>
//               <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage}
//                 newsUrl={element.url} author={element.author} date={element.publishedAt} />
//             </div>
//           })}    
//          </div>
//          </div>
//          </InfiniteScroll>

//          {/* <div className="container d-flex justify-content-between">
//             <button disabled={this.state.page<=1}type="button" className="btn btn-info"onClick={this.handlePrevClick}>&larr; Previous</button>
//             <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-info"onClick={this.handleNextClick}>Next &rarr;</button>
//             </div> */}
//         </div>
//       )
//       }
//       }


//         export default News




import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const capitalizeFirstLetter = (string) =>{
return string.charAt(0).toUpperCase() + string.slice(1);
}

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3cf07450fbc4421095f272f8fb2d7e88&page=${page}&pageSize=${props.pageSize}`
    setloading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News-Anty`;
    updateNews()
   // eslint-disable-next-line
  }, []
  )

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3cf07450fbc4421095f272f8fb2d7e88&page=${page + 1}&pageSize=${props.pageSize}`
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json()
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  };

  return (
    <>
      <div className="container my-5">
        <h3 className=" text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>News - Anty - Top Headlines</h3>
        <div>{loading && < Spinner />}</div>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={< Spinner />}
        >
          <div className="container">
            <div className=" row " >
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage}
                    newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>

  )
}

News.defaultProps = {
  country: "in",
  pageSize: "5",
  category: "general"
}

News.PropType = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
