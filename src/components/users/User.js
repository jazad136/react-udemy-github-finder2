import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
export class User extends Component {
    
    componentDidMount() { 
        // grabs the login parameter from the url that we used to get here. (wow...) 
        this.props.getUser(this.props.match.params.login);
    }
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.object.isRequired
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
        if(loading) return <Spinner/>
        return <Fragment>
            <Link to='/' className='btn btn-light'>
                Back to Search
            </Link>
        </Fragment>
    }
}

export default User;