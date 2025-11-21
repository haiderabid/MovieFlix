import Header from './componants/Header'
import { Outlet } from 'react-router'

export default function Root() {
  return (
    <div>
        <div>
             {/* <Header/>  */}
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
