import React, {Component} from "react"

class SideBarItem extends Component{
    fetchDrinks= () => {
        const {searchType, searchData, fetchDrinks} = this.props
        fetchDrinks(searchType, searchData)
    }
    render(){
        const {text, hoverMenu} = this.props
        return(
            <div onClick={this.fetchDrinks}>
                {text}
            </div>
        )
    }
}

export default SideBarItem