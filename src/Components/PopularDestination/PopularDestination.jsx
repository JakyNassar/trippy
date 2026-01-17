import './PopularDestination.css'

export default function PopularDestination({title,description,firstImage,secondImage,reverse}) {
  return (
    <div className={`popularDestinations ${reverse?"reverse":""}`}>
    <div className='txt'>
          <h2> {title}</h2>
          <p>{description}</p>
    </div>
    <div className='images'>
      {firstImage?  <img src={firstImage} alt="" />:""}
      {secondImage? <img src={secondImage} alt="" />:""}
     
     
    </div>
    </div>
  )
}
