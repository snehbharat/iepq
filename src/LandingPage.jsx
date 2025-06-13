import React from "react";

const LandingPage = () => {
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
    <div className="bg-art-cream text-art-deep overflow-x-hidden">
      {/* Background Shapes */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute w-72 h-72 bg-art-coral rounded-full top-1/4 -left-24 animate-float" />
        <div className="absolute w-56 h-56 bg-art-gold rounded-full bottom-1/4 -right-16 animate-float delay-200" />
      </div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 py-6 px-6 md:px-12 bg-art-cream/80 backdrop-blur-md shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif font-bold">
            IEPQ
            <span className="text-art-coral ml-1">
              International Entity for Peace & Quality
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-art-coral transition">
              Gallery
            </a>
            <a href="#" className="hover:text-art-coral transition">
              Artists
            </a>
            <a href="#" className="hover:text-art-coral transition">
              Events
            </a>
            <a href="#" className="hover:text-art-coral transition">
              About
            </a>
            <a
              href="#"
              onClick={handleDonate}
              className="text-art-coral hover:text-red-500 transition"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="min-h-screen pt-24 pb-16 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="lg:w-1/2 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight mb-6">
            <span className="block">Charity,</span>
            <span className="block text-art-coral">linked by love.</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Discover a world of giving where compassion meets impact.
            International Entity for Peace & Quality(IEPQ) connects generous
            hearts with meaningful causes, empowering change—one act of kindness
            at a time.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-art-coral text-white rounded-lg hover:bg-red-500 transition hover:-translate-y-1">
              Browse Our Work
            </button>
            <button className="px-8 py-4 border border-gray-300 text-art-deep rounded-lg hover:bg-white transition">
              View Stories
            </button>
          </div>
          <div className="mt-12 flex space-x-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-art-coral">150+</span>
              <span className="text-gray-600">Supporters</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-art-coral">30</span>
              <span className="text-gray-600">Exhibitions</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-art-coral">24/7</span>
              <span className="text-gray-600">Online Viewing</span>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="lg:w-1/2 relative animate-slide-up delay-200">
          <div className="relative rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src="/images/img-1.jpg"
              alt="Abstract Art"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          {/* Floating Tags */}
          <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow w-40 animate-slide-up delay-300">
            <h4 className="font-bold text-art-deep">Original Work</h4>
            <p className="text-sm text-gray-600">Signed by Artist</p>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow w-40 animate-slide-up delay-400">
            <h4 className="font-bold text-art-deep">Limited Editions</h4>
            <p className="text-sm text-gray-600">Only 50 Prints</p>
          </div>
        </div>
      </section>
      <section className="min-h-screen pt-24 pb-12 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            <span className="block">Be the reason,</span>
            <span className="block text-art-coral">
              someone believes in God.
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Turn compassion into action. Our platform brings together people who
            care with causes that matter—making it easy to give, connect, and
            create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-art-plum text-white rounded-lg hover:bg-art-plum/90 transition-all duration-300 transform hover:-translate-y-1">
              Shop Artworks
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-all duration-300">
              Browse Styles
            </button>
          </div>
          <div className="mt-12 flex items-center space-x-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-art-plum">30+</span>
              <span className="text-gray-700">Featured Artists</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-art-plum">200+</span>
              <span className="text-gray-700">Supporters</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-art-plum">Global</span>
              <span className="text-gray-700">Artist Network</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative animate-slide-up delay-200">
          <div className="relative rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              className="w-full h-auto object-cover"
              src="/images/img-2.jpg"
              alt="Modern artwork display"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
          <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-md w-40 animate-slide-up delay-300">
            <h4 className="font-bold text-art-ink">Original</h4>
            <p className="text-sm text-gray-600">One-of-a-kind pieces</p>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md w-40 animate-slide-up delay-400">
            <h4 className="font-bold text-art-ink">Expressive</h4>
            <p className="text-sm text-gray-600">Curated for emotion</p>
          </div>
        </div>
      </section>
      {/* Featured Artists Section */}
      <section className="py-20 px-6 md:px-12 bg-art-blush text-art-ink">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Featured Artists
          </h2>
          <p className="text-lg text-art-ink/80">
            Art with heart. Talent that transforms lives.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/img-3.jpg"
              alt="Artist portrait"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">The Lightweavers</h3>
              <p className="text-sm text-gray-600">
                Through vibrant murals and shared stories, we bring light to
                underserved communities and help youth see their world in color.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/img-4.jpg"
              alt="Artist portrait"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Studio Echo</h3>
              <p className="text-sm text-gray-600">
                We create art that echoes the unheard—raising awareness for
                mental health through powerful, healing visuals.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/img-5.jpg"
              alt="Artist portrait"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Ava Thompson</h3>
              <p className="text-sm text-gray-600">
                From canvas to cause, our collective stands for the planet—using
                creativity to inspire environmental change and action.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Press Mentions */}
      <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="text-center text-gray-500 mb-8">Helping Hand</p>
        <div className="flex flex-wrap justify-center gap-1 text-xl font-serif italic text-art-deep">
          <span className="block">Give a little,</span>
          <span className="block text-art-coral">Help a lot.</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
