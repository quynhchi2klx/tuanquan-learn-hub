import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Target,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Hỗ trợ bài tập lớn",
      description: "Giúp sinh viên hoàn thành các bài tập, đồ án cuối kì với chất lượng cao và đúng tiến độ",
      features: [
        "Hỗ trợ tất cả các môn học",
        "Giải thích chi tiết từng bước",
        "Bảo đảm chất lượng điểm số",
        "Hoàn thành đúng deadline"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Hoàn thành chứng chỉ Coursera",
      description: "Đồng hành cùng bạn hoàn thành các khóa học và lấy chứng chỉ từ các trường đại học hàng đầu",
      features: [
        "Hỗ trợ toàn bộ khóa học",
        "Chiến lược học tập hiệu quả",
        "Đảm bảo hoàn thành 100%",
        "Chứng chỉ được công nhận"
      ],
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: BookOpen,
      title: "Source tài liệu ôn thi",
      description: "Cung cấp tài liệu ôn thi chất lượng cao, được biên soạn bởi các chuyên gia giáo dục",
      features: [
        "Tài liệu cập nhật mới nhất",
        "Bài tập thực hành phong phú",
        "Đề thi mẫu và lời giải",
        "Hỗ trợ mọi kỳ thi"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Khóa học cấp tốc",
      description: "Các khóa học intensive giúp nắm vững kiến thức trong thời gian ngắn với phương pháp học tối ưu",
      features: [
        "Lộ trình học tập cá nhân hóa",
        "Giảng viên kinh nghiệm",
        "Học 1-1 hoặc nhóm nhỏ",
        "Cam kết kết quả học tập"
      ],
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent rounded-full px-4 py-2 mb-4">
            <Target className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Dịch vụ của chúng tôi</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Giải pháp học tập toàn diện
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chúng tôi cung cấp các dịch vụ hỗ trợ học tập chuyên nghiệp, 
            giúp bạn đạt được mục tiêu học tập một cách hiệu quả nhất
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-card transition-all duration-300 border-0"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Tìm hiểu thêm
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sẵn sàng bắt đầu hành trình học tập?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận ưu đãi đặc biệt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-elegant">
                Nhận tư vấn miễn phí
              </Button>
              <Button size="lg" variant="outline">
                Xem bảng giá
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;