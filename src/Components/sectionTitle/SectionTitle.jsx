import './SectionTitle.css'
export default function SectionTitle({title,subTitle}) {
  return (
    <div className='title'>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  )
}
