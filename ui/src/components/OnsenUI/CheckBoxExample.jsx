import React from 'react'
import {Checkbox, List, ListItem} from 'react-onsenui';
export default function CheckBoxExample() {
  return (
   <List>
    <ListItem>
        <label class="left">
            <Checkbox input-id="check-1"></Checkbox>
        </label>
        <label for="check-1" class="center">
            Apple
        </label>
    </ListItem>
    <ListItem>
        <label class="left">
            <Checkbox input-id="check-1" checked></Checkbox>
        </label>
        <label class="center" from="check-2">            
            Banana
        </label>
    </ListItem>
   </List>
  )
}
