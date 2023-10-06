import Navbar from './components/Navbar'
import Routing from './routes/Routing'
import Homeview from './views/Homeview'
import { BrowserRouter } from "react-router-dom"


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <main>
        <Routing />
      </main>
    </BrowserRouter>

  )
}

export default App
