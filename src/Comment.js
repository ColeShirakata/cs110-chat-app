import './Comment.css'
import { useState } from 'react';
import Vote from './Vote';
import Reply from './Reply';

function Comment({name, comment}) {

    const [replyClicked, setReplyClicked] = useState(false);
    const [reply, setReply] = useState('');
    const [replies, setReplies] = useState([]);

    const handleReplyClick = () => {
        setReplyClicked(true);
    }

    const handleComment = (comment) => {
        setReplyClicked(false);
        setReply(comment);
    }

    return (
        <div>
            <div className="comment-container">
                <div className="info">
                    <span className="name">{name}</span>
                    <span className="comment">{comment}</span>
                    <div className="reply-button">
                        <img className="reply-icon" src="reply-icon.png" alt="reply"></img>
                        <button className="reply" onClick={handleReplyClick}>Reply</button>
                    </div>
                    {replyClicked ? (
                        <div className="reply-box">
                            <Reply onSubmit={handleComment}/>
                        </div>
                    ) : null}
                    {reply && <div className="reply">{reply}</div>}
                    {replies.map((reply, index) => (
                        <div key={index}>
                            <Comment name={reply.name} comment={reply.post} />
                        </div>
                    ))}
                </div>
                <div className="vote-count">
                    <Vote />
                </div>
            </div>
        </div>
    );
}

export default Comment;