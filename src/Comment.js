import React from 'react';
import { connect } from 'react-redux';
import { thumbUpComment } from './actions'

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

const Comment = ({text, votes, id, thumbUpComment}) => (
    <li>
        {text} 
        <span>votes: {votes}</span> 
        <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    </li>
);


export default connect(null, mapDispatchToProps)(Comment);