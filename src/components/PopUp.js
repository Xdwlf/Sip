import React, {Component} from 'react';
import PropTypes from 'prop-types'

class PopUp extends Component{
    static propTypes = {
        text: PropTypes.string,
        type: PropTypes.string
    }

    render(){
        const {type, text, removePopUp} = this.props
        return (
            <div>
                {text && 
                    <div id="notification" className={type}>
                        <span>
                            {text}
                        </span>
                        <span onClick={removePopUp}>
                            &#88;
                        </span>
                    </div>
                }
            </div>
        )
    }
}

export default PopUp