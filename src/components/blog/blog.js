import React, { Component } from 'react';
import TopPage from '../topComponent';
import BlogApi from '../../api/postRepository';
import BlogList from '../blog/blogList';
import swal from 'sweetalert';

class Blog extends Component {
    constructor() {
        super();

        this.state= {
            posts: []
        }
    }

    UNSAFE_componentWillMount = (e) => {
        BlogApi.getPost()
            .then(r => {
                
                this.setState({
                  posts: this.state.posts.concat(r)
                })
                
                console.log(r)
            }).catch(e => {
                swal('Ooops!', "Debes estar logueado.", "error")
                console.log(e)
        });

    };

    render() {
        return (
            <div className='app'>
                <TopPage className='Home-page__title' title='Funny Books Blog'/>
                <div className='blog-wrapper'>
                    <div className='blog-wrapper__post'>
                        {this.state.posts.map(post => {
                            return <BlogList key={post.id} title={post.title} text={post.text}/>
                        })}
                    </div>
                </div>
            </div>    
        )
    }
}

export default Blog;