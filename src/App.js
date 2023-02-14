import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceProvider from './components/pages/serviceProvider'
import Home from './components/pages/home'
import Reviews from './components/pages/reviews'
import Signup from './components/pages/signup'
import Login from './components/pages/login'
import Footer from './components/Footer';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/home" component={ Home } />
          <Route path="/serviceProvider"  component={ServiceProvider} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Routes>
        <Home />
        {/* <AppContainer>
          <AccountBox />
        </AppContainer> */}
        <Footer />
      </Router>
  );
}

export default App;
