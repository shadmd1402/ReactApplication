import React from 'react'

function Video ({video})  {

  return (
    <div >
      <a href={video.url}>
        <div>
        <h3>Title : {video.title}</h3>
        <p>Description:  {video.description}</p>
        </div>
      </a>
    </div>
  )
}

export default Video