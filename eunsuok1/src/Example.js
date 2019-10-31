import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {observer} from "mobx-react";



const Example = observer(({log, state})  => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    console.log('Todo Example= Full name:' , {state});
    const { firstName, lastName } = state;
    //
    // if(firstName != undefined && lastName != undefined){
    console.log('Todo Example = Full name: ', `${firstName} ${lastName}`);

    return (
        <div>

            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>{firstName}</PopoverBody>
            </Popover>
        </div>
    );
})

export default Example;
