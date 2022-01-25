import React, { useState } from 'react';
import PropTypes from 'prop-types';

// export class Search extends Component {
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
    // state = {
    //     text: '',
    //     textError: ''
    // }
    const [ text, setText ] = useState('')
    // text above must match text in the form below
    const onSubmit = e => { 
        e.preventDefault();
        if(text === '') { 
            setAlert('Please enter something', 'light');
        }
        else { 
            searchUsers(text);
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
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search
