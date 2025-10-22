"use client";
import React from "react";
import {
  CheckCircle2,
  Shield,
  Award,
  Calendar,
  Heart,
  Users,
  CircleCheckBig,
  Star,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F8F7F6]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#222]">
              Meet  Chloès beauty 
              <span className="block text-primary"> Aesthetics</span>
            </h2>
<p className="text-[#555] mb-6 leading-relaxed">
  Welcome to Chloè’s Beauty & Aesthetics — where elegance meets expertise. I’m Chloe, a passionate professional dedicated to helping you feel confident, radiant, and truly yourself through tailored beauty treatments.
</p>

<p className="text-[#666] mb-8 leading-relaxed">
  With a deep understanding of facial anatomy and modern aesthetic techniques, I aim to enhance your natural features with precision and care. At Chloè’s, your comfort, privacy, and satisfaction are my top priorities. I go above and beyond to create a warm, safe, and hygienic environment where you can relax and glow from the inside out.
</p>



            {/* Feature List */}
            <div className="space-y-3 mb-6">
              {[
                "Registered Nurse",
                "Aesthetic Medicine Certified",
                "5+ Years Experience",
                "Continuous Professional Development",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CircleCheckBig className="h-5 w-5 text-primary" />
                  <span className="text-[#333]">{item}</span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge icon={<Shield />} text="NMC Registered" />
              <Badge icon={<Award />} text="Aesthetic Certified" />
              <Badge icon={<Calendar />} text="Est. 2019" />
            </div>
          </div>

          {/* Right Column - Image & Cards */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="rounded-xl border border-[#EAEAEA] shadow-sm overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/nhero.jpeg"
                  alt="Bespoke Luxury - Aesthetic Nurse Practitioner"
                  className="object-cover w-full h-full"
                />
                
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Qualified Professional"
                text="Registered nurse with specialized training"
              />
              <InfoCard
                icon={<Heart className="h-8 w-8 text-primary" />}
                title="Personalized Care"
                text="Tailored treatments for individual needs"
              />
              <InfoCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="500+ Clients"
                text="Trusted by hundreds of satisfied clients"
              />
              <InfoCard
                icon={<CheckCircle2 className="h-8 w-8 text-primary" />}
                title="Natural Results"
                text="Subtle enhancements that look beautiful"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-[#222]">
            What Our Clients Say
          </h3>
          <p className="text-[#777]">Real reviews from real clients</p>
        </div>

   {/* Testimonials */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      name: "Nikki Jones",
      service: "Brows, Hands & Feet",
      review:
        "First visit today... Lovely salon, very friendly, very welcoming and absolutely fab job done on my eyebrows, hands and feet. Was made to feel very welcome and at ease.",
    },
    {
      name: "Sinead A",
      service: "Nail Treatments",
      review:
        "Me and my daughter went to see Chloe today. Nails were done amazing, very clean, and lovely atmosphere. Thank you! Recommend, and will be returning :)",
    },
    {
      name: "Nikki",
      service: "Nail Extensions, Sun Bed",
      review:
        "It was my first time seeing Chloe today after seeing the news article in the Chronicle. I have been desperate for a new nail technician and I am super happy with the results! My nails look amazing and Chloe is such a lovely girl. Pre-booked my next appointment and also bought minutes for the sun bed. Thank you so much x x",
    },
  ].map((item, i) => (
    <TestimonialCard key={i} {...item} />
  ))}
</div>


      </div>
    </section>
  );
}

/* Reusable Badge */
function Badge({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-primary text-white text-xs px-2 py-1">
      {icon}
      {text}
    </span>
  );
}

/* Reusable Info Card */
function InfoCard({ icon, title, text }) {
  return (
    <div className="text-center p-4 rounded-xl border border-[#EAEAEA] shadow-sm bg-white">
      <div className="mb-2 flex justify-center">{icon}</div>
      <h3 className="font-semibold text-sm mb-1 text-[#333]">{title}</h3>
      <p className="text-xs text-[#777]">{text}</p>
    </div>
  );
}

/* Reusable Testimonial Card */
function TestimonialCard({ name, service, review }) {
  return (
    <div className="rounded-xl border border-[#E5E2E1] shadow-sm bg-white/70 backdrop-blur-sm p-6 flex flex-col justify-between">
      {/* Star Rating */}
      <div className="flex mb-3 text-[#C5A67B]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#C5A67B" stroke="#C5A67B" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-sm text-[#555] italic mb-4">“{review}”</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-sm text-[#333]">{name}</p>
          <p className="text-xs text-[#777]">{service}</p>
        </div>
        <span className="text-xs text-[#555] border px-2 py-0.5 rounded-md">
          Verified Client
        </span>
      </div>
    </div>
  );
}
