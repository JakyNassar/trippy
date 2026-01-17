import './Card.css'

export default function Card({title,description ,image}) {
  return (
    <div className='card'>
     <div className='imgCard'>
         <img src={image} alt="" />
     </div>
      <h4>{title}</h4>
      <p>{description}</p>

    </div>
  )
}
