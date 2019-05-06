import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentForm from "./CommentForm"
import defaultProfilePic from '../images/defaultProfilePic.png'

class CommentItem extends Component {
    constructor(props){
        super(props)
        this.state={
            edit:false
        }
    }
    static propTypes = {
        text: PropTypes.string.isRequired,
        user: PropTypes.shape({
            username: PropTypes.string.isRequired,
            profileImgUrl: PropTypes.string,
            _id: PropTypes.string.isRequired
        }),
        profileImgUrl: PropTypes.string,
        rating: PropTypes.number
    }
    static defaultProps = {
        text: "Filler Text",
        username: "Anonymous"
    }
    toggleEdit= ()=>{
        this.setState({edit: !this.state.edit})
    }
    deleteComment=() =>{
        this.props.deleteComment(this.props.id)
    }
    render(){
        const {text, user, rating, id, editComment} = this.props
        const display = (!this.state.edit) ? (
            <div className="media">
                    <img data-test="comment-profile-img" src={(user && user.profileImgUrl) || defaultProfilePic} className="align-self-center mr-3" alt="..."/>
                    <div className="media-body">
                        <h5 className="mt-0">Title</h5>
                        <p data-test="comment-text">{text}</p>
                        <p data-test="comment-rating">{rating}</p>
                        <p data-test="comment-username">{user.username}</p>
                    </div>
                    <button className="btn btn-warning" onClick={this.toggleEdit}>Edit</button>
                    <button className="btn btn-danger" onClick={this.deleteComment}>Delete</button>

                </div>
        ): (
            <CommentForm 
                values={{text, user, rating, id}}
                toggleEdit={this.toggleEdit}
                editComment={editComment}
                />
        )
        return(
            <div data-test="component-comment-item">
                {display}
            </div>
        )
    }
}




export default CommentItem