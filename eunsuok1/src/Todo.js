import React from 'react'

import { observer } from 'mobx-react';

const Todo = observer(({log, state}) => {
    console.log('Todo = Full name:' , {state});
    const { firstName, lastName } = state;
    //
    // if(firstName != undefined && lastName != undefined){
     console.log('Todo = Full name: ', `${firstName} ${lastName}`);
    // }
    return (



        <div>11111{firstName}</div>
    )
})

export default Todo;
