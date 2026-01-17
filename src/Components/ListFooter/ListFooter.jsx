import './ListFooter.css'

function ListFooter({title,items}) {
  return (
    <div className='listFooter'>
        <h4>{title}</h4>
    <ul>
     {items?.map((item,index)=>{
        return <li key={index}> {item}</li>
     })}
     
      
    </ul>
    </div>
  )
}

export default ListFooter
