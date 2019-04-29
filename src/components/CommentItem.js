import React, {Component} from 'react'
import PropTypes from 'prop-types'
import defaultProfilePic from '../images/defaultProfilePic.png'

class CommentItem extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        profileImgUrl: PropTypes.string
    }
    static defaultProps = {
        text: "Filler Text",
        username: "Anonymous"
    }
    render(){
        const {text, username, profileImgUrl} = this.props
        return(
            <section data-test="component-comment-item">
                <div className="media">
                    <img data-test="comment-profile-img" src={profileImgUrl || defaultProfilePic} className="align-self-center mr-3" alt="..."/>
                    <div className="media-body">
                        <h5 className="mt-0">Title</h5>
                        <p data-test="comment-text">{text}</p>
                        <p data-test="comment-username">{username}</p>
                    </div>
                </div>
            </section>
        )
    }
}




export default CommentItem