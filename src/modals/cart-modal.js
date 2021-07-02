import React from 'react';
import ReactDOM from 'react-dom';

import {  Close, DeleteForever } from '@material-ui/icons'

const CartModal = ({cartToggle, cart, del, total}) => {
    return ReactDOM.createPortal(
          
        <div className="ui standard modal visible active cartsmall" onClick={(e) => e.stopPropagation()}>
           
            <div className="header">
                <div className="close" style={{cursor:'pointer'}} onClick={cartToggle}>
                    <Close />
                 </div>
                Menu
            </div>
            <div className="content">
                <div className="ui relaxed divided list" style={{width:'100%', overflowY:"auto"}}>
                    {cart.map(item => (
                    <div key={Math.random()*1000} className="item" style={{display:'flex', width:'100%'}}>
                            <img className="ui avatar image" src={item.images['black']} alt="item" style={{height:'4rem', width:'4rem', borderRadius:'unset'}}/>
                        <div className="content" style={{width:'100%'}}>
                                <div className="header">{ item.title}</div>
                                <div style={{display:'flex', justifyContent:"space-between"}}>
                                    <span style={{ color: 'blue', fontWeight: '700' }}>{item.price}$</span>
                                    <div style={{textAlign:'center', opacity:".8"}}>
                                        quantity
                                        <div>{ item.quantity}</div>

                                    </div>
                                    <span onClick={()=>del(item)} style={{color:'#c12e2e', cursor:'pointer'}}><DeleteForever /></span>
                                </div>
                            </div>
                            
                    </div>
                    ))}
                    <div style={{textAlign:'center', color:'#ceae6d', fontWeight:'700', fontSize:'16px'}}>SUB TOTAL: {total()}$</div>
                </div>
                   
            </div>
              
        </div>
            ,
           
            document.getElementById('modal2')
        )
}
export default CartModal