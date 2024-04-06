import { SecondButton } from '../Button/Button'
import './GameLibrary.css'


const GameLibrary = (props) => {
  return (
    <>
        <div className='game-library-card'>
            <ul>
                <li><img src={props.image}/></li>
                <li><h4>{props.title}</h4> <span>{props.category}</span></li>
                <li><h4>Data Added</h4> <span>{props.date}</span></li>
                <li><h4>Hours Played</h4> <span>{props.hours}</span></li>
                <li><h4>Currently</h4> <span>{props.download}</span></li>
                <SecondButton/>
            </ul>
        </div>
    </>
  )
}

export default GameLibrary