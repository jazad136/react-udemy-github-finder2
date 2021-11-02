import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }
    onChange = (e) => { 
        this.setState({ text: e.target.value });
    }
    render() {
        return (
            <div>
                <form className="form">
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
