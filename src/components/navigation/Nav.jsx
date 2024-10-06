import React from 'react'

export default function Nav(props) {
  return (
    <div>
      <ul>
        <li>{props.pirveliXazi}</li>
        <li>{props.meoreXazi}</li>
        <li>{props.mesameXazi}</li>
        <li>{props.meotxeXazi}</li>
      </ul>
    </div>
  )
}
