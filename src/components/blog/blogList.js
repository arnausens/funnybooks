import React, { Component } from 'react';

class BlogList extends Component {
    render() {
        const {title, text, className} = this.props
        return (
            <div className={`${className} blog-post`}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        )
    }
}

export default BlogList;