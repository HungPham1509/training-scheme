import React from 'react';

import Header from '../Menu/Header/Header';
import HigherOrderItems from '../Menu/HigherOrderItems/HigherOrderItems';
import * as items from '../../constants/Items';
import classes from './Menu.css';

const menu = (props) => {
    const Items = [];
    for(let item in items.higherOrderItems) {
        Items.push({
            id: item,
            properties: items.higherOrderItems[item]
        });
    }
    const HOIs = Items.map(item => {
        return <HigherOrderItems key={item.id}
                                 label={item['properties'].label}
                                 icon={item['properties'].icon}
                                 link={item['properties'].url}/>
    })
    return (<nav className={classes.Menu}>
        <Header />
        <div>
            {HOIs}
        </div>
    </nav>)
}


export default menu;