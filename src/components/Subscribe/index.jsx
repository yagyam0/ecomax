import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Subscribe = () => {

    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    }

    const handleSubscription = () => {
        setEmail('');
        toast.success('Subscribed to Newsletter Successfully!');
    }

    return (
        <section className="py-8 bg-slate-50">
            <div className="flex flex-col gap-6 items-center max-w-lg mx-auto text-center">
                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-xl text-gray-800">
                        Subscribe Now & Get <span className="text-yellow-400">20% Off</span>
                    </h3>
                    <span className="mt-2 text-sm text-gray-600 leading-relaxed">
                        Stay updated with our latest news, offers, and discounts. Sign up now!
                    </span>
                </div>
                <div className="flex w-full">
                    <input
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        type="email"
                        value={email}
                        name="email"
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                    />
                    <button
                        className="bg-yellow-400 px-6 py-3 text-white text-sm font-medium rounded-r-md hover:bg-yellow-500 transition-all duration-300" type="submit"
                        onClick={handleSubscription}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;