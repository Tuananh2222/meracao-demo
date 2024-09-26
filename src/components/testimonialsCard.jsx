import { useEffect, useState } from "react";

const TestimonialCard = ({ quote, name, title, image, onToggleExpand, isActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState(550);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1600) {
        setMaxHeight(650);
      } else {
        setMaxHeight(550);
      }
    };

    // Call initially to set maxHeight based on current screen size
    handleResize();

    // Listen for screen resizing
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const toggleReadMore = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
    onToggleExpand(!isExpanded);
  };

  return (
    <div
      className="testimonial-card"
      style={{ maxHeight: isExpanded ? 'none' : `${maxHeight}px` }}
    >
      <blockquote className="testimonial-quote">
        <p>
          {isExpanded ? quote : `${quote.substring(0, 380)}...`}
          {quote.length > 380 && isActive && (
            <span className="read-more" onClick={toggleReadMore}>
              {isExpanded ? " Show less" : " Read more"}
            </span>
          )}
        </p>
      </blockquote>
      <div className="testimonial-footer">
        <img className="testimonial-image" src={image} alt={name} />
        <div className="testimonial-details">
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
