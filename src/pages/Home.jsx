  import { FaFacebookF, FaHouseUser, FaInstagram, FaTwitter } from "react-icons/fa"
import Card from "../Components/Card/Card"
import Container from "../Components/Container/Container"
import Header from "../Components/Header/Header"
import Hero from "../Components/Hero/Hero"
import ListFooter from "../Components/ListFooter/ListFooter"
import NavBar from "../Components/NavBar/NavBar"
import PopularDestination from "../Components/PopularDestination/PopularDestination"
import Section from "../Components/Section/Section"
import SectionTitle from "../Components/sectionTitle/sectionTitle"
import { BsBehance } from "react-icons/bs"
import { FaCircleInfo } from "react-icons/fa6"
import { MdHomeRepairService } from "react-icons/md"
import Footer from "../Components/Footer/Footer"
import TitleFooter from "../Components/TitleFooter/TitleFooter"
import { RiContactsBook3Fill } from "react-icons/ri"


function Home() {
    

  return (
    
    <div>
     <Header>
        <Hero title="Your Journey Your Story" description="Choose Your Favourite Destination" bgImage="./assets/heroImage.jpg" btn="Travel Now"/>
    </Header>
    <main>
      <Section>
        <SectionTitle title="Popular Destinations" subTitle="Tours dive you the opportunity to see a lot, within a time frame."/>
        <PopularDestination title="Mt. Daguldul, Batangas" description="One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!" firstImage="./assets/1.jpg" secondImage="./assets/2.jpg"/>
        <PopularDestination title="Taal Volcano, Batangas" description="A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total.!" firstImage="./assets/3.jpg" secondImage="./assets/4.jpg" reverse={true}/>

      </Section>
      <Section>
        <SectionTitle title="Recent Trips" subTitle="You can discover unique destination using Google Maps."/>
        <Container>
       <Card image="./assets/1.jpg" title="Trip in Indonesia" description="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"/>
       <Card image="./assets/2.jpg" title="Trip in Malaysia" description="Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"/>
       <Card image="./assets/5.jpg" title="Trip in France" description="France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."/>

        </Container>
      </Section>
    
     
    </main>

    </div>
   
  )
}

export default Home
