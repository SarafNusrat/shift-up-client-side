import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import NotFound from './components/NotFound/NotFound';
import Purchase from './components/Purchase/Purchase';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div>
      <h2>hello</h2>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;


// heroku deploy 
// git barbar 
// react api env for client 
// server db connection 
// mongodbinstall, data entry 
// require auth for protected route
// image upload in imgbb
