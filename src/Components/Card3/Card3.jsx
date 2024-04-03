import React from 'react'
import { Link } from 'react-router-dom'
import '../Card3/Card3.css'
import cards  from '../../Assets/data.js'
function Card3({content, display}) {
    const data = cards.find(data => data.name.toLowerCase() === content.toLowerCase())
    return (
    <div className='card3' style={{ flexDirection: display }}>
      <div className="card3-pic">
        <Link to=""><img src={data.img} alt="" /></Link>
      </div>
      <div className="card3-text" >
        <h1>{data.name}</h1>
        <p>{data.lorem}</p>
        <a href={data.href}>CHECK IT OUT→</a>
      </div>
    </div>
  )
}

export default Card3
