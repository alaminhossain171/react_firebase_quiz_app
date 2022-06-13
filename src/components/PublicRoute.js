import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js';
function PublicRoute({component:Component,...rest}) {
    const {currentUser}=useAuth();
  return (
    <>{currentUser?<Redirect to='/' />:<Route {...rest}>
        {(props)=><Component {...props} />}
        </Route>}</>
  )
}

export default PublicRoute