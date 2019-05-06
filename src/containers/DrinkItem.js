import React, {Component} from 'react'
import {connect} from "react-redux"
import IngredientList from "../components/IngredientList"
import Instructions from "../components/Instructions.js"
import ShowHidePackage from "../components/ShowHidePackage"
import CommentList from "../components/CommentList"
import {externalApiCall, internalServerCall, axiosTokenHeader} from "../services"
import {setNotification} from "../store/actions/notifications"
import {setError} from "../store/actions/errors"

class DrinkItem extends Component{
    constructor(props){
        super(props);
        this.state={
            drink: null,
            comments: []
        }
    }
    async componentWillMount(){
        const {drinkId} = this.props.match.params
        const drink = await externalApiCall("drinkId", drinkId)
        const comments = await this.loadComments(drinkId)
        this.setState({drink: drink[0], comments})
    }


    loadComments = (drinkId) => {
        return new Promise((resolve, reject)=>{
            internalServerCall('get', `drinks/${drinkId}/comments`)
                .then(res => {
                    let comments = res.data;
                    resolve(comments)
                })
                .catch(err=> {
                    const {setError} = this.props
                    setError(err.response.data.error.message)
                    reject()
                })
        })
    }

    addNewComment = (commentData) => {
        return new Promise((resolve, reject)=>{
            const {drinkId} = this.props.match.params
            const {currentUser} = this.props
            const comment = {
                ...commentData,
                user: currentUser.id,
                drinkId
            }
            internalServerCall('post', `drinks/${drinkId}/comments`, comment, axiosTokenHeader(localStorage.jwtToken))
                .then(res => {
                    let newComment = res.data;
                    const comments = [newComment, ...this.state.comments]
                    this.setState({comments})
                    resolve(newComment)
                })
                .catch(err=> {
                    const {setError} = this.props
                    setError(err.response.data.error.message)
                    reject()
                })
        })
    }

    editComment = (commentData) => {
        return new Promise((resolve, reject)=>{
            const {drinkId} = this.props.match.params
            const {currentUser} = this.props
            const {id, text, rating} = commentData
            const comment = {
                text, 
                rating,
                user: currentUser.id,
                drinkId
            }
            internalServerCall('put', `drinks/${drinkId}/comments/${id}`, comment, axiosTokenHeader(localStorage.jwtToken))
                .then(res => {
                    let editedComment = res.data;
                    this.setState((state)=> {
                        const comments = state.comments.map((c)=> (c._id===editedComment._id)? 
                            editedComment: c)
                        return {comments}
                    })
                    resolve(editedComment)
                })
                .catch(err=> {
                    const {setError} = this.props
                    setError(err.response.data.error.message)
                    reject()
                })
        })
    }

    deleteComment = (id) => {
        return new Promise((resolve, reject)=>{
            const {drinkId} = this.props.match.params
            const {currentUser} = this.props
            const comment = {
                user: currentUser.id
            }
            internalServerCall('delete', `drinks/${drinkId}/comments/${id}`, comment, axiosTokenHeader(localStorage.jwtToken))
                .then(res => {
                    let deleted = res.data;
                    this.setState((state)=> {
                        const comments = state.comments.filter((c)=> c._id!== deleted._id)
                        return {comments}
                    })
                    resolve(deleted)
                })
                .catch(err=> {
                    const {setError} = this.props
                    setError(err.response.data.error.message)
                    reject()
                })
        })
    }


    render(){
        const {drink, comments} = this.state
        const item = drink? (
            <div>
                <div>
                    <img src={drink.strDrinkThumb} alt={"image of " + drink.strDrink}/>
                    <div>
                        <h2>
                            {drink.strDrink}
                        </h2>
                        <h4>{drink.strAlcoholic}</h4>
                        <p>Best served in a {drink.strGlass}</p>
                        <p></p>
                    </div>
                    <ShowHidePackage text="Ingredients">
                        <IngredientList drink={drink} />
                    </ ShowHidePackage>
                    <ShowHidePackage text="Instructions">
                        <Instructions drink={drink} />
                    </ShowHidePackage>
                </div>
                <div>
                    <CommentList comments={comments} 
                        addNewComment={this.addNewComment}
                        editComment={this.editComment}
                        deleteComment={this.deleteComment}
                        currentUser={this.props.currentUser}
                        />
                </div>
            </div>
        ): null
        return (
            <div>
                {item}
            </div>)
    }

}


function mapStateToProps(state){
    return {
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps, {setError, setNotification})(DrinkItem);