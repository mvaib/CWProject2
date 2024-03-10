
import './App.css'
import Footer from './component/Footer'
import Middle from './component/Middle'
import Nav from './component/Nav'
import { Routes, Route } from 'react-router-dom'
import SignIn from './component/SignIn'
import CreateAccount from './component/CreateAccount'
import { useContext } from 'react'
import { Context } from './Context'
import Saving from './component/Saving'
import CartItemCard from './component/CartItemCard'


function App({visible}) {
  const {signInBtn,setSignInBtn} = useContext(Context)
  const {createAccount,setCreateAccount} = useContext(Context)

  return (
    <>
      {signInBtn ? <Routes>
        <Route path="/" element={<SignIn/>}/>
      </Routes> : createAccount ? <Routes>
        <Route path='/' element={<CreateAccount/>}/>
      </Routes> : <>
        <Nav/>
        <Middle/>
        <Footer/>
      </>
        }
    </>
  )
}

export default App
