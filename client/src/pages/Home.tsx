import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Globe, Rocket, Users, MapPin, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Divalaser Software Solutions</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="default" className="hidden md:inline-flex">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Empowering Africa Through
                <span className="text-primary block">Digital Innovation</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Based in Atlanta, USA, we specialize in digitalization solutions for Africa, 
                with a focus on the Democratic Republic of Congo. Our expert software engineers 
                are transforming businesses and communities through cutting-edge technology.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <Rocket className="h-5 w-5" />
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img 
                  src="/hero-coding.jpg" 
                  alt="Software engineer coding" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive digital solutions tailored to the unique needs of African markets
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Custom Software Development</CardTitle>
                <CardDescription>
                  Tailored software solutions designed to meet your specific business requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Web & Mobile Applications</li>
                  <li>• Enterprise Software</li>
                  <li>• API Development & Integration</li>
                  <li>• Cloud Solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Digital Transformation</CardTitle>
                <CardDescription>
                  Modernize your operations with cutting-edge digital technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Business Process Automation</li>
                  <li>• Digital Strategy Consulting</li>
                  <li>• Legacy System Modernization</li>
                  <li>• Data Analytics & BI</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Training & Support</CardTitle>
                <CardDescription>
                  Empower your team with the skills needed for digital success
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Technical Training Programs</li>
                  <li>• Ongoing Technical Support</li>
                  <li>• Knowledge Transfer</li>
                  <li>• Capacity Building</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-xl">
                <img 
                  src="/africa-tech.jpg" 
                  alt="Africa technology transformation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">About Divalaser</h2>
              <p className="text-muted-foreground leading-relaxed">
                Divalaser Software Solutions is a forward-thinking technology company headquartered 
                in Atlanta, USA, with a mission to drive digital transformation across Africa. 
                We specialize in creating innovative software solutions that address the unique 
                challenges and opportunities in African markets, particularly in the Democratic 
                Republic of Congo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experienced software engineers combines international expertise with 
                deep understanding of local contexts to deliver solutions that truly make a difference. 
                We believe in the power of technology to unlock economic growth, improve governance, 
                and enhance the quality of life for millions across the continent.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Atlanta, Georgia, USA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Showcase Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built with Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our software engineers craft clean, efficient, and scalable code
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg border border-border overflow-hidden shadow-xl">
              <div className="bg-muted/50 px-4 py-2 flex items-center gap-2 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-muted-foreground ml-4">app.tsx</span>
              </div>
              <div className="relative">
                <img 
                  src="/developer-workspace.jpg" 
                  alt="Developer workspace with code" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Expert Engineers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Together</h2>
            <p className="text-muted-foreground mb-8">
              Ready to transform your business with digital solutions? Get in touch with our team today.
            </p>
            <div className="space-y-4">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="font-medium">info@divalaser.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <div className="font-medium">+1 (404) 555-0123</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Button size="lg" className="w-full md:w-auto">
                Schedule a Consultation
              </Button>
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
              © 2025 Divalaser Software Solutions. Empowering Africa through technology.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

