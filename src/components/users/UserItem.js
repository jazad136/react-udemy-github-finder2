import React, { Component } from 'react'

class UserItem extends Component {
    constructor() { 
        super();
        this.state = {
            id: 'id',
            login: 'jazad136',
            avatar_url: 'https://avatars.githubusercontent.com/u/1129384?v=4',
            html_url: "https://github.com/jazad136"

        }
    }
    render() {
        return <div className="card text-center">
            <img src={this.state.avatar_url}
            alt=''
            className='round-img'
            style={{ width: '60px' }}
            />
            <h3>{this.state.login}</h3>
            <div>
                <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">
                    More
                </a>
            </div>
        </div>
    }
}

export default UserItem
