const TestimonialCard = ({ quote, name, title, image }) => {
  return (
    <div className="testimonial-card">
      <blockquote className="testimonial-quote">
        <p>{quote}</p>
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