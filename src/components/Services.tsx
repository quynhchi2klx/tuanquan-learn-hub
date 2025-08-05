import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Target,
  ArrowRight,
  CheckCircle,
  Filter,
  Youtube
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Chứng chỉ Coursera",
      description: "Hỗ trợ làm các khóa học Coursera và nhận chứng chỉ uy tín từ các trường đại học hàng đầu thế giới.",
      features: [
        "Hỗ trợ làm assignment",
        "Peer review chất lượng",
        "Quiz và exam",
        "Chứng chỉ verified"
      ],
      color: "from-blue-500 to-purple-600",
      cta: "Đặt ngay"
    },
    {
      icon: BookOpen,
      title: "Tài liệu & Source code",
      description: "Cung cấp tài liệu học tập chất lượng và source code các project cho sinh viên IT.",
      features: [
        "Tài liệu từ các trường top",
        "Source code đầy đủ",
        "Document chi tiết",
        "Hỗ trợ debug"
      ],
      color: "from-emerald-500 to-teal-600",
      cta: "Xem ngay"
    },
    {
      icon: Target,
      title: "Khóa học Online",
      description: "Các khóa học cấp tốc với nội dung cô đọng, phù hợp cho sinh viên cần ôn thi nhanh.",
      features: [
        "Video HD chất lượng",
        "Nội dung cô đọng",
        "Ôn thi hiệu quả",
        "Flexible schedule"
      ],
      color: "from-orange-500 to-red-500",
      cta: "Đăng ký"
    },
    {
      icon: Clock,
      title: "Dịch vụ Media",
      description: "Chỉnh sửa video, viết script, thiết kế slide chuyên nghiệp cho presentation và project.",
      features: [
        "Edit video chuyên nghiệp",
        "Viết script sáng tạo",
        "Thiết kế slide đẹp",
        "Tư vấn content"
      ],
      color: "from-violet-500 to-purple-600",
      cta: "Liên hệ"
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
            Hỗ trợ học tập toàn diện
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chúng mình cung cấp đa dạng các dịch vụ hỗ trợ học tập chất lượng cao, 
            từ chứng chỉ Coursera đến làm bài tập, project cho sinh viên.
          </p>
          
          {/* Subject Filter */}
          <div className="mt-8">
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => window.open('https://docs.google.com/document/d/your-google-doc-id', '_blank')}
            >
              <Filter className="h-4 w-4" />
              Lọc theo môn học
            </Button>
          </div>
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
                  {service.cta}
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
              Cần hỗ trợ học tập ngay?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Liên hệ với Tuấn & Quân để được tư vấn và hỗ trợ tốt nhất cho việc học của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white shadow-elegant gap-2"
                onClick={() => window.open('https://www.youtube.com/@tuanquanservices', '_blank')}
              >
                <Youtube className="h-5 w-5" />
                Đặt dịch vụ ngay
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