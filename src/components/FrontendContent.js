import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import route_frontend from 'src/route_frontend'

const FrontendContent = () => {
  return (
    <div>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {route_frontend.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
          <Redirect from="/" to="/home" />
        </Switch>
      </Suspense>
    </div>
  )
}

export default React.memo(FrontendContent)
