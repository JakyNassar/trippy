import { Link, Outlet } from "react-router-dom"



function Auth() {
  return (
    <div>
        hello from auth
      <Link to="/auth/login"> login</Link>
      <Link to="/auth/signup"> sign Up</Link>
      <Outlet/>
    </div>
  )
}

export default Auth
