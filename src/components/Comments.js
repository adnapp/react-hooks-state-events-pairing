import React, {useState} from 'react'

function Comments({ comment }) {
   
    const [upvote, updateUpvote] = useState(0)
    const [downvote, updateDownvote] = useState(0)

    function handleUpClick(){
        updateUpvote((upvote) => ++upvote)
    }
     
    function handleDownClick(){
        updateDownvote((downvote) => ++downvote)
    }

    function removeComment(){
        // console.log("RemoveComment:", comments)
        // // comment.filter(key)
        // console.log(comments.id)
        // const newList = comment.filter((comment) => comment.id !== id);
 
        // setList(newList)
    }
   
    return (
        <div>
            <h3> Name: {comment.user}, Comments: {comment.comment} </h3>           
            <button onClick={handleUpClick}>{upvote} upvotes</button>
            <button onClick={handleDownClick}>{downvote} downvotes</button>
            <button onClick={removeComment}> Remove Comment </button>

        </div>
    )
}

export default Comments;
