import React, { useState } from 'react';
import { 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Smartphone,
  CheckCircle2,
  Zap,
  ArrowRight,
  ChevronDown,
  Star,
  Wifi
} from 'lucide-react';

export default function App() {
  const whatsappNumber = "2348130574777"; 
  const whatsappMessage = encodeURIComponent("Hello Jonce Topup, I want to buy data/airtime.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      question: 'How fast will my data arrive?',
      answer: 'Your data arrives within 5 seconds of payment confirmation. Our automated system processes orders instantly, so you can start browsing immediately.'
    },
    {
      question: 'Is it safe to pay via WhatsApp?',
      answer: 'Yes! We use secure bank transfer methods and encrypted WhatsApp chats. All transactions are secure and verified. Your payment details are never stored on WhatsApp.'
    },
    {
      question: 'What networks do you support?',
      answer: 'We support all major Nigerian networks: MTN, Airtel, Glo, and 9mobile. You can choose any data bundle from any of these networks.'
    },
    {
      question: 'What if the data doesn\'t arrive?',
      answer: 'In the rare case of any issue, contact us immediately on WhatsApp and we\'ll resolve it within minutes. We have a 100% guarantee on all transactions.'
    },
    {
      question: 'Do I need to register or create an account?',
      answer: 'No registration needed! Simply send us a message on WhatsApp with your network and preferred data plan. It\'s that simple.'
    },
    {
      question: 'Can I buy airtime as well?',
      answer: 'Yes! We sell both data and airtime bundles. Just let us know what you need in your WhatsApp message.'
    }
  ];

  const testimonials = [
    {
      name: 'Chioma Adeyemi',
      role: 'Student',
      content: 'This is amazing! I got my data in literally 5 seconds. No complicated process, just a message and boom! Highly recommended.',
      rating: 5
    },
    {
      name: 'Tunde Okafor',
      role: 'Freelancer',
      content: 'I use Jonce Topup every week. The rates are the cheapest I\'ve seen and the service is incredibly reliable. Best decision ever!',
      rating: 5
    },
    {
      name: 'Adeola Ibrahim',
      role: 'Business Owner',
      content: 'As someone who goes through data quickly, Jonce Topup has saved me so much money. The bulk discounts are fantastic too.',
      rating: 5
    },
    {
      name: 'Emeka Nwankwo',
      role: 'Remote Worker',
      content: 'No more stress with expensive data bundles. Jonce Topup gives me exactly what I need at prices that won\'t break the bank.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Brand Top Bar */}
      <div className="h-2 bg-[#FFD700] w-full"></div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center border-[2px] border-black font-bold text-xl tracking-tighter shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="bg-white text-[#FFD700] px-3 py-0.5">JONCE</span>
                <span className="bg-black text-white px-3 py-0.5">TOPUP</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <span className="text-xs font-black tracking-widest text-slate-900 uppercase">Instant Data • Zero Stress</span>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD700] text-black px-5 py-2 rounded-full text-sm font-black hover:bg-black hover:text-white transition-all flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="h-4 w-4" /> Order Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl w-full text-center space-y-8">
          
          {/* Online Status Indicator */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFD700] text-black font-black text-xs uppercase tracking-[0.2em] mb-4 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
            </span>
            Active on WhatsApp
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.95]">
            Instant Data.<br />
            <span className="relative inline-block text-black">
              <span className="relative z-10">Zero Stress.</span>
              <span className="absolute bottom-2 left-0 w-full h-6 bg-[#FFD700] -z-10"></span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-2xl text-slate-700 max-w-2xl mx-auto font-bold leading-relaxed">
            MTN, Airtel, Glo, and 9mobile. No apps, no registration. Just send a message and get topped up instantly.
          </p>

          {/* WhatsApp Button */}
          <div className="pt-8 flex flex-col items-center gap-8">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-[#FFD700] text-black hover:bg-black hover:text-[#FFD700] px-12 py-6 rounded-2xl text-2xl font-black transition-all transform hover:scale-[1.03] shadow-[0_10px_20px_-5px_rgba(255,215,0,0.5)] border-2 border-transparent hover:border-black"
            >
              <MessageCircle className="h-8 w-8 fill-current" />
              MESSAGE US ON WHATSAPP
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </a>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-black text-slate-900">
              {['MTN', 'AIRTEL', 'GLO', '9MOBILE'].map((net) => (
                <span key={net} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border-2 border-[#FFD700] shadow-sm hover:bg-[#FFD700] transition-colors cursor-default">
                  <CheckCircle2 className="h-4 w-4" /> {net}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border-b-4 border-[#FFD700] transition-all hover:-translate-y-2 group">
            <div className="bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Clock className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-2xl font-black mb-3 text-slate-900 uppercase tracking-tighter">5-Sec Delivery</h3>
            <p className="text-slate-600 font-bold leading-relaxed">Automated processing for lightning-fast airtime and data delivery.</p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border-b-4 border-[#FFD700] transition-all hover:-translate-y-2 group">
            <div className="bg-black w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <ShieldCheck className="h-8 w-8 text-[#FFD700]" />
            </div>
            <h3 className="text-2xl font-black mb-3 text-slate-900 uppercase tracking-tighter">Safe & Secure</h3>
            <p className="text-slate-600 font-bold leading-relaxed">Your data is safe. We use secure bank transfers and encrypted WhatsApp chats.</p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border-b-4 border-[#FFD700] transition-all hover:-translate-y-2 group">
            <div className="bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Zap className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-2xl font-black mb-3 text-slate-900 uppercase tracking-tighter">Cheapest Rates</h3>
            <p className="text-slate-600 font-bold leading-relaxed">Save more with our wholesale prices on all network data bundles.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-7xl w-full mt-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-4">
              Loved by
              <br />
              <span className="relative inline-block text-black">
                <span className="relative z-10">Thousands</span>
                <span className="absolute bottom-2 left-0 w-full h-6 bg-[#FFD700] -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-600 font-bold max-w-2xl mx-auto">
              Join thousands of happy customers enjoying fast, affordable data and airtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-[#FFD700]">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-slate-700 font-bold mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <p className="font-black text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600 font-bold">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl w-full mt-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-slate-900 mb-4">
              Frequently Asked
              <br />
              <span className="relative inline-block text-black">
                <span className="relative z-10">Questions</span>
                <span className="absolute bottom-2 left-0 w-full h-6 bg-[#FFD700] -z-10"></span>
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-[#FFD700] hover:text-black transition-all group"
                >
                  <span className="text-lg font-black text-left group-hover:text-black">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 transition-transform font-black ${expandedFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                    <p className="text-slate-700 font-bold leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl w-full mt-32 mb-12 bg-black rounded-3xl p-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Ready to Get Your <span className="text-[#FFD700]">Data?</span>
          </h2>
          <p className="text-lg text-white/80 font-bold mb-8">
            Message us on WhatsApp and get your data in less than 5 seconds.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFD700] text-black px-8 py-4 rounded-2xl text-lg font-black hover:bg-white transition-all transform hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            Start Now on WhatsApp
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center border-[2px] border-[#FFD700] font-black text-2xl tracking-tighter">
              <span className="bg-[#FFD700] text-black px-4 py-1">JONCE</span>
              <span className="bg-transparent text-[#FFD700] px-4 py-1">TOPUP</span>
            </div>
            <p className="text-[#FFD700] text-sm font-black uppercase tracking-[0.4em]">
              INSTANT DATA. ZERO STRESS.
            </p>
            <div className="h-px w-24 bg-white/20"></div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Jonce Topup Billing Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
