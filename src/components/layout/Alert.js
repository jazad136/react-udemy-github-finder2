import React from 'react'

export const Alert = ({ alert }) => {
    return (
        alert != null && ( 
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i> {alert.msg}
                {/* <button onClick={onClick} className="btn btn-sm">
                    <i className="fas fa-times-circle"></i>
                    Close This Message
                </button> */}
            </div>
        ) 
    )
}
export default Alert