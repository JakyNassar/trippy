import './TitleFooter.css'

export default function TitleFooter({title,description, links}) {
  return (
    <div className='titleFooter'>
    <div className='txtFooter'>
          <h3>{title}</h3>
      <p>{description}</p>
    </div>
      <ul>
        {links?.map((link,index)=>{
            return <li key={index}> {link.icon}</li>

        })
        }
      </ul>
    </div>
  )
}
