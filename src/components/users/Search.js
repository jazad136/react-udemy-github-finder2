import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }
    // text above must match text in the form below
    onSubmit = e => { 
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''})
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search users..." 
                    value={this.state.text}
                    onChange={this.onChange}/>
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
