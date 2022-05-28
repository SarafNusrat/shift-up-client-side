import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <h4 className="font-bold bg-gray-200 p-8 mt-8 text-center sm:text-3xl mb-4 text-2xl text-orange-600">DASHBOARD</h4>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                        <li><a href="/dashboard/addAReview">Add a Review</a></li>
                        <li><a href="/dashboard/myOrders">My Orders</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;