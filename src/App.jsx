import { About, Banner, Contuct, Header, Nav, Service, Work } from "./component"



function App() {

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Header/>
        <Banner/>
        <Nav/>
        <About/>
        <Service/>
        <Work/>
        <Contuct/>
    </div>
  )
}

export default App
