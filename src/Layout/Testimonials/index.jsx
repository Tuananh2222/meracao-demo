import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "@/components/testimonialsCard";
import "./testimonials.css";
import avtTestimonials1 from "../../assets/img/avatar-testimonials/1.png";
import avtTestimonials2 from "../../assets/img/avatar-testimonials/2.png";
import avtTestimonials3 from "../../assets/img/avatar-testimonials/3.png";
import avtTestimonials4 from "../../assets/img/avatar-testimonials/4.png";
import avtTestimonials5 from "../../assets/img/avatar-testimonials/5.png";

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote:
        "Chị Phương mang đến cho mình cảm giác vừa điềm tĩnh vừa kiên định, chị giúp mình xây dựng một niềm tin vững chắc rằng mình cũng có thể làm được. Chị từng bước hướng dẫn mình, từ những điều nhỏ nhặt nhất, với sự nghiêm khắc nhưng luôn xuất phát từ tình thương chân thành. Giờ đây, mình đã có thể tự tin bước đi trên con đường của chính mình, từ việc dám nói, dám viết, đến việc xây dựng kênh cá nhân và định hướng lại nghề nghiệp. Mình đã có kênh riêng, con đường riêng, và những thành tựu riêng. Đây là điều mà trước đây mình chưa từng dám mơ rằng mình có thể làm được.",
      name: "Duy Khang",
      title: "Freelance Assistant | Content Creator",
      image: avtTestimonials1,
    },
    {
      quote:
        "Được làm việc với chị Phương thực sự giúp mình thay đổi hoàn toàn tư duy về việc tài liệu hóa và hệ thống hóa. Mình nhận ra rằng điều này không chỉ đơn thuần là việc sắp xếp gọn gàng, mà còn đòi hỏi sự tư duy logic và chủ động “làm vì mình” trong việc tổ chức, cũng như bền bỉ duy trì theo thời gian. Mọi thứ trong cuộc sống, từ những câu chuyện hàng ngày đến các file trên điện thoại và máy tính, đều nên được tài liệu hóa một cách cẩn thận, vì chúng sẽ mang lại giá trị lớn trong tương lai. Ban đầu, việc duy trì thói quen này thực sự không dễ dàng, nhưng mình đã dần phát triển thói quen tài liệu hóa trong công việc, kể cả khi sếp chưa yêu cầu. Điều này không chỉ giúp mình quản lý công việc hiệu quả hơn mà còn giúp mình recap lại những suy nghĩ và trải nghiệm của bản thân. Qua đó, mình có thể thấy được sự thay đổi của mình theo thời gian, đồng thời lắng nghe và thấu hiểu chính mình một cách sâu sắc hơn.",
      name: "Thanh Ngà",
      title: "Nhân viên văn phòng",
      image: avtTestimonials2,
    },
    {
      quote:
        "Khi tham gia phỏng vấn cho vị trí Support Case Manager tại một công ty nước ngoài, mình đã được nhận vào dù chưa có nhiều kinh nghiệm trong lĩnh vực này. Điều khiến mình nổi bật và được chọn chính là nhờ vào khả năng tài liệu hóa và hệ thống hóa công việc. Trong buổi phỏng vấn, khi HR hỏi về những kỹ năng từ công việc hiện tại có thể hỗ trợ cho vai trò mới, mình đã trình bày rõ ràng cách mình đã áp dụng tài liệu hóa và hệ thống hóa để đảm nhận tốt công việc của một Case Manager. Kỹ năng này không chỉ mang lại cho mình cơ hội nghề nghiệp mà còn giúp mình phát triển thói quen gọn gàng, sắp xếp hợp lý tất cả tài liệu mà mình tải về, giúp mình làm việc hiệu quả hơn và giảm bớt sự bối rối. Tuy nhiên, trong quá trình được chị Phương mentor, điều mình nhận ra quan trọng nhất là nhờ vào tư duy tài liệu hóa và hệ thống hóa, mình có thể dễ dàng chuyển hướng hoặc chuyển ngành mà không phải bắt đầu lại từ đầu. Tất cả những gì mình đã lưu trữ và tích lũy trong khoảng thời gian dài trước đó trở thành nền tảng vững chắc giúp mình thích nghi và phát triển trong bất kỳ lĩnh vực nào.",
      name: "Hoài My",
      title: "Social Media, Support Case Manager",
      image: avtTestimonials3,
    },
    {
      quote:
        "Phương tuy còn trẻ tuổi nhưng là người có kiến thức rộng và kinh nghiệm thực chiến trên từng cây số, ngoài ra thì khả năng truyền đạt kiến thức dễ hiểu, sát phạt cũng gai góc nhưng thấu tình đạt lý. Mình đã học được rất nhiều từ những bài viết chuyên môn mà Phương chia sẻ. Hầu như mỗi ngày, mình đều dành thời gian để đọc bài của Phương, từ đó nâng cao kỹ năng và dần hoàn thiện trang blog cá nhân. Đặc biệt, những phản hồi từ Phương về các bài viết của mình luôn chi tiết và hữu ích, giúp mình cải thiện đáng kể các kỹ năng quan trọng và thấy được sự tiến bộ rõ rệt trong một thời gian ngắn. Ngoài ra, mình cũng rất biết ơn Khang – trợ lý của Phương, người đã hỗ trợ mình rất tận tình trong suốt khóa học. Khang luôn sẵn sàng giúp đỡ mọi lúc mình cần, nếu không có sự hỗ trợ đó, mình có lẽ đã cảm thấy lạc lối. Sau khi kết thúc khóa học, mình vẫn nhận được sự giúp đỡ từ Khang khi gặp phải những vấn đề cụ thể. Điều này khiến mình thật sự biết ơn và cảm thấy may mắn khi đã chọn đúng thầy, đúng khóa học chất lượng, giúp mình đạt được những bước tiến quan trọng trên hành trình xây dựng blog với Substack.",
      name: "Chị Trang Trịnh",
      title: "Activation Marketer",
      image: avtTestimonials4,
    },
    {
      quote:
        "Mình đã tham gia nhiều khóa học và chương trình khác nhau, nhưng hiếm khi gặp được một mentor nào có khả năng quan sát tinh tế và đưa ra những nhận xét sâu sắc chỉ sau vài chục phút trò chuyện như vậy. Để đánh giá về chuyên môn của Phương, mình chắc chắn rằng Phương không hề tầm thường. Dù còn trẻ và nhỏ tuổi hơn mình, Phương sở hữu kiến thức thực tế phong phú và đa dạng.\nĐiều khiến mình trân trọng nhất ở Phương là sự lắng nghe chân thành. Phương tạo cho mình cảm giác an toàn để chia sẻ những vấn đề khó nói, đồng thời cũng rất vững vàng và đáng tin cậy khi đưa ra những lời khuyên và góc nhìn mới mẻ. Sự kết hợp giữa khả năng lắng nghe và tư duy sắc bén của Phương thực sự là điều mà mình rất quý mến. Chị cảm ơn Phương.",
      name: "Khách hàng ẩn danh",
      title: "Ẩn danh",
      image: avtTestimonials5,
    },
    {
      quote:
        "Cảm ơn chị rất nhiều vì đã tổ chức buổi Mentoring ngày hôm nay ạ. Ba năm trôi qua em vẫn giữ nguyên một cảm xúc khi gặp chị, đó là được truyền cảm hứng, được truyền một ý chí cố gắng, chủ động và hoà lẫn với đó là một chút 'an yên' ở trong lòng.\n\n" +
        "Buổi ngày hôm nay thực sự giống như một 'wake up call' giúp em thức tỉnh được nhiều thứ, đặc biệt là việc xác định cho mình một hướng đi trong tương lai dài hạn, lấy nó làm động lực để cố gắng và vươn lên phía trước.\n\n" +
        "Như em cũng đã có đề cập ở trong buổi meeting, có ba bài học mà em rút ra từ những chia sẻ của chị:\n" +
        "1. Chủ động với cuộc sống của mình, chủ động với mọi thứ vì khi ta chủ động, ta sẽ điều khiển được cuộc sống và trở nên tự do hơn.\n" +
        "2. Khi mình join vào một tổ chức, mình hãy tận dụng mọi cơ hội để học hỏi và phát triển, không nghĩ đến lợi ích trước mắt mà hãy nghĩ đến lợi ích lâu dài, cứ làm rồi sẽ biết mình đã đi tới đâu.\n" +
        "3. Hệ thống hoá những thông tin quan trọng, những bài học bổ ích,... và xem những gì mình làm như là một di sản mình để lại cho người khác tham khảo.",
      name: "Khách hàng ẩn danh",
      title: "Ẩn danh",
      image: avtTestimonials5,
    },
    {
      quote:
        "em cảm ơn chị nhiều về bài chia sẻ ngày hôm nay. mặc dù feedback hơi muộn vì hôm nay em cũng hơi bận, nhưng em muốn chị biết rằng chị đã giúp em rất nhiều. chị giúp em hình dung mọi thứ cụ thể hơn và xây dựng một hướng đi ngắn hạn đúng đắn, điều mà em nghĩ mình không thể làm một mình được. em may mắn biết chị qua threads, may mắn đọc được chia sẻ của chị trên đó và may mắn được kết nối vs chị. ngoài bài học kinh nghiệm về phát triển bản thân và định hướng nghề nghiệp, năng lượng của chị cũng gián tiếp tác động đến em rất nhiều. thời gian này em hơi trầm cảm, em ít giao tiếp, nhưng khi nhìn thấy chị em lại ước bản thân cũng có thể lấp lánh như vậy, nhẹ nhàng nhưng lại màu sắc. em rất biết ơn, vì chị đã không ngần ngại coaching và chia sẻ mọi điều chị có thể. em hy vọng bản thân sẽ phát triển thành một phiên bản tốt hơn,",
      name: "Khách hàng ẩn danh",
      title: "Ẩn danh",
      image: avtTestimonials5,
    },
  ];

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={-30}
      loop={true}
      grabCursor={true}
      centeredSlides={true}
      initialSlide={1}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
            image={testimonial.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
