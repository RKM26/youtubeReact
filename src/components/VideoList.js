import React from 'react';
import VideoItem from './VideoItem'
// import VideoDetail from './VideoDetail';

const VideoList=({videos, onVideoSelect})=>{

    const renderList = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    })

    

    //props.videos
return (
    <div className="ui relaxed divided list">{renderList}</div>
    )
}

export default VideoList;