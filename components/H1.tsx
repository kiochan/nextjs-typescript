import React from 'react'
import HasChildren from '../lib/HasChildren'

export default (props: HasChildren) => (
  <h1
    style={{
      display: 'inline-block',
      borderRight: '1px solid rgba(0, 0, 0,.3)',
      margin: '0',
      marginRight: '20px',
      padding: '10px 23px 10px 0',
      fontSize: '24px',
      fontWeight: 500,
      verticalAlign: 'top'
    }}
  >
    {props.children}
  </h1>
)
