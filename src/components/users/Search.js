import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
    state = {
        text: '',
        textError: ''
    }
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }
    // text above must match text in the form below
    onSubmit = e => { 
        e.preventDefault();
        if(this.state.text) { 
            this.props.searchUsers(this.state.text);
            this.setState({text: '', textError: ''})
        }
        else {    
            this.setState({text: '', textError: 'Please enter a search string'})
        }
    } 
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        if(!this.state.textError) {
            return (
                <div>
                    <form onSubmit={this.onSubmit} className="form">
                        <input type="text" name="text" placeholder="Search users..." 
                        value={this.state.text}
                        onChange={this.onChange}/>
                        <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                    </form>
                    {this.props.showClear && <button 
                      className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button> }
                    <div>
                        <h2 style={errorStyle}>&nbsp;</h2>
                    </div>
                </div>
            )
        }
        else 
            return (
                <div>
                    <form onSubmit={this.onSubmit} className="form">
                        <input type="text" name="text" placeholder="Search users..." 
                        value={this.state.text}
                        onChange={this.onChange}/>
                        <input type="submit" value="search" className="btn btn-dark btn-block"/>
                    </form>
                    <div>
                        <h2 style={errorStyle}>{this.state.textError}</h2>
                    </div>
                    
                </div>
            )
    }
}
const errorStyle = {
    color: 'red'
}

export default Search
