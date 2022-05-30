import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import AddAProduct from './components/Dashboard/AddAProduct';
import AddAReview from './components/Dashboard/AddAReview';
import Dashboard from './components/Dashboard/Dashboard';
import ManageProducts from './components/Dashboard/ManageProducts';
import MyOrders from './components/Dashboard/MyOrders';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import MyProfile from './components/Dashboard/MyProfile';
import Users from './components/Dashboard/Users';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import NotFound from './components/NotFound/NotFound';
import Payment from './components/Payment/Payment';
import Purchase from './components/Purchase/Purchase';
import Registration from './components/Registration/Registration';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import RequireAdmin from './components/Login/RequireAdmin';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/payment" element={<Payment></Payment>}></Route>


        <Route path="/parts/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
             <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
             <Route path="addAReview" element={<AddAReview></AddAReview>}></Route>
             <Route path="myOrders" element={<MyOrders></MyOrders>}></Route> 
             <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route> 
             <Route path="manageAllOrders" element={<ManageAllOrders></ManageAllOrders>}></Route> 
             <Route path="addAProduct" element={<AddAProduct></AddAProduct>}></Route> 
             <Route path="manageProducts" element={<ManageProducts></ManageProducts>}></Route> 

        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;


