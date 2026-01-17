import { Outlet } from "react-router-dom"
import NavBar from "../../Components/NavBar/NavBar"
import Footer from "../../Components/Footer/Footer"
import Container from "../../Components/Container/Container"
import ListFooter from "../../Components/ListFooter/ListFooter"
import { FaFacebookF, FaHouseUser, FaInstagram, FaTwitter } from "react-icons/fa"
import { BsBehance } from "react-icons/bs"
import { RiContactsBook3Fill } from "react-icons/ri"
import { MdHomeRepairService } from "react-icons/md"
import { FaCircleInfo } from "react-icons/fa6"
import TitleFooter from "../../Components/TitleFooter/TitleFooter"


function Root() {
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
           const links=[
  {
    icon:<FaFacebookF />,
  },
   {
    icon: <FaInstagram />,
  },
   {
    icon: <BsBehance />,
  },
   {
    icon: <FaTwitter />,
  }
 ]
  return (
    <div>
         <NavBar logo="Trippy" items={items} btn="Sign Up"/>
           <Outlet/>
            <Footer>
        <Container>
            <TitleFooter title="Trippy" description="Choose your favourite destination." links={links}/>
        </Container>
        <Container>
          <ListFooter title="Project" items={["Changelog","Status","License","All Versions"]}/>
          <ListFooter title="Community" items={["Github","Issues","Project","Twitter"]}/>
          <ListFooter title="Help" items={["Support","Troubleshooting","Contact us"]}/>
          <ListFooter title="Others" items={["Terms of Service","Privacy Policy","License"]}/>
        </Container>
      </Footer>
    
    </div>
  )
}

export default Root
