import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("opacity-100 scale-100");

  // Sample food image backgrounds (placeholder gradients)
  const backgroundGradients = [
    "from-blue-400 to-purple-500",
    "from-green-400 to-cyan-500",
    "from-yellow-400 to-orange-500",
    "from-pink-400 to-red-500",
  ];

  // Food-related words for animated text
  const foodWords = ["Delicious", "Tasty", "Homemade", "Fresh", "Gourmet"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Change image with animation
  useEffect(() => {
    const imageInterval = setInterval(() => {
      // Start fade out animation
      setAnimationClass("opacity-0 scale-95");

      // After animation completes, change image and fade in
      setTimeout(() => {
        setImageIndex((prev) => (prev + 1) % backgroundGradients.length);
        setAnimationClass("opacity-100 scale-100");
      }, 500);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  // Animate food words
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % foodWords.length);
    }, 2000);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content with animated words */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="relative">
                <span
                  className="inline-block transition-all duration-700 transform"
                  style={{
                    animationName: "bounce",
                    animationDuration: "2s",
                    animationIterationCount: "infinite",
                  }}
                >
                  {foodWords[currentWordIndex]}
                </span>
              </span>
              <br />
              Recipes For Everyone
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-pulse">
              Find inspiration for your next meal, share your culinary
              creations, and connect with food lovers around the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Get Started
              </Link>
              <Link
                to="/recipes"
                className="px-6 py-3 bg-white text-green-500 font-medium rounded-lg border border-green-500 hover:bg-green-50 transition duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Browse Recipes
              </Link>
            </div>
          </div>

          {/* Animated Image/Gradient */}
          <div className="md:w-1/2 perspective-1000">
            <div
              className={`rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 ${animationClass} hover:rotate-2`}
              style={{
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <div
                className={`bg-gradient-to-br ${backgroundGradients[imageIndex]} aspect-video flex items-center justify-center relative`}
              >
                {/* Floating food icons */}
                <div
                  className="absolute top-1/4 left-1/4 text-white text-3xl"
                  style={{ animation: "float 8s ease-in-out infinite" }}
                >
                  🍕
                </div>
                <div
                  className="absolute bottom-1/4 right-1/4 text-white text-3xl"
                  style={{ animation: "float 7s ease-in-out infinite 1s" }}
                >
                  🍲
                </div>
                <div
                  className="absolute top-1/3 right-1/3 text-white text-3xl"
                  style={{ animation: "float 9s ease-in-out infinite 2s" }}
                >
                  🥗
                </div>
                <div
                  className="absolute bottom-1/3 left-1/3 text-white text-3xl"
                  style={{ animation: "float 5s ease-in-out infinite 1.5s" }}
                >
                  🍰
                </div>

                <div className="text-center p-6 z-10">
                  <span className="text-white text-2xl font-bold drop-shadow-lg">
                    Your Culinary Adventure
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add this to your index.css or directly in your <head> with a style tag
const animationStyles = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
.perspective-1000 {
  perspective: 1000px;
}
`;

// Add the styles to the document
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = animationStyles;
  document.head.appendChild(style);
}

export default Hero;
