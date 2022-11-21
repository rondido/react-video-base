import React from 'react'
import PropTypes from 'prop-types';

function PropComponent(props){
    return <div>{props.name}</div>
}
PropComponent.defaultProps = {
    name:"park",
    age:7,
    func:10
}

PropComponent.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number.isRequired,
    func: function(props, propName, componentName) {
        if (!/7|8/.test(props[propName])) {
          return new Error(
            'Invalid prop `' + propName + '(' + props[propName] + ')` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
    },
}

export default function Component() {
  return (
    <div>
        <PropComponent/>
    </div>
  )
}
