import React from 'react'
import{
    CFooter,
    CLink,
}from '@coreui/react'

const FrontendFooter = () => {
    return (
        <CFooter>
  <div>
    <CLink href="#">Web Project</CLink>
    <span>&copy; 2021 creativeLabs.</span>
  </div>
  <div>
    <span>Powered by</span>
    <CLink href="#">Web Project</CLink>
  </div>
</CFooter>
        )
    }
    
    export default FrontendFooter