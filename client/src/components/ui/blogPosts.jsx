import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function BlogSection() {
  const blogRefs = useRef([]);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animation for each blog post when it comes into view
          gsap.from(entry.target, {
            opacity: 0,
            scale: 0.5,
            rotate: 10,
            duration: 1.2,
            ease: "back.out(1.7)",
          });
          // Unobserve after animation to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1, // Trigger when 10% of the section is visible
    });

    // Observe each blog post
    blogRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup the observer on component unmount
    return () => {
      blogRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="mt-12 px-4 md:px-12 lg:px-24">
      <h2 className="text-center text-3xl font-bold text-primary mb-8">
        Our Recent Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Post 1 */}
        <div
          ref={(el) => (blogRefs.current[0] = el)}
          className="overflow-hidden rounded-md shadow-lg border bg-background transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-opacity-80 duration-300"
        >
          <img
            src="https://res.cloudinary.com/ddnp4px7u/image/upload/v1739546548/blog2_ofemhf.webp"
            alt="Blog Post 1"
            className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
          />
          <div className="p-6">
            <h3 className="font-bold text-primary text-xl mb-3">
              {/* Eco-Friendly Living Tips */}
              Fbric-products Living Tips
            </h3>
            <p className="text-gray-600 mb-4">
              Discover simple ways to live more sustainably and reduce your
              carbon footprint.
            </p>
            <a
              href="https://www.iiad.edu.in/the-circle/history-of-the-indian-textile-industry/#:~:text=History%20of%20the%20Indian%20Textile%20Industry%201%20Evolution,5%20Current%20Scenario%20...%206%20Future%20Prospects%20"
              className="text-secondary font-semibold hover:underline transition-colors duration-300"
            >
              Read more
            </a>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div
          ref={(el) => (blogRefs.current[1] = el)}
          className="overflow-hidden rounded-md shadow-lg border bg-background transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-opacity-80 duration-300"
        >
          <img
            src="https://res.cloudinary.com/ddnp4px7u/image/upload/v1739544966/blog1_b6tv6s.jpg"
            alt="Blog Post 2"
            className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
          />
          <div className="p-6">
            <h3 className="font-bold text-primary text-xl mb-3">
              Our Recent Mission
            </h3>
            <p className="text-gray-600 mb-4">
              Join us as we reflect on our latest environmental efforts and
              missions to make the world greener.
            </p>
            <a
              href="https://blog.treasurie.com/natural-fibers/"
              className="text-secondary font-semibold hover:underline transition-colors duration-300"
            >
              Read more
            </a>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div
          ref={(el) => (blogRefs.current[2] = el)}
          className="overflow-hidden rounded-md shadow-lg border bg-background transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-opacity-80 duration-300"
        >
          <img
            src="https://res.cloudinary.com/ddnp4px7u/image/upload/v1739547283/blog3_iomopk.jpg"
            alt="Blog Post 3"
            className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
          />
          <div className="p-6">
            <h3 className="font-bold text-primary text-xl mb-3">
              Plastic In This World
            </h3>
            <p className="text-gray-600 mb-4">
              Learn about plastic waste in this whole world and how they ruin
              the environment.
            </p>
            <a
              href="https://slowfashion.global/2024/11/06/synthetic-fabrics-and-the-environment-time-for-a-change/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-semibold hover:underline transition-colors duration-300"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
