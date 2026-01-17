import { FaHouseUser } from "react-icons/fa"
import { FaCircleInfo } from "react-icons/fa6"
import { MdHomeRepairService } from "react-icons/md"
import { RiContactsBook3Fill } from "react-icons/ri"
import Header from "../Components/Header/Header"
import NavBar from "../Components/NavBar/NavBar"
import Hero from "../Components/Hero/Hero"
import Container from "../Components/Container/Container"
import PopularDestination from "../Components/PopularDestination/PopularDestination"
import Section from "../Components/Section/Section"


function About() {
             const items=[
          {
            icon: <FaHouseUser />,
            content:"Home",
            url:"/"
          },
           {
            icon: <FaCircleInfo />,
            content:"About",
            url:"/about"
          },
           {
            icon:<MdHomeRepairService /> ,
            content:"Service",
            url:"/services"
          },
           {
            icon:<RiContactsBook3Fill />,
            content:"Contact",
            url:"/contact"
          },
          
         ]
    
  return (
    <div>
     <Header>
       <NavBar logo="Trippy" items={items} btn="Sign Up"/>
        <Hero title="About" bgImage="./assets/aboutBg.jpg" />
    </Header>     
    <Section>
         <PopularDestination title="Our History" description="Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. rippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence." />
         <PopularDestination title="Our Mission" description="Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness." />
         <PopularDestination title="Our Vision" description="To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients." />
      
    </Section>
    </div>
  )
}

export default About
