import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} onError={(e)=>{e.target.onerror = null; e.target.src="https://images.livemint.com/img/2021/10/25/600x338/MINI_1635156873204_1635156895423.jpg"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Go somewhere</a>
                    </div> 
                </div>
            </div>
        )
    }
}

export default NewsItem
