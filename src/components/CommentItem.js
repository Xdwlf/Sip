import React, {Component} from 'react'
import PropTypes from 'prop-types'
import defaultProfilePic from '../images/defaultProfilePic.png'

class CommentItem extends Component {
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
    render(){
        const {text, user, rating} = this.props
        return(
            <div data-test="component-comment-item">
                <div className="media">
                    <img data-test="comment-profile-img" src={(user && user.profileImgUrl) || defaultProfilePic} className="align-self-center mr-3" alt="..."/>
                    <div className="media-body">
                        <h5 className="mt-0">Title</h5>
                        <p data-test="comment-text">{text}</p>
                        <p data-test="comment-rating">{rating}</p>
                        <p data-test="comment-username">{user.username}</p>
                    </div>
                </div>
            </div>
        )
    }
}




export default CommentItem