import React from 'react'
import { Link } from 'react-router-dom'
import { landing_enterBtn, landing_inputPlaceholder } from '../../statics/labels'
const Landing = ({ theme }) => {
    return (
        <div className={`landing ${theme}`}>
            <div className="landing-box">
                <div className="form">
                    <input className='nameInput' placeholder={landing_inputPlaceholder} />
                    <button className='enterBtn'><Link to="/nextpage">{landing_enterBtn}</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Landing