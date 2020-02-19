import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';


export default class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, }}
        to={{ opacity: 1, }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Componets 1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae placeat magni dolores, fugiat, in accusamus necessitatibus ab alias quibusdam harum fuga officiis vitae modi animi tempore! Itaque maxime voluptas cupiditate.</p>
            </div>
          </div>
        )}

      </Spring>
    )
  }
}

const c2Style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem'
}