import React, {Component} from 'react';
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm"
import PropTypes from "prop-types"

class CommentList extends Component{
    constructor(props){
        super(props)
        this.state= {
            comments: [],
            clicked: false
        }
    }

    static propTypes= {
        comments: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            user: PropTypes.object.isRequired,
        }))
    }

    static defaultProps= {
        comments: []
    }

    handleClick = ()=>{
        this.setState({clicked: true})
    }

    render(){
        const {comments, addNewComment} = this.props
        const shownComments = comments.map(c=>(
            <div key={c._id}>
                <CommentItem text={c.text} 
                    user={c.user}
                    rating={c.rating}
                    id={c._id}
                    />
            </div>
        ))
        return(
            <div>
                <h4>Comments</h4>
                <div>
                    <button onClick={this.handleClick}>Add A New Comment</button>
                </div>
                <hr/>
                {this.state.clicked && <CommentForm addNewComment={addNewComment}  />}
                {shownComments}
            </div>
        )
    }
}

export default CommentList
