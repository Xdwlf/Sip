import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentItem from '../components/CommentItem'


class CommentList extends Component{
    static propTypes = {
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            profileImgUrl: PropTypes.string
        }))
    }

    static defaultProps = {
        comments: []
    }

    constructor(props){
        super(props)
        this.state= {
            comments: []
        }
    }
    componentWillMount(){
        const {comments} = this.props
        this.setState({comments})
    }

    render(){
        const comments = (this.state.comments.length>0)? this.state.comments.map(commentData=>(
                <CommentItem 
                    key={commentData._id} 
                    data-test="component-comment-item"
                    {...commentData} /> )) : 
                (<div data-test="comment-list-error">There are no comments yet.</div>)
        return (
            <section data-test="component-comment-list">
                {comments}
            </section>
        )
    }
}

export default CommentList