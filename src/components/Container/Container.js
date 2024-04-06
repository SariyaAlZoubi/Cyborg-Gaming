import './Container.css'
import { Home ,Profile} from '../../Pages/index'
import { Route ,Routes} from 'react-router-dom'
const Container = (props) => {
  return (
    <div className='container main-container'>
        {props.children}
    </div>
  )
}

export default Container