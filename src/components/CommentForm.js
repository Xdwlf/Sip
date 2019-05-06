import React, {Component} from 'react';

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state={
            text: "",
            rating: 5
        }
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    componentWillMount(){
        const {values} = this.props
        if(values) {
            this.setState(values)
        }
    }

    async handleSubmit(e){
        e.preventDefault();
        const {addNewComment, editComment, toggleEdit, toggleForm, id} = this.props
        const newComment ={...this.state}
        if(this.props.values){
            await editComment({id, ...this.state})
            toggleEdit()
        } else {
            addNewComment(newComment)
            toggleForm()
        }
    }

    handleChange= (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return(
            <div>
                <form id="auth-form" onSubmit={this.handleSubmit}>
                    <h4>Add a New Comment</h4>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <textarea
                                className="form-control"
                                id="text" 
                                name="text" 
                                value={this.state.text}
                                placeholder="Your Comment"
                                onChange={this.handleChange}
                                />
                            <input type="number" 
                                id="rating"
                                name="rating"
                                min="1" 
                                max="5" 
                                value={this.state.rating}
                                onChange={this.handleChange}
                                />
                        </div>
                    </div>
                    {(this.props.values)? (
                        <button className="btn btn-outline-success btn-block" type="submit">Edit Comment</button>
                    ): (
                        <button className="btn btn-outline-success btn-block" type="submit">Submit Comment</button>
                    )}
                </form>
            </div>
        )
    }
}

export default CommentForm