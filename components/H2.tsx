import React from 'react'
import HasChildren from '../lib/HasChildren'

export default (props: HasChildren) => (
  <h2
    style={{
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: 'inherit',
      margin: '0',
      padding: '0',
    }}
  >
    {props.children}
  </h2>
)
