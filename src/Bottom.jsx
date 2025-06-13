import React from "react";

const Bottom = () => {
  const handleDonate = () => {
    const options = {
      key: "rzp_test_2eyDsrT3RRQSLQ",
      amount: 50000,
      currency: "INR",
      name: "BetterBlues",
      description: "Donation",
      image: "https://via.placeholder.com/100",
      handler: function (response) {
        alert("Payment successful: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Donor Name",
        email: "donor@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#00b894",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <div>
      <footer id="footerSection" className="bg-gray-900 text-white py-10 px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-semibold">
                <span className="text-art-coral">
                  International Entity for Peace & Quality
                </span>
              </h2>
            </div>
            <p className="text-center lg:text-left max-w-md text-gray-300 text-sm">
              HeartChain connects compassionate donors with life-changing
              causes. We believe in turning generosity into lasting impact—one
              act of kindness at a time.
            </p>
            <div className="flex gap-4 text-xl text-white">
              <a href="#">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="mailto:contact@kindbridge.org">
                <i className="fa fa-envelope" />
              </a>
              <a href="tel:+1800123456">
                <i className="fa fa-phone" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Work */}
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-2">Our Work</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>Disaster Relief</li>
              <li>Child Education</li>
              <li>Clean Water Access</li>
              <li>Healthcare Support</li>
              <li>Arts & Empowerment</li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-2">Get Involved</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>
                <a
                  href="#donate"
                  className="hover:underline"
                  onClick={handleDonate}
                >
                  Donate
                </a>
              </li>
              <li>
                <a href="#volunteer" className="hover:underline">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#campaigns" className="hover:underline">
                  Fundraising Campaigns
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:underline">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="#newsletter" className="hover:underline">
                  Join Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-300 text-sm max-w-xs">
              IEPQ Foundation
              <br />
              123 Hope Street, Powai, Mumbai
              <br />
              Email: contact@iepq.com
              <br />
              Phone: +1 800 123 456
            </p>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 IEPQ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Bottom;
