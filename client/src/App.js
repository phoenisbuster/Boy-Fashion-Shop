import './App.css';
import {useState} from 'react'
import Home from "./pages/Home"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"
import Register from "./pages/Register"
import Watch from "./components/Watch"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Newsletter from "./components/NewSletter"
import ChatbotIcon from './components/ChatbotIcon';
import {ProtectedRoute, IsUserRedirect} from './helpers/routes'
import {useSelector} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {

  const [showChatbox, setChatbot] = useState(false)
  const user = useSelector(state => state.user)

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/products/:category' exact>
              <ProductList />
            </Route>
            <Route path='/product/:id' exact>
              <Product />
            </Route>
            <IsUserRedirect path='/cart' user={user.currentUser} exact> 
              <Cart />
            </IsUserRedirect>
            <Route path='/login' user={user.currentUser} exact>
              <Login />
            </Route>
            <Route path='/register' user={user.currentUser} exact>
              <Register />
            </Route>
          </Switch>
        </Router>
        <Footer />
        {showChatbox && <ChatbotIcon />}
    </div>
  );
}

export default App;
