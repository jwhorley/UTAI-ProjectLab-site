import React from 'react';
import { 
  ArrowRight, 
  Users, 
  Lightbulb, 
  Target, 
  Clock, 
  CheckCircle, 
  Mail, 
  Phone,
  Building2,
  GraduationCap,
  Zap,
  BarChart3
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">MSAI Studio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-orange-600 transition-colors">How It Works</a>
              <a href="#benefits" className="text-gray-700 hover:text-orange-600 transition-colors">Benefits</a>
              <a href="#contact" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Pilot Program Now Available</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Bridge the Gap Between 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600"> AI Talent </span> 
                and Industry Needs
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with top-tier MSAI graduate students for 8-week collaborative projects. 
                Solve real AI/ML challenges while discovering your next hire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center justify-center group">
                  Partner With Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-orange-600 hover:text-orange-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Project Match</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <Building2 className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium text-gray-900">TechCorp Inc.</span>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <div className="w-px h-8 bg-gray-200"></div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                    <Users className="w-5 h-5 text-amber-600" />
                    <span className="text-sm font-medium text-gray-900">MSAI Student Team</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Project Duration</span>
                    <span className="font-medium text-gray-900">8 weeks</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-gray-600">Week Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-gray-600">Graduate Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">0</div>
              <div className="text-gray-600">Cost to Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">∞</div>
              <div className="text-gray-600">Potential Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How MSAI Studio Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process that connects your real-world AI challenges with brilliant graduate students
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Submit Your Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your AI/ML problem or use case. Our team will work with you to scope a meaningful 8-week project that delivers value.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Get Matched</h3>
              <p className="text-gray-600 leading-relaxed">
                We carefully match your project with a team of 3-4 MSAI students whose skills and interests align with your needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Collaborate & Deliver</h3>
              <p className="text-gray-600 leading-relaxed">
                Work closely with your student team over 8 weeks. Get regular updates, provide guidance, and receive a complete solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Partner With MSAI Studio?</h2>
              <p className="text-xl text-gray-600 mb-8">
                More than just project delivery - we're building the bridge to your future AI talent pipeline.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Try Before You Hire</h3>
                    <p className="text-gray-600">Evaluate student capabilities on real projects before making hiring decisions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Access Top Talent</h3>
                    <p className="text-gray-600">Connect with the next generation of AI/ML experts before they graduate.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solve Real Problems</h3>
                    <p className="text-gray-600">Get actual AI/ML solutions delivered while supporting education.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Zero Financial Risk</h3>
                    <p className="text-gray-600">No cost to participate - just provide project guidance and feedback.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600 to-amber-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Project Success Story</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-orange-200" />
                    <span className="font-medium">FinTech Startup</span>
                  </div>
                  <div className="border-l-2 border-orange-300 pl-4 py-2">
                    <p className="text-orange-100 italic">
                      "The MSAI team delivered a fraud detection model that exceeded our expectations. 
                      We hired two team members full-time after the project."
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-orange-300">
                    <span className="text-orange-200">Project Outcome</span>
                    <span className="font-bold">2 Full-time Hires</span>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-orange-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join forward-thinking companies already partnering with MSAI Studio to solve AI challenges and discover talent.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">studio@msai.edu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">(555) 123-4567</span>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>Initial consultation (30 min)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4 text-gray-400" />
                    <span>Project scoping session</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span>Team matching & kickoff</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="mt-8 w-full bg-orange-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center group">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MSAI Studio</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 MSAI Studio. Bridging AI talent and industry needs.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;