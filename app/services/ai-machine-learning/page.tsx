"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "src/components/ui/Navbar";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import Layout from "src/components/ui/Layout";
import { ScheduleButton } from "src/components/ui/schedule";

export default function AIMachineLearningPage() {
  return (
    <Layout>
      <Head>
        <title>AI & Machine Learning | AAT Business Solutions</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-white text-gray-800 font-sans pt-20 px-4 md:px-6">

        {/* Hero Section */}
        <section className="py-16 md:py-20 text-center px-4 md:px-6 mb-12 rounded-lg shadow-sm bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                AI & Machine Learning Solutions
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Transform your business with <strong className="font-semibold text-black">cutting-edge artificial intelligence and machine learning</strong>,
              driving innovation, efficiency, and data-driven decision-making.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
              <Link href="/contact-pages">
                <Button size="lg" className="rounded-md shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                  Get a Free AI Consultation
                </Button>
              </Link>
              <a href="#offerings">
                <Button size="lg" variant="outline" className="rounded-md shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto pb-16 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Offerings */}
          <div className="md:w-2/3 w-full">
            <h2 id="offerings" className="text-2xl md:text-3xl font-bold mb-8 text-black border-b-2 pb-2 border-indigo-200">
              Our Core AI & ML Offerings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {[
                { emoji: "⚙️", title: "Custom AI Model Development", description: "We design and build bespoke AI models tailored to your unique business problems, from predictive analytics to advanced pattern recognition." },
                { emoji: "📊", title: "Predictive Analytics & Forecasting", description: "Use historical data to predict future trends. Perfect for demand forecasting, risk assessment, and planning." },
                { emoji: "🗣️", title: "Natural Language Processing (NLP)", description: "Boost support, analyze feedback, and automate content with smart language models." },
                { emoji: "👁️", title: "Computer Vision Applications", description: "Detect patterns, automate inspection, and enable visual insights with AI that sees like humans." },
                { emoji: "📈", title: "AI Strategy Consulting", description: "Let’s map out your AI path. We'll guide you from vision to execution with clear ROI." },
                { emoji: "🎓", title: "Machine Learning Training Programs", description: "Train your team with hands-on sessions that demystify ML and empower smart decisions." },
              ].map((item, i) => (
                <Card key={i} className="border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.emoji}</span>
                      <h3 className="font-bold text-lg md:text-xl text-black">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Us */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black border-b-2 pb-2 border-indigo-200 mt-12">
              Why Partner with AAT Business Solutions?
            </h2>
            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              <p>We combine deep AI/ML know-how with your business goals to deliver solutions that actually work and bring ROI.</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong className="text-black">Experienced Team:</strong> Real-world engineers solving real-world problems.</li>
                <li><strong className="text-black">Tailored Solutions:</strong> No off-the-shelf gimmicks — just what fits your use case best.</li>
                <li><strong className="text-black">End-to-End Support:</strong> We guide you from idea to rollout to long-term scaling.</li>
                <li><strong className="text-black">Focus on ROI:</strong> We target efficiency, insight, and impact, not just hype.</li>
              </ul>
            </div>
          </div>

          {/* Right: Sticky CTA */}
          <Card className="w-full md:w-[320px] border border-gray-200 shadow-xl rounded-lg sticky md:top-28 self-start bg-white">
            <CardContent className="p-6 flex flex-col h-full">
              <div>
                <h3 className="font-bold text-xl mb-3 text-center text-black">Ready to Innovate with AI?</h3>
                <p className="text-sm text-gray-600 mb-5 text-center leading-relaxed">
                  Unlock new possibilities and gain a competitive edge. Let&apos;s discuss how AI can transform your business.
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <ScheduleButton />
                <a href="/AAT_Solutions_AI_ML_Brochure.pdf" download className="w-full">
                  <Button variant="outline" className="w-full py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                    Download AI/ML Brochure
                  </Button>
                </a>
              </div>
              <div className="mt-6 text-center text-sm text-gray-500 border-t pt-4 border-indigo-200">
                <p className="mb-2">
                  <a href="mailto:admin@aatsolutions.co.za" className="hover:underline flex items-center justify-center gap-2">
                    📧 admin@aatsolutions.co.za
                  </a>
                </p>
                <p>
                  <a href="tel:+27816515179" className="hover:underline flex items-center justify-center gap-2">
                    📞 +27 81 651 5179
                  </a>
                </p>
                <p className="mt-2">
                  <a href="https://wa.me/27816515179?text=Hello, I&apos;m contacting you regarding your AI & Machine Learning services." target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center justify-center gap-2">
                    📱 WhatsApp Us
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
