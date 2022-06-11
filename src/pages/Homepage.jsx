import { Featured, Header, Navbar, UnderHeader } from '../components'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <UnderHeader />
      <div className="mt-14 flex flex-col items-center gap-8 ">
        <Featured />
      </div>
    </div>
  )
}

export default Homepage
