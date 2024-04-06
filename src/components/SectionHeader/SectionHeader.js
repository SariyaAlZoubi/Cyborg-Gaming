import './SectionHeader.css'

const SectionHeader = (props) => {
  return (
    <div className='section-header'>
            <h4 className='most-popular-header-title'>{props.children}</h4>
        </div>
  )
}

export default SectionHeader