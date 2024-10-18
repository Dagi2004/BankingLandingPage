import React from "react";
import online from "../assets/icon-onboarding.svg";
import budget from "../assets/icon-budgeting.svg";
import api from "../assets/icon-online.svg";
import onboard from "../assets/icon-onboarding.svg";

const Information = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-[#3b3a48] mb-6">
          Why choose Easybank?
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-8xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={online}
              alt="Online Banking"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#3b3a48] mb-2">
              Online Banking
            </h3>
            <p className="text-gray-600">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={budget}
              alt="Simple Budgeting"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#3b3a48] mb-2">
              Simple Budgeting
            </h3>
            <p className="text-gray-600">
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={onboard}
              alt="Fast Onboarding"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#3b3a48] mb-2">
              Fast Onboarding
            </h3>
            <p className="text-gray-600">
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>

          {/* Feature Item */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={api} alt="Open API" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#3b3a48] mb-2">
              Open API
            </h3>
            <p className="text-gray-600">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
