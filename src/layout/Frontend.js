import React from 'react'
import FrontendContent from 'src/components/FrontendContent'
import FrontendHeader from 'src/components/FrontendHeader'
import FrontendFooter from 'src/components/FrontendFooter'

const FrontEnd = () => {
  return (
    <div>
      
      <div className="wrapper d-flex flex-column min-vh-100 bg-white">
        <FrontendHeader />
        <div className="body flex-grow-1">
          <FrontendContent />
        </div>
        <FrontendFooter />
      </div>
    </div>
  )
}

export default FrontEnd
