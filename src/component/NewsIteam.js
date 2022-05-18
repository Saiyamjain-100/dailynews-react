import React, { Component } from 'react'

export default class NewsIteam extends Component {
    // state = [title,description,ImgUrl]
    render() {
        let {title, description, ImageUrl, AboutUrl,Date1 } = this.props;
        return (
            <div>

                <div className="card my-2 mx-3" >
                    <img src={!ImageUrl?"https://i0.wp.com/makezine.com/wp-content/uploads/2022/05/ml.jpg?fit=791%2C879&ssl=1":ImageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description?description:"...."}</p>
                        <a href={AboutUrl} target="blank" className="btn btn-primary">Read More...</a>
                        <p className="card-text"><small className="text-muted">{new Date(Date1).toGMTString()}</small></p>
                    </div>

                </div>
            </div>
        )
    }
}
