import './Hero.css'
import { PrimaryButton } from '../../components/index'

const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='sub-title'>Welcome to Cyborg</h6>
            <h4 className='hero-title'><em>Browse</em> Our Popular Games Here</h4>
            <PrimaryButton/>
        </div>
    </div>
  )
}

export default Hero