import React from 'react';

const Contact = () => {
    return (
        <div className='m-5'>
            <h1 className='mb-7 text-5xl text-rose-500 font-semibold text-center'>CONTACT US</h1>

            <div className="hero min-h-screen bg-rose-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Contact Today!</h1>
                        <p className="py-6">To learn more about our services or to schedule a consultation, please contact us today. We would be honored to help you plan your next social event.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="password" placeholder="Phone..." className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error text-white">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; <h1>this is Contact</h1>