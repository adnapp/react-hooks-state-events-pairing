import React, {useState} from 'react';

function Video({title, views, createdAt, upvotes, downvotes}) {
    // console.log("Video Props:", title)
    
    const [upvote, updateUpvote] = useState(upvotes)
    const [downvote, updateDownvote] = useState(downvotes)
    
    function handleUpClick(){
        updateUpvote((upvote) => ++upvote)
    }
     
    function handleDownClick(){
        updateDownvote((downvote) => ++downvote)
    }
    
    return(
        <div>
            <h2>{title}</h2>
            <p>{views} views | {createdAt}</p>
            <button onClick={handleUpClick}>{upvote} upvotes</button>
            <button onClick={handleDownClick}>{downvote} downvotes</button>
        </div>
    )
}

export default Video;