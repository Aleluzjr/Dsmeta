import Header from "./components/Header"
import BoardCard from "./objects/BoardCard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer/>
      <Header />
      <BoardCard />
    </>

  )
}
export default App
