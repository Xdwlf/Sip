import React, {Component} from 'react'

class AuthForm extends Component{
    constructor(props){
        super(props)
        this.state= {
            email: "",
            username: "",
            password: "",
            profileImgUrl: ""
        }
    }

    handleChange= (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit= (e) =>{
        const {submitAction, history} = this.props
        e.preventDefault();
        submitAction(this.state).then(res=> 
            history.push('/')
            ).catch(err=> console.log(err));

    }

    render(){
        const {signUp, header, btnText} = this.props
        return (
            <section>
                <form id="auth-form" onSubmit={this.handleSubmit}>
                    <h4>{header}</h4>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" 
                                className="form-control"
                                id="email" 
                                name="email" 
                                value={this.state.email}
                                placeholder="Your Email"
                                onChange={this.handleChange}
                                />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" 
                                className="form-control"
                                id="password" 
                                name="password" 
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}                                
                                />
                        </div>
                    </div>

                    {signUp && 
                    <div>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" 
                                    id="username" 
                                    className="form-control"
                                    name="username" 
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="profileImgUrl" className="col-sm-2 col-form-label">Image Url</label>
                            <div className="col-sm-10">
                                <input type="text" 
                                    id="profileImgUrl" 
                                    className="form-control"
                                    name="profileImgUrl" 
                                    placeholder="Profile Image Url"
                                    value={this.state.profileImgUrl}
                                    onChange={this.handleChange}                                    
                                    />
                            </div>
                        </div>
                    </div>
                    }
                    <button className="btn btn-outline-success btn-block" type="submit">{btnText}</button>
                </form>
            </section>
        )
    }
}

export default AuthForm; 