import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  BookOpen, 
  Star,
  Heart,
  Lightbulb,
  Shield
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Tận tâm",
      description: "Luôn đặt học viên làm trung tâm, hỗ trợ tận tình trong mọi hoàn cảnh"
    },
    {
      icon: Shield,
      title: "Uy tín",
      description: "Cam kết chất lượng, bảo mật thông tin và hoàn thành đúng thời hạn"
    },
    {
      icon: Lightbulb,
      title: "Sáng tạo",
      description: "Áp dụng phương pháp học tập hiện đại, hiệu quả và phù hợp"
    }
  ];

  const achievements = [
    { icon: Users, number: "500+", label: "Học viên đã hỗ trợ" },
    { icon: Award, number: "200+", label: "Chứng chỉ hoàn thành" },
    { icon: BookOpen, number: "50+", label: "Khóa học hỗ trợ" },
    { icon: Star, number: "4.9/5", label: "Đánh giá trung bình" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">
                Về chúng tôi
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tuấn & Quân - 
                <span className="text-primary"> Đối tác tin cậy</span> 
                trong học tập
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Với kinh nghiệm nhiều năm trong lĩnh vực giáo dục, chúng tôi hiểu rõ những thách thức 
                mà sinh viên phải đối mặt. Từ đó, chúng tôi xây dựng các dịch vụ hỗ trợ toàn diện, 
                giúp học viên đạt được thành công trong học tập.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Đội ngũ của chúng tôi bao gồm các chuyên gia có trình độ cao, kinh nghiệm thực tiễn 
                và luôn cập nhật những xu hướng giáo dục mới nhất để mang đến giá trị tốt nhất cho học viên.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Giá trị cốt lõi</h3>
              <div className="grid gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-8">
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <Card className="bg-gradient-primary text-white p-8">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Sứ mệnh của chúng tôi</h3>
                    <p className="text-white/90 leading-relaxed">
                      Trao quyền cho mọi học viên thông qua giáo dục chất lượng cao, 
                      hỗ trợ toàn diện và phương pháp học tập hiệu quả. Chúng tôi tin rằng 
                      giáo dục là chìa khóa để mở ra tương lai tươi sáng.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Introduction */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex -space-x-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                      T
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                      Q
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Tuấn & Quân</h3>
                    <p className="text-sm text-muted-foreground">Founder & Educator</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Với background mạnh về giáo dục và công nghệ, chúng tôi kết hợp 
                  kinh nghiệm thực tiễn và phương pháp giảng dạy hiện đại để mang đến 
                  trải nghiệm học tập tốt nhất cho học viên.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;