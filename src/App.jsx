import './App.css'
import Crpost from './components/Crpost'
import Footer from './components/Footer'
import Header from './components/Header'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import PostListProvider from "./store/AppData";

const App = () => {

  const [tab, setTab]=useState("Home")

  return (
    <PostListProvider>
      <div className='app'>
        <Sidebar tab={tab} settab={setTab}/>
        <div className='main'>
          <Header />
          <div className="content">
            {tab === 'Home'? (<Feed/>):( <Crpost/>)}    
          </div>    
          <Footer />
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
