import React, {useState} from 'react';
import Comments from './Comments'

function CommentList({comments}) {

    // const renderComments = comments.map((comment) => <Comments key={comment.id} comment={comment} />)

    const [commentSearch, setCommentSearch] = useState("")

    const filteredComments = comments.filter((comment) => {
        return comment.user.includes(commentSearch)
    })

    const commentItems = filteredComments.map((comment) => {
        return <Comments key={comment.id} comment={comment} />
    })

    const [isFiltered, setFilter] = useState(true)
    
    // function alphabeticalList()  {
    //     console.log(isFiltered)
    //     {isFiltered ? comment.comment("asc") : comment.comment("desc")}
    // }
    
    return (
        <div>
            <br></br>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setCommentSearch(e.target.value)}
            />
            {/* <button onClick={alphabeticalList}>ABC order</button> */}
            <h2>{commentItems.length} comments</h2>
            {commentItems}
        </div>
    )
}

export default CommentList;