import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

// export class Search extends Component {
const Search = ({ showClear, clearUsers, setAlert }) => {
    const githubContext = useContext(GithubContext);

    const [ text, setText ] = useState('')
    // text above must match text in the form below
    const onSubmit = e => { 
        e.preventDefault();
        if(text === '') { 
            setAlert('Please enter something', 'light');
        }
        else { 
            // searchUsers(text);
            githubContext.searchUsers(text)
            // setState({text: '', textError: ''});
            setText('')
        }
    } 
    const onChange = (e) => setText(e.target.value);

    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search users..."
            value={text}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
        {/* <div>
          <h2 style={errorStyle}>{textError}</h2>
        </div> */}
      </div>
    );        
    
}
// const errorStyle = {
//     color: 'red'
// }
Search.propTypes = {
    // searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search
