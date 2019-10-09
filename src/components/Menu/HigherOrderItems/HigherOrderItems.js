import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Item from './Item/Item';
import classes from './HigherOrderItems.css';

class HigherOrderItems extends Component {
    render() {
        const items = this.props.items;
        let listItems = null;
        if(items) {
            listItems = items.map(item => {
                if(this.props.toggleOn) {
                     return <Item key={item.label} label={item.label} link={item.url} />
                }
                else {
                    return;
                }
            })
        }
        let list = null;
        let toggleIcon = null;
        if(this.props.label!=='Thống Kê') {
            list = <ul className={classes.itemsContainer}>
                        {listItems}
                   </ul>
            if(!this.props.toggleOn) {
                toggleIcon = <a className={classes.Toggle} >
                                <FontAwesomeIcon icon={faChevronDown} rotation={270} style={{fontSize: '15px'}}/>
                             </a>
            }
            else {
                toggleIcon = <a className={classes.Toggle}>
                                <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '15px'}}/>
                             </a>
            }
        }
        
        let higherOrderItem = null;
        if(this.props.label === 'Thống Kê') {
            higherOrderItem = <NavLink to='/statistics' className={classes.container}>
                                <div className={classes.Label}>
                                    <img src={this.props.icon} alt='icon'/>    
                                    <div>{this.props.label}</div>
                                </div>
                                {toggleIcon}
                              </NavLink>
           
        }
        else {
            higherOrderItem = <div className={classes.container} onClick={this.props.clicked}>
                                <div className={classes.Label}>
                                    <img src={this.props.icon} alt='icon'/>    
                                    <div>{this.props.label}</div>
                                </div>
                                {toggleIcon}
                              </div>
        }
        
        return (
            <li>
                {higherOrderItem}
                {list}
            </li>
        )
    }
    
}

export default HigherOrderItems;