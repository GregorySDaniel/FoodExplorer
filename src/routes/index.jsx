import { BrowserRouter } from 'react-router-dom';

import { AdminRoutes } from './admin.routes';
import { CustomerRoutes } from './customer.routes'
import { AuthRoutes } from './auth.routes';
import { USER_ROLES } from '../utils/roles'

import { useAuth } from '../hooks/auth';

export function Routes(){
  const { user } = useAuth()

  function AcessRoute(){
    switch(user.role){
      case USER_ROLES.ADMIN:
        return <AdminRoutes/>
      case USER_ROLES.CUSTOMER:
        return <CustomerRoutes/>
      default:
        return <CustomerRoutes/>
    }
  }

  return(
    <BrowserRouter>
      {user ? <AcessRoute/> : <AuthRoutes/>}
    </BrowserRouter>
  )
}