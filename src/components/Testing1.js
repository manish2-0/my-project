import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const Testing1 = () => {
  const location = useLocation();
  const {user} = location.state;
  return (
    <div>Testing1</div>
  )
}

export default Testing1