import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: 1}}>
                        {source}
                    <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageUrl ? imageUrl : `https://images.livemint.com/img/2021/10/25/600x338/MINI_1635156873204_1635156895423.jpg`} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.livemint.com/img/2021/10/25/600x338/MINI_1635156873204_1635156895423.jpg" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
