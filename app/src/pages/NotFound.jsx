import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(navigate('/'), 5000)
  }, [navigate]);

  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found.</h2>
    </div>
  )
}

export default NotFound