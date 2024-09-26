import { useState } from "react";

const TestimonialCard = ({ quote, name, title, image, onToggleExpand, isActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxHeight = 550;

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