import './Card.css'
import { AiOutlineStar,  AiOutlineDownload} from "react-icons/ai";

const Card = (props) => {
  return (
    <div className='most-popular-item'>
                <div className='card-wrapper'>
                    <img className="most-popular-item-image" src={props.image}/>
                    <div className='most-popular-item-content'>
                        <h4 className='most-popular-item-title'>
                            {props.title} <br/>
                            <span>{props.category}</span>
                        </h4>
                        <ul>
                            <li><span className='span-icon'><AiOutlineStar/></span> <span>{props.rate}</span></li>
                            <li><span className='span-icon-download'><AiOutlineDownload/></span> <span>{props.download}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
  )
}

export default Card