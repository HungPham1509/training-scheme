import React, {Component} from 'react';
import Header from '../Menu/Header/Header';
import HigherOrderItems from '../Menu/HigherOrderItems/HigherOrderItems';
import classes from './Menu.css';
import * as items from '../../constants/Items';


class Menu extends Component {
    state = {
        higherOrderItems: {
            statistic: {
                ...items.statistic,
                toggleOn: false
            },
            trainingProgram: {
                ...items.trainingProgram,
                toggleOn: false,
            },
            course: {
                ...items.course,
                toggleOn: false,
            },
            learningOutcome: {
                ...items.learningOutcome,
                toggleOn: false,
            },
            institute: {
                ...items.institute,
                toggleOn: false,
            },
            account: {
                ...items.account,
                toggleOn: false,
            },
            others: {
                ...items.others,
                toggleOn: false,
            }
        }
    }

    ToggleItemHandler = (itemLabel) => {
        const temp = {
            ...this.state.higherOrderItems
        };
        for(let item in temp) {
            let tempToggle = temp[item].toggleOn;
            if(temp[item].label === itemLabel) {
                temp[item].toggleOn = !tempToggle;
            }
            else {
                temp[item].toggleOn = false
            }
        }
        this.setState({
            higherOrderItems: temp
        })
    }

    render() {
        const Items = [];
        for(let item in this.state.higherOrderItems) {
            Items.push({
                id: item,
                properties: this.state.higherOrderItems[item]
            });
        }
        const HOIs = Items.map(item => {
            return <HigherOrderItems key={item.id}
                                    label={item['properties'].label}
                                    icon={item['properties'].icon}
                                    items={item['properties'].items}
                                    toggleOn={item['properties'].toggleOn}
                                    clicked = {() => this.ToggleItemHandler(item['properties'].label)} />
        })
        return (<nav className={classes.Menu}>
            <Header />
            <ul>
                {HOIs}
            </ul>
        </nav>)
    }
    
}


export default Menu;