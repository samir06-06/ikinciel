import React from 'react'
import '../EmailBtn/EmailBtn.css'
function EmailBtn(props) {
  return (
    <div className="get-code">
        <input  className="form-control"  />
        <button className="btn btn-primary bg-green">{props.text}</button>
    </div>
  )
}

export default EmailBtn
