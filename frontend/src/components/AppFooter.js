import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div className="ms-auto">
        <span className="me-1">Developed by</span>
        <a href="https://www.linkedin.com/in/ines-seara-silva/" target="_blank" rel="noopener noreferrer">
          Inês Silva 
        </a>
        <span className="me-1"> and</span>
        <a href="https://www.linkedin.com/in/dianaimbraga/" target="_blank" rel="noopener noreferrer">
          Diana Braga
        </a>
        <span className="me-1"> - (UICISA:E)</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
