import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon}/> {this.props.title}
                </h1>
            </div>
        )
    }
}

export default Navbar
