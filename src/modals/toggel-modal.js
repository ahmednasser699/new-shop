import React from 'react';
import ReactDOM from 'react-dom';
import {Badge} from '@material-ui/core'
import {  FavoriteBorder, Person, ShoppingCart, Close } from '@material-ui/icons'

const ToggleModal = ({ toggle, cart, cartToggle }) => {
    const cartclicked = () => {
        toggle();
        cartToggle();
    }

    return ReactDOM.createPortal(
           <div className="ui dimmer modals visible active hamborgerbig" onClick={toggle}>
                <div className="ui standard modal visible active hamborgersmall" onClick={(e)=>e.stopPropagation()}>
                <div className="header">
                    <div className="close" style={{cursor:'pointer'}} onClick={toggle}>
                    <Close />
                 </div>
                    Menu
                </div>
                <div className="content">
                    <div className="wraper"><FavoriteBorder />
                        <h4>wishlist</h4>
                    </div>
                    <div className="wraper"><Person />
                        <h4>Profile</h4>
                    </div>
                    <div className="wraper" onClick={cartclicked}>
                        <Badge badgeContent={cart.length} >
                            <ShoppingCart />
                        </Badge>
                        <h4>cart</h4>
                    </div>
                </div>
                <div className="actions">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                </div>
            </div>,
           
            document.getElementById('modal1')
        )
}
export default ToggleModal
