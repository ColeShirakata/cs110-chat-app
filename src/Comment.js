import './Comment.css'
import { useState } from 'react';
import Vote from './Vote';
import Reply from './Reply';

function Comment({name, comment}) {

    const [replyClicked, setReplyClicked] = useState(false);
    const [replies, setReplies] = useState([]);
    const [replyName, setReplyName] = useState('');
    const [replyPost, setReplyPost] = useState('');

    const handleReplyClick = () => {
        setReplyClicked(true);
    };

    const handleName = (event) => {
        setReplyName(event.target.value);
    }

    const handlePost = (event) => {
        setReplyPost(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (replyName && replyPost) {
            setReplies([...replies, { replyName, replyPost }]);
            setReplyClicked(false);
        }
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
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="text" placeholder="Name..." className="name-box" value={replyName} onChange={handleName}/>
                            </div>
                            <div>
                                <input type="text" placeholder="Write a new post" className="post-box" value={replyPost} onChange={handlePost}/>
                            </div>
                            <div>
                                <button type="submit" className="submit-button">Submit</button>
                            </div>
                      </form>
                    ) : null}
                    <div className="comment-space">
                        {replies.map((comment, index) => (
                        <Reply key={index} name={comment.replyName} comment={comment.replyPost} />
                        ))}
                    </div>
                </div>
                <div className="vote-count">
                    <Vote />
                </div>
            </div>
        </div>
    );
}

export default Comment;