import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Clock,
  MapPin,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ để được tư vấn miễn phí về dịch vụ phù hợp nhất
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Thông tin liên hệ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Điện thoại</h4>
                    <p className="text-muted-foreground">+84 123 456 789</p>
                    <p className="text-muted-foreground">+84 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">tuanquan.learnhub@gmail.com</p>
                    <p className="text-muted-foreground">support@tuanquan.edu.vn</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Chat trực tuyến</h4>
                    <p className="text-muted-foreground">Zalo: 0123456789</p>
                    <p className="text-muted-foreground">Telegram: @tuanquan_support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Giờ làm việc</h4>
                    <p className="text-muted-foreground">Thứ 2 - Chủ nhật: 8:00 - 22:00</p>
                    <p className="text-muted-foreground">Hỗ trợ khẩn cấp: 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Địa chỉ</h4>
                    <p className="text-muted-foreground">123 Đường ABC, Quận 1</p>
                    <p className="text-muted-foreground">TP. Hồ Chí Minh, Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 text-center hover:shadow-card transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-success" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Chat ngay</h4>
                  <p className="text-sm text-muted-foreground">Nhận tư vấn miễn phí trong 5 phút</p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-card transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-warning" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Gọi điện</h4>
                  <p className="text-sm text-muted-foreground">Tư vấn trực tiếp với chuyên gia</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Gửi tin nhắn cho chúng tôi</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Họ và tên *
                    </label>
                    <Input placeholder="Nhập họ và tên của bạn" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Số điện thoại *
                    </label>
                    <Input placeholder="Nhập số điện thoại" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input type="email" placeholder="Nhập địa chỉ email" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Dịch vụ quan tâm
                  </label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                    <option value="">Chọn dịch vụ</option>
                    <option value="homework">Hỗ trợ bài tập lớn</option>
                    <option value="coursera">Hoàn thành chứng chỉ Coursera</option>
                    <option value="materials">Source tài liệu ôn thi</option>
                    <option value="intensive">Khóa học cấp tốc</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tin nhắn *
                  </label>
                  <Textarea 
                    placeholder="Mô tả chi tiết về nhu cầu hỗ trợ của bạn..."
                    rows={5}
                  />
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90 text-white shadow-elegant">
                  <Send className="w-4 h-4 mr-2" />
                  Gửi tin nhắn
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Chúng tôi sẽ phản hồi trong vòng 30 phút trong giờ làm việc
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;