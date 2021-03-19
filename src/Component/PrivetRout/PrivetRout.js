import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { contextSher } from '../../App';

const PrivetRout = ({ children, ...rest }) => {
    const [logInfo, setLogInfo] = useContext(contextSher)
    return (
        <Route
      {...rest}
      render={({ location }) =>
       logInfo.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/LogIn",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivetRout;