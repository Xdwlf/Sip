import React, {Component} from 'react'

class ShowHidePackage extends Component{
    constructor(props){
        super(props)
        this.state={
            show: false
        }
    }
    toggleShow = () => {
        this.setState({show: !this.state.show})
    }
    render(){
        const {text, children, className, style} = this.props
        console.log(children)
        let show = (this.state.show)? (<div>{children}</div>) : null;
        return(
            <div className={className? className: null } style={style}>
                <div onClick={this.toggleShow}>
                    {(this.state.show) ? (<span>&#45; </span>): (<span>&#43; </span>)}
                    {text}
                </div>
                {show}

            </div>
        )
    }
}

export default ShowHidePackage