import React from 'react'
import Card3 from '../Card3/Card3'
import '../ByActivity/ByActivity.css'

function ByActivity() {
  return (
    <div id="activity">
        <h1>By Activity</h1>
        <div className="activity-cards">
            <Card3 display="column" content='street-wear'/>
        <div className="activities-left">
                <Card3 display="row" content='luxury'/>
                <Card3 display="row" content='sport'/>
            </div>
        </div>
    </div>
  )
}

export default ByActivity
