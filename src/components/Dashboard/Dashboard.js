import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center">
                    <h4 className="font-bold p-4 sm:text-2xl mb-4 text-1xl text-orange-600">Welcome to our dashboard</h4>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-30 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard/myProfile">MY PROFILE</Link></li>
                        { !admin && <li><a href="/dashboard/addAReview">ADD A REVIEW</a></li>}
                        {!admin && <li><a href="/dashboard/myOrders">MY ORDERS</a></li>}
                        { admin && <li><a href="/dashboard/users">MAKE ADMIN</a></li>}
                        { admin && <li><a href="/dashboard/manageAllOrders">MANAGE ALL ORDERS</a></li>}
                        { admin && <li><a href="/dashboard/addAProduct">ADD A PRODUCT</a></li>}
                        { admin && <li><a href="/dashboard/manageProducts">MANAGE PRODUCTS</a></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;