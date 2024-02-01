import React from 'react'
import Video from './Video';
import Header from './Header';

function VideosList() {
    const videos = [{id:1 , title:'abc', description : 'desc1' , url:'https://react.dev/blog' },
    {id:2 ,title:'abc1', description : 'descasa222' , url:'https://react.dev/blog' },
    {id:3 ,title:'abc2', description : 'desc3333' , url:'https://react.dev/blog' }] ;
  return (
    <>
    < Header />
    <section>
    <h2>Heading</h2>
    {videos.map(video =>  <Video key={video.id} video={video} /> )}
    </section>
    </>
  )
}


export default VideosList
