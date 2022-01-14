import React, { Component } from 'react'

export class User extends Component {
    
    componentDidMount() { 
        // grabs the login parameter from the url that we used to get here. (wow...) 
        this.props.getUser(this.props.match.params.login);
    }

    render() {
        const {
            name, 
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable} = this.props.user;

        const{ loading } = this.props;
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default User;