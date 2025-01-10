import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import BgImage from "./assets/bg.png"
import Equipments from "./components/Equipments/Equipments"
import Banner from "./components/Banner/Banner"
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import Tab from "./components/Tab/Tab"
import Testimonials from "./components/Testimonials/Testimonials"
import Discount from "./components/Banner/Discount"

const BannerData = {
  image: Img1,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
  link: "#",
};
const Banner2Data = {
  image: Img2,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
  link: "#",
};


const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: 'fixed'

}

function App() {

  return (
    <div className='overflow-x-hidden'>
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments />
      <Banner {...BannerData} />
      <Tab/>
      <Banner {...Banner2Data}/>
      <Testimonials/>
      <Discount/>
    </div>
  )
}

export default App
