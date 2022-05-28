import React from 'react';

const MyProfile = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100 hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email Address</span>
                                </label>
                                <input type="text" name="education" placeholder="Enter your education" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="number" name="location" placeholder="Enter your location" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Linkedin Profile</span>
                                </label>
                                <input type="text" name="description" placeholder="post the url" className="input input-bordered" required/>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-warning">ADD MY PROFILE</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default MyProfile;