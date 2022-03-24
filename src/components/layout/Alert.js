import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'

export const Alert = () => {
    const alertContext = useContext(AlertContext)
    
    const {alert, unsetAlert } = alertContext;
    
    return (
        alert != null ? ( 
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i> {alert.msg}
                {/* <button onClick={unsetAlert} className="btn btn-sm"> */}
                <button onClick={() => unsetAlert(alert.alertId)} className="btn btn-sm">
                    <i className="fas fa-times-circle"></i>
                    Close This Message
                </button> 
            </div>
        ) : (
            <div style={alertBoxStyle}>&nbsp;</div>
        )
    )
}

const alertBoxStyle = {
    padding: '0.7rem',
    margin: '1rem 0',
    opacity: '0.9'
}
export default Alert