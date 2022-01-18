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
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.object.isRequired,
    }
    render() {
        const {
            name, 
            company,
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
        // return <Fragment>
        //     <Link to='/' className='btn btn-light'>
        //         Back to Search
        //     </Link>
        // </Fragment>
        return (
          <Fragment>
            <Link to="/" className="btn btn-light">
              Back to Search
            </Link>
            Hireable: {hireable ? (
              <i className="fas fa-check text-success" />
            ) : (
              <i className="fas fa-times-circle text-danger" />
            )}
            <div className="card grid-2">
              <div className="all-center">
                <img
                  src={avatar_url}
                  className="round-img"
                  alt=""
                  style={{ width: "150px" }}
                />
                <h1>{name}</h1>
                <p>Location: {location}</p>
              </div>
              <div>
                  {bio ?? (<Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </Fragment>
                  )}
                  <br/>
                  <a href={html_url} className='btn btn-dark my-1'>
                      Visit GitHub Profile
                  </a>
                  <ul>
                    <li>
                        {company && (<Fragment>
                        <strong>Company: </strong> {company}    
                        </Fragment>)}
                    </li>
                    <li>
                        {login && (<Fragment>
                        <strong>Username: </strong> {login}    
                        </Fragment>)}
                    </li>
                    <li>
                        {blog && (<Fragment>
                        <strong>Website: </strong> {blog}    
                        </Fragment>)}
                    </li>
                  </ul>
              </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
          </Fragment>
        );
    }
}

export default User;