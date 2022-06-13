import {
  Featured,
  Footer,
  Header,
  Mail,
  Navbar,
  PropertyList,
  ReviewSection,
  UnderHeader,
} from '../components'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <UnderHeader />
      <div className="mt-14 flex flex-col items-center gap-8 ">
        <p className="text-6xl uppercase font-thin pb-2 border-b-2 my-24 border-violet-400">
          Best location to travel
        </p>
        <Featured />
        <p className="text-6xl uppercase font-thin">Choose by prefer type</p>
        <PropertyList />
        <p className="text-6xl uppercase font-thin">Home guest love</p>
        <ReviewSection />
        <Mail />
        <Footer />
      </div>
    </div>
  )
}

export default Homepage
