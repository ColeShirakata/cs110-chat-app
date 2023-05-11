import './Vote.css';
import { useState } from 'react';


function Vote() {
    const [vote, setVote] = useState(0);

    const handleUpvote = () => {
        setVote(vote + 1);
    }

    const handleDownvote = () => {
        setVote(vote - 1);
    }

    return (
        <div>
            <button className="up-button" onClick={handleUpvote}>
                <img className="up-vote" src="up-vote.png" alt="upvote"></img>
            </button>
            <div>{vote}</div>
            <button className="down-button" onClick={handleDownvote}>
                <img className="down-vote" src="down-vote.png" alt="downvote"></img>
            </button>
        </div>
    );
}

export default Vote;