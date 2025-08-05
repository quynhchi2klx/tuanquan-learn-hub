import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Minh Anh",
    school: "UIT - ĐHQG TPHCM",
    content: "Tuấn & Quân đã giúp mình hoàn thành chứng chỉ Coursera Machine Learning với điểm tuyệt đối. Hỗ trợ nhiệt tình, làm bài chính xác 100%.",
    rating: 5,
    service: "Chứng chỉ Coursera"
  },
  {
    name: "Trần Văn Đức",
    school: "HUST",
    content: "Source code và tài liệu từ team rất chất lượng, giúp mình hiểu rõ các concept khó. Project cuối kỳ được điểm A+ nhờ có sự hỗ trợ.",
    rating: 5,
    service: "Source code & Tài liệu"
  },
  {
    name: "Lê Thị Hương",
    school: "HCMUS",
    content: "Khóa học cấp tốc Data Structures giúp mình ôn thi midterm rất hiệu quả. Video ngắn gọn nhưng đầy đủ kiến thức quan trọng.",
    rating: 5,
    service: "Khóa học Online"
  },
  {
    name: "Phạm Quang Nam",
    school: "FPT University",
    content: "Team edit video presentation cho mình rất chuyên nghiệp, slide đẹp và script hay. Thầy khen rất nhiều về phần thuyết trình.",
    rating: 5,
    service: "Dịch vụ Media"
  },
  {
    name: "Vũ Thị Mai",
    school: "NEU",
    content: "Assignment và lab được làm rất tỉ mỉ, code clean và có comment chi tiết. Giúp mình hiểu được logic và cách implement.",
    rating: 5,
    service: "Hỗ trợ Bài tập"
  },
  {
    name: "Hoàng Minh Tuấn",
    school: "UEL",
    content: "Đã sử dụng dịch vụ của Tuấn & Quân từ năm 2 đến giờ. Luôn hài lòng với chất lượng và thái độ phục vụ. Highly recommended!",
    rating: 5,
    service: "Khách hàng thân thiết"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-semibold text-lg">Phản hồi từ sinh viên</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Câu chuyện thành công
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hàng trăm sinh viên đã tin tưởng và đạt được kết quả học tập tốt với sự hỗ trợ của Tuấn & Quân.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-card shadow-card hover:shadow-elegant transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/30" />
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                  <div className="inline-block">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Sinh viên hài lòng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Chứng chỉ Coursera</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Tỷ lệ điểm A</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-muted-foreground">Hỗ trợ tận tình</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;