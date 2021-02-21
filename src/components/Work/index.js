import React from 'react'
import "./card.css"


const index = ({ work }) => {
    return (
        <div className="card">
        <div className="img-container">
                   <img alt={work.name} src={work.img} />
                   <p><strong>{work.name}</strong> </p>
      </div>
      <div className="content">
        <ul>
          <li>
           <p>Plant care assistance and social sharing app.</p>
          </li>
          <li>
            <strong><a href={work.site} target="_blank">Website</a></strong> 
          </li>
          <li>
            <strong><a href={work.repo} target="_blank">GitHub Repo</a></strong>
          </li>
        </ul>
      </div> 
      </div>
    )
}

export default index