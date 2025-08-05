import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award, Youtube } from "lucide-react";
import avatarImage from "@/assets/avatar-tuan-quan.png";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-white/15"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">Hỗ trợ học tập chuyên nghiệp</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Tuấn & Quân
                </span>
                <br />
                <span className="text-foreground">Hỗ trợ học tập toàn diện</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
                Chúng mình cung cấp các dịch vụ hỗ trợ học tập chất lượng cao từ chứng chỉ Coursera, 
                tài liệu học tập đến các khóa học online và hỗ trợ làm bài tập.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="shadow-elegant hover:shadow-lg transition-all duration-300 text-lg px-8 py-4"
                onClick={() => window.open('https://www.youtube.com/@tuanquanservices', '_blank')}
              >
                <Youtube className="mr-2 h-5 w-5" />
                Đặt dịch vụ ngay
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-2 hover:bg-primary/5"
              >
                Xem dịch vụ
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Thành viên</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-2 mx-auto">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Dịch vụ</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/30 rounded-lg mb-2 mx-auto">
                  <Star className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Hỗ trợ</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-card">
              <img 
                src={avatarImage} 
                alt="Tuấn & Quân - Avatar" 
                className="w-full h-[500px] object-contain p-8"
              />
            </div>
            
            {/* Floating testimonial card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card border">
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                "Dịch vụ tuyệt vời, hỗ trợ nhiệt tình!"
              </p>
              <p className="text-xs text-muted-foreground mt-1">- Sinh viên UIT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;