import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imgurl,newsurl,author,date,source}=this.props;
    return (
     
      <div >
              <div className="card my-4 " >
        <img src={!imgurl?"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg":imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    New
    <span className="visually-hidden">unread messages</span>
  </span></h5>
          <p className="card-text">{description}</p>
          <span className="badge bg-dark">{source}</span>
          <p className="card-text"><small className="text-body-secondary">BY- {!author?"unknown":author} on { new Date(date).toGMTString()}</small></p>
          <a href={newsurl} target='_blannk' className="btn btn-sn btn-primary">Read more</a>
        </div>
</div>
      </div>
    )
  }
}

export default Newsitem
