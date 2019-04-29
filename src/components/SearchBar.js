import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            query: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        const query = e.target.value
        this.setState({query})
    }

    render(){
        const {query} = this.state
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="form-group row align-items-center justify-content-center">
                    <div className="col-md-5">
                        <input className="form-control my-3" onChange={this.handleChange} type="text" value={query} />
                    </div>
                    <button className="btn btn-primary col-md-1" type="submit">Search</button>
                </div>
            </form>
        )
    }
}

export default SearchBar