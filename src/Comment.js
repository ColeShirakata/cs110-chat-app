import './Comment.css'

function Comment({name, comment}) {

    return (
        <div>
            <div className="comment-container">
                <div className="name">{name}</div>
                <div className="comment">{comment}</div>
                <div className="reply-button">
                    <img className="reply-icon" src="reply-icon.png" alt="reply"></img>
                    <button className="reply">Reply</button>
                </div>
            </div>
        </div>
    );
}

export default Comment;