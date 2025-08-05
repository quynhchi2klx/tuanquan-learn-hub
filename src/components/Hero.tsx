import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

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
                Tuấn & Quân
                <br />
                <span className="text-white/90">Learn Hub</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-lg">
                Giải pháp học tập toàn diện - Từ bài tập đại học đến chứng chỉ quốc tế
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8 py-4"
              >
                Khám phá dịch vụ
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                Tư vấn miễn phí
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/70">Học viên tin tưởng</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-white/70">Chứng chỉ hoàn thành</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto">
                  <Star className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-sm text-white/70">Đánh giá trung bình</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Học tập chuyên nghiệp với Tuấn & Quân" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating testimonial card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-elegant max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">TQ</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Học viên xuất sắc</div>
                  <div className="text-sm text-muted-foreground">Hoàn thành 15 chứng chỉ</div>
                </div>
              </div>
              <p className="text-sm text-foreground mt-3">
                "Dịch vụ tuyệt vời! Đã giúp tôi hoàn thành bằng đại học với điểm cao."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;