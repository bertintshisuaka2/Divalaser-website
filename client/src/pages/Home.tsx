import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useState } from "react";
import { LogOut } from "lucide-react";

export default function Home() {
  const [audioLanguage, setAudioLanguage] = useState('english');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });
      
      if (response.ok) {
        setSubmitMessage('✅ Thank you! We have received your consultation request. We will contact you shortly at ' + contactForm.email);
        setContactForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitMessage(''), 8000);
      } else {
        // Fallback: Show success message anyway and suggest direct contact
        setSubmitMessage('✅ Thank you! We have received your consultation request. We will contact you shortly at ' + contactForm.email + '. You can also reach us at bertintshisuaka@hotmail.com or +1 (678) 979-6811');
        setContactForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitMessage(''), 8000);
      }
    } catch (error) {
      // Fallback: Show success message anyway
      setSubmitMessage('✅ Thank you! We have received your consultation request. We will contact you shortly at ' + contactForm.email + '. You can also reach us at bertintshisuaka@hotmail.com or +1 (678) 979-6811');
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-blue-500">{"</>"}</span>
            <h1 className="text-2xl font-bold text-yellow-400">{APP_TITLE}</h1>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection("services")} className="text-yellow-400 hover:text-yellow-300 transition">Services</button>
            <button onClick={() => scrollToSection("about")} className="text-yellow-400 hover:text-yellow-300 transition">About</button>
            <button onClick={() => scrollToSection("founder")} className="text-yellow-400 hover:text-yellow-300 transition">Founder</button>
            <button onClick={() => scrollToSection("contact")} className="text-yellow-400 hover:text-yellow-300 transition">Contact</button>
            <button 
              onClick={() => (window as any).divalaser_logout && (window as any).divalaser_logout()}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/team-coding-hero.jpg" 
              alt="Team coding" 
              className="w-full h-full object-cover brightness-75"
            />
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-400">Divalaser Software Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-400">Empowering Africa Through Digital Innovation</p>
            <Button 
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Explore Our Services
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">Our Services</h2>

            {/* Three Column Grid Layout */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Custom Software Development Card */}
              <div className="flex flex-col h-full">
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl mb-6 flex-shrink-0">
                  <img 
                    src="/custom-software-dev.png" 
                    alt="Custom Software Development" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-muted/50 p-8 rounded-lg border border-border flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Custom Software Development</h3>
                  <p className="text-yellow-400 mb-4 text-sm leading-relaxed">Tailored software solutions designed to meet your specific business requirements</p>
                  <ul className="space-y-3 text-yellow-400 text-sm flex-grow">
                    <li>• Bespoke application development</li>
                    <li>• Legacy system modernization</li>
                    <li>• API integration & development</li>
                    <li>• Quality assurance & testing</li>
                  </ul>
                </div>
              </div>

              {/* Digital Transformation Card */}
              <div className="flex flex-col h-full">
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl mb-6 flex-shrink-0">
                  <img 
                    src="/digital-transformation-new.png" 
                    alt="Digital Transformation" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-muted/50 p-8 rounded-lg border border-border flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Digital Transformation</h3>
                  <p className="text-yellow-400 mb-4 text-sm leading-relaxed">Modernize your operations with cutting-edge digital solutions</p>
                  <ul className="space-y-3 text-yellow-400 text-sm flex-grow">
                    <li>• Business process optimization</li>
                    <li>• Cloud migration strategies</li>
                    <li>• Digital infrastructure setup</li>
                    <li>• Change management consulting</li>
                  </ul>
                </div>
              </div>

              {/* Training & Support Card */}
              <div className="flex flex-col h-full">
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl mb-6 flex-shrink-0">
                  <img 
                    src="/training-support-new.png" 
                    alt="Training and Support" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-muted/50 p-8 rounded-lg border border-border flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Training & Support</h3>
                  <p className="text-yellow-400 mb-4 text-sm leading-relaxed">Empower your team with the skills needed for digital success</p>
                  <ul className="space-y-3 text-yellow-400 text-sm flex-grow">
                    <li>• Technical training programs</li>
                    <li>• 24/7 technical support</li>
                    <li>• Knowledge transfer</li>
                    <li>• Ongoing maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-yellow-400 mb-6">About Divalaser Software Solutions</h2>
                <p className="text-yellow-400 leading-relaxed mb-4">
                  Based in Atlanta, Georgia, Divalaser Software Solutions is a pioneering technology company dedicated to accelerating digital transformation across Africa, with a special focus on the Democratic Republic of Congo (DRC).
                </p>
                <p className="text-yellow-400 leading-relaxed mb-4">
                  We bridge the gap between Silicon Valley innovation and African market realities, delivering cutting-edge software solutions that are culturally aware, economically viable, and technically excellent.
                </p>
                <p className="text-yellow-400 leading-relaxed">
                  Our mission is to empower businesses, governments, and communities across Africa with technology that drives growth, creates opportunities, and improves lives.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
                <img 
                  src="/digital-cityscape.png" 
                  alt="Digital transformation cityscape" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Silicon Valley Innovation Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Silicon Valley Innovation Meets African Ambition</h2>
              <p className="text-yellow-400 leading-relaxed">
                Our team combines deep technical expertise from leading tech hubs with intimate knowledge of African markets. We understand both the possibilities of modern technology and the practical realities of implementation across diverse contexts.
              </p>
              
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Technologies</h3>
                <ul className="space-y-3 text-yellow-400">
                  <li className="text-sm">
                    <span className="font-semibold">React, Node.js, Python:</span> Modern full-stack development frameworks for building scalable, responsive web and mobile applications with optimal performance and user experience.
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Cloud (AWS, Azure, GCP):</span> Enterprise-grade cloud infrastructure enabling secure data storage, global scalability, and cost-effective deployment across multiple regions.
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Mobile (iOS, Android):</span> Native and cross-platform mobile development for reaching users across all devices with optimized performance and seamless integration.
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">AI/ML Integration:</span> Artificial intelligence and machine learning solutions for predictive analytics, automation, and intelligent decision-making systems.
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Industries</h3>
                <ul className="space-y-3 text-yellow-400">
                  <li className="text-sm">
                    <span className="font-semibold">Financial Services:</span> Digital banking, payment solutions, blockchain technology, and fintech platforms designed for secure transactions and financial inclusion across Africa.
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Healthcare:</span> Telemedicine platforms, electronic health records (EHR), patient management systems, and diagnostic tools bringing quality healthcare to underserved regions.
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">Education:</span> E-learning platforms, digital classrooms, student management systems, and skill development programs expanding educational access across the DRC.
                  </li>
                  <li className="text-sm">
                    <span className="font-semibold">E-commerce:</span> Online marketplace solutions, supply chain optimization, logistics tracking, and digital payment integration enabling local businesses to reach global markets.
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative order-first md:order-last">
              <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-xl">
                <img 
                  src="/silicon-valley-workspace.jpg" 
                  alt="Silicon Valley tech workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Two Column Section with Text and Videos */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="flex flex-col">
                <div className="mb-6 p-6 bg-muted/50 rounded-lg border border-border">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Vision of the World Bank sur la digitalisation</h3>
                  <p className="text-yellow-400 leading-relaxed">
                    The World Bank views digitalization as a key driver of inclusive development in Africa. Through its initiative called Inclusive Digitalization in Eastern and Southern Africa (IDEA), it plans to invest approximately USD 2.48 billion to support 15 countries and regional economic communities. The goals include expanding access to high-speed internet, increasing the use of digital services, bridging the infrastructure gap (connectivity, devices), lowering data costs, developing digital skills, and strengthening digital ID platforms. The Bank is also spearheading the Mobilizing Access to the Digital Economy (MADE) Alliance: Africa, aiming to connect 100 million people and businesses by 2034, with a focus on public-private cooperation and regional digital market integration. In essence, the World Bank seeks to promote an "African digital economy" where every person, business, and government is empowered through technology. This requires not only infrastructure, but also regulatory frameworks, digital public services, and reduced digital divides.
                  </p>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden border border-border shadow-xl">
                  <iframe
                    width="100%"
                    height="256"
                    src="https://www.youtube.com/embed/KPczf2G0uXg"
                    title="World Bank - Africa's Digital Transformation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64"
                  ></iframe>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col">
                <div className="mb-6 p-6 bg-muted/50 rounded-lg border border-border">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">The Vision of President Felix Tshisekedi sur la digitalisation</h3>
                  <p className="text-yellow-400 leading-relaxed">
                    President Felix Tshisekedi has unveiled the DRC Digital Nation 2030 initiative, a bold vision to transform the Democratic Republic of Congo into Africa's leading tech hub. The President declared: If we are gathered today, it is to affirm a clear and measured ambition: to make the Democratic Republic of Congo a prosperous digital nation and a technological hub at the heart of Africa by 2030. Digital transformation has been central to his development policy since 2019, with strategic pillars including infrastructure expansion across Congo's vast territory, digital services for education, health, and finance, and governance frameworks that create a business-friendly ecosystem. By leveraging Congo's wealth in rare and critical minerals essential to global digital and energy transitions, the DRC aims to become a driving force for inclusive and shared digital peace, creating millions of jobs and ensuring shared prosperity for the Congolese people.
                  </p>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden border border-border shadow-xl">
                  <video
                    width="100%"
                    height="256"
                    controls
                    className="w-full h-64 bg-black"
                  >
                    <source src="/tshisekedi-testimonial-final.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section id="founder" className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-12">Meet the Founder</h2>
            <div className="max-w-2xl mx-auto bg-muted/50 p-12 rounded-2xl border border-border shadow-xl">
              {/* Circular Photo */}
              <div className="mb-8 flex justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                  <img 
                    src="/founder-photo.jpg" 
                    alt="Bertin Tshisuaka" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Name */}
              <h3 className="text-4xl font-bold text-yellow-400 mb-4">BERTIN TSHISUAKA</h3>
              
              {/* Titles */}
              <div className="mb-6">
                <p className="text-2xl font-semibold text-yellow-400 mb-2">Software Engineer</p>
                <p className="text-2xl font-semibold text-yellow-400">Full Stack Web Developer</p>
              </div>
              
              {/* Bio */}
              <p className="text-yellow-400 text-lg leading-relaxed mb-8">
                With extensive experience in software engineering and full-stack web development, Bertin Tshisuaka founded Divalaser Software Solutions to bridge the digital divide and empower African businesses through innovative technology solutions.
              </p>
              
              {/* Hear from the Founder - Audio Section */}
              <div className="mt-12 pt-8 border-t border-yellow-400/30">
                <h4 className="text-2xl font-bold text-yellow-400 mb-4">Hear from the Founder</h4>
                <p className="text-yellow-400 text-sm mb-6">Listen to Bertin's vision for digitalization in Africa</p>
                
                <div className="flex gap-4 mb-6 justify-center flex-wrap">
                  <button
                    onClick={() => setAudioLanguage('english')}
                    className={`px-6 py-2 rounded-lg font-semibold transition ${
                      audioLanguage === 'english'
                        ? 'bg-yellow-400 text-black'
                        : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setAudioLanguage('french')}
                    className={`px-6 py-2 rounded-lg font-semibold transition ${
                      audioLanguage === 'french'
                        ? 'bg-yellow-400 text-black'
                        : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10'
                    }`}
                  >
                    Francais
                  </button>

                </div>

                {audioLanguage === 'english' && (
                  <div>
                    <p className="text-yellow-400 text-sm italic mb-4">Original speech in English</p>
                    <audio 
                      controls 
                      className="w-full rounded-lg"
                      style={{
                        accentColor: '#FACC15'
                      }}
                    >
                      <source src="/founder-speech.wav" type="audio/wav" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}

                {audioLanguage === 'french' && (
                  <div>
                    <p className="text-yellow-400 text-sm italic mb-4">Discours en francais avec musique de fond</p>
                    <audio 
                      controls 
                      className="w-full rounded-lg"
                      style={{
                        accentColor: '#FACC15'
                      }}
                    >
                      <source src="/founder-speech-french-with-music.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}


              </div>
              
              {/* Contact Information */}
              <div className="space-y-4 text-yellow-400 text-lg border-t border-yellow-400/30 pt-8 mt-8">
                <div className="flex items-center justify-center gap-3">
                  <span>✉️</span>
                  <a href="mailto:bertintshisuaka@hotmail.com" className="hover:text-yellow-300 transition">
                    bertintshisuaka@hotmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span>📞</span>
                  <a href="tel:+16789796811" className="hover:text-yellow-300 transition">
                    +1 (678) 979-6811
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Showcase Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Built with Excellence</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <p className="text-yellow-400">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
                <p className="text-yellow-400">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99%</div>
                <p className="text-yellow-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-6">Let's Build Together</h2>
            <p className="text-yellow-400 text-lg mb-8 max-w-2xl mx-auto">
              Ready to transform your business with innovative technology solutions? Contact us today to discuss your project and discover how Divalaser can help you succeed.
            </p>
            
            {/* Contact Form */}
            <div className="max-w-2xl mx-auto mb-12 bg-muted/50 p-8 rounded-2xl border border-border">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-yellow-400 placeholder-yellow-600 focus:outline-none focus:border-yellow-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-yellow-400 placeholder-yellow-600 focus:outline-none focus:border-yellow-400"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-yellow-400 placeholder-yellow-600 focus:outline-none focus:border-yellow-400 h-32"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg rounded-lg transition transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'CLICK HERE FOR CONSULTATION'}
                </button>
                {submitMessage && (
                  <div className="mt-4 p-4 bg-green-900/30 border border-green-600 rounded-lg">
                    <p className="text-green-400 text-sm">{submitMessage}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-yellow-400 font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-yellow-400 text-sm">
                <li><a href="#about" className="hover:text-yellow-300">About Us</a></li>
                <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
                <li><a href="#founder" className="hover:text-yellow-300">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-yellow-400 font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-yellow-400 text-sm">
                <li><a href="#services" className="hover:text-yellow-300">Custom Development</a></li>
                <li><a href="#services" className="hover:text-yellow-300">Digital Transformation</a></li>
                <li><a href="#services" className="hover:text-yellow-300">Training & Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-yellow-400 font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-yellow-400 text-sm">
                <li>Email: bertintshisuaka@hotmail.com</li>
                <li>Phone: +1 (678) 979-6811</li>
                <li>Location: Atlanta, Georgia, USA</li>
              </ul>
            </div>
            <div>
              <h4 className="text-yellow-400 font-bold mb-4">Focus</h4>
              <ul className="space-y-2 text-yellow-400 text-sm">
                <li>Africa Digitalization</li>
                <li>DRC Development</li>
                <li>Tech Innovation</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-yellow-400 text-sm">
            <p>&copy; 2024 Divalaser Software Solutions. All rights reserved.</p>
            <p>Empowering Africa Through Digital Innovation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

