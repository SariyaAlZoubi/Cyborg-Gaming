import './GamingLibrary.css'
import { Card , SectionHeader , SectionWrapper ,GameLibrary } from '../../components/index'
import { GameLibraryData } from '../../Data/GamingLibrary'

const GamingLibrary = () => {
  const cards = GameLibraryData.map(card =>  <GameLibrary key={card.id} image={card.image}    title={card.title}   category={card.category}      date={card.date_added}    hours= {card.hours_played}  download={card.download}/>)

  return (
    <SectionWrapper>
        <SectionHeader>GamingLibrary</SectionHeader>
        <div className='game-library-items'>
            {cards}
        </div>
    </SectionWrapper>
  )

}

export default GamingLibrary