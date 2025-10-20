import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, BookOpen, Users, Globe, Zap, Award, ArrowRight, MapPin } from "lucide-react";
import { useLocation } from "wouter";

export default function ELearning() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setLocation("/")}>
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Divalaser Software Solutions</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="#courses" className="hover:text-primary transition-colors">Courses</a>
            <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="default" className="hidden md:inline-flex" onClick={() => setLocation("/#contact")}>Get Started</Button>
        </div>
      </header>

      {/* Hero Section with African Kids Learning */}
      <section className="relative overflow-hidden w-full h-screen flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/african-kids-learning.jpg" 
            alt="African children learning with tablets" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            E-Learning Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-4 drop-shadow-md">
            Empowering 145 Territories in the DRC
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
            Supporting the Democratic Republic of Congo Government's Digital Education Initiative
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gap-2" onClick={() => setLocation("/#contact")}>
              <BookOpen className="h-5 w-5" />
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = '#impact'}>Learn More</Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Divalaser Software Solutions is partnering with the DRC Government to revolutionize education across all 145 territories. 
                Our comprehensive e-learning platform brings quality digital education to every corner of the nation, bridging the digital 
                divide and empowering students with 21st-century skills.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>145 Territories</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Reaching every territory in the Democratic Republic of Congo with accessible, quality education.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Student-Centered</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Designed specifically for African learners with culturally relevant content and local language support.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Future-Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Equipping students with digital literacy and technical skills for the modern economy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum designed for all age groups and skill levels
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>Digital Literacy Basics</CardTitle>
                <CardDescription>For ages 6-12</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Introduction to computers, internet safety, and basic digital skills for young learners.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Computer fundamentals</li>
                  <li>• Internet safety</li>
                  <li>• Basic typing & navigation</li>
                  <li>• Introduction to coding</li>
                </ul>
                <Button className="w-full gap-2" variant="outline">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>Programming Fundamentals</CardTitle>
                <CardDescription>For ages 13-18</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Learn coding basics with Python and JavaScript to build real-world applications.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Python basics</li>
                  <li>• Web development</li>
                  <li>• Problem-solving</li>
                  <li>• Project-based learning</li>
                </ul>
                <Button className="w-full gap-2" variant="outline">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>Business & Entrepreneurship</CardTitle>
                <CardDescription>For ages 16+</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Develop business skills and learn to create digital solutions for local challenges.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Business planning</li>
                  <li>• Digital marketing</li>
                  <li>• E-commerce basics</li>
                  <li>• Startup mindset</li>
                </ul>
                <Button className="w-full gap-2" variant="outline">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>Teacher Training Program</CardTitle>
                <CardDescription>For educators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Equip educators with skills to teach digital literacy and technology in classrooms.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Digital pedagogy</li>
                  <li>• Online teaching tools</li>
                  <li>• Student engagement</li>
                  <li>• Assessment methods</li>
                </ul>
                <Button className="w-full gap-2" variant="outline">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>Data & Analytics</CardTitle>
                <CardDescription>For ages 18+</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Master data analysis and visualization to make informed decisions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Data fundamentals</li>
                  <li>• Excel & visualization</li>
                  <li>• Statistical analysis</li>
                  <li>• Real-world projects</li>
                </ul>
                <Button className="w-full gap-2" variant="outline">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>Mobile App Development</CardTitle>
                <CardDescription>For ages 16+</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Build mobile applications that solve real problems in African communities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• App design principles</li>
                  <li>• Mobile frameworks</li>
                  <li>• User experience</li>
                  <li>• App deployment</li>
                </ul>
                <Button className="w-full gap-2" variant="outline">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Impact & Reach</h2>
              <p className="text-muted-foreground">
                Supporting the DRC Government's vision for digital education across all territories
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">145 Territories Covered</h3>
                    <p className="text-muted-foreground">
                      Comprehensive coverage across every territory in the Democratic Republic of Congo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Thousands of Students</h3>
                    <p className="text-muted-foreground">
                      Empowering students of all ages with digital skills and knowledge.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Content</h3>
                    <p className="text-muted-foreground">
                      Culturally relevant, locally adapted curriculum developed with education experts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Government Partnership</h3>
                    <p className="text-muted-foreground">
                      Working directly with DRC Government to achieve national education goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
                  <img 
                    src="/african-kids-laptop.jpg" 
                    alt="African children learning with laptops" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">145</div>
              <div className="text-muted-foreground">Territories Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for accessibility, engagement, and learning outcomes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Offline Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Download courses to access offline, perfect for areas with limited connectivity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Multi-Language Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Available in French, Lingala, Kikongo, and other local languages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Interactive Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quizzes, projects, and peer collaboration to enhance engagement and retention.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn recognized certificates upon course completion to boost career prospects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Education?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of students across the DRC in accessing quality digital education.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gap-2">
                <BookOpen className="h-5 w-5" />
                Explore All Courses
              </Button>
              <Button size="lg" variant="outline" onClick={() => setLocation("/#contact")}>
                Contact Us
              </Button>
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                <strong>Supported by:</strong> Divalaser Software Solutions & DRC Government
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Supporting education across all 145 territories of the Democratic Republic of Congo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-semibold">Divalaser Software Solutions</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 Divalaser Software Solutions. Transforming Education in Africa.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

