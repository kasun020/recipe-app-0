import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Discover & Share Amazing Recipes
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find inspiration for your next meal, share your culinary
              creations, and connect with food lovers around the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/recipes"
                className="px-6 py-3 bg-white text-green-500 font-medium rounded-lg border border-green-500 hover:bg-green-50 transition duration-300"
              >
                Browse Recipes
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              
              {<img 
                src="/images/hero-food.jpg" 
                alt="Delicious food on a table" 
                className="w-full h-auto"
              />}

              {/* Placeholder if you don't have an image yet */}
              {/* <div className="bg-gradient-to-br from-green-300 to-green-500 aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="text-white text-xl font-semibold">
                    Your Culinary Journey Starts Here
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
