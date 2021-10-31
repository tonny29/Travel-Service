import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AllOrder from './Components/AllOrder/AllOrder';
import Contactus from './Components/Contactus/Contactus';
import AuthProvider from './Components/Context/AuthProvider';
import Footer from './Components/Footer/Footer';

import Header from './Components/Header/Header';
import HeaderArea from './Components/HeaderArea/HeaderArea';
import MyOrder from './Components/MyOrder/MyOrder';
import Navibar from './Components/Navbar/Navibar';
import Notfound from './Components/Notfound/Notfound';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Login from './login/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Navibar></Navibar>
        <Switch>
          <Route exact path='/'>
            <Header></Header>
          </Route>
          <Route path='/home'>
            <Header></Header>
          </Route>
          <Route path='/home'>
            <HeaderArea></HeaderArea>
          </Route>
          <PrivateRoute path='/service/:_id'>
           <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path='/contact'>
            <Contactus></Contactus>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <PrivateRoute path='/AllOrder'>
            <AllOrder></AllOrder>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/MyOrder'>
            <MyOrder></MyOrder>
          </PrivateRoute>  
          <Route path="/*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
