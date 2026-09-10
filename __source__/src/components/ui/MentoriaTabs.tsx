"use client";

import { useState } from "react";
import { PackageCard } from "./PackageCard";

export function MentoriaTabs() {
  const [activeTab, setActiveTab] = useState("8-9 STUDENTS");

  const tabs = ["8-9 STUDENTS", "10-12 STUDENTS", "COLLEGE GRADUATES", "WORKING PROFESSIONALS"];

  const packages = {
    "8-9 STUDENTS": [
      {
        planName: "Discover",
        price: "₹ 5,500",
        type: "STANDARD",
        features: [
          "Psychometric assessment to measure your interests",
          "1 career counselling session with Mentoria's expert career coaches",
          "Lifetime access to Knowledge Gateway",
          "Invites to live webinars by industry experts"
        ],
        excluded: [
          "Customised reports after each session with education pathways",
          "Guidance on studying abroad",
          "CV building during internships/graduation"
        ]
      },
      {
        planName: "Discover plus+",
        price: "₹ 15,000",
        type: "PREMIUM",
        features: [
          "Psychometric assessments to measure your interests, personality and abilities",
          "8 career counselling sessions (1 every year) with Mentoria's expert career coaches until graduation",
          "Lifetime access to Knowledge Gateway",
          "Invites to live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on studying abroad",
          "CV building during internships/graduation"
        ],
        excluded: []
      }
    ],
    "10-12 STUDENTS": [
      {
        planName: "Achieve Online",
        price: "₹ 5,999",
        type: "STANDARD",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career counselling session",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        excluded: [
          "Customised reports after each session with education pathways",
          "Guidance on studying abroad",
          "CV reviews during internships/graduation"
        ]
      },
      {
        planName: "Achieve Plus+",
        price: "₹ 10,599",
        type: "PREMIUM",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "4 career counselling sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on studying abroad",
          "CV reviews during internships/graduation"
        ],
        excluded: []
      }
    ],
    "COLLEGE GRADUATES": [
      {
        planName: "Ascend Online",
        price: "₹ 6,499",
        type: "STANDARD",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career counselling session",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        excluded: [
          "Customised reports after each session with information on certificate/online courses",
          "Guidance on studying abroad",
          "CV reviews for job application"
        ]
      },
      {
        planName: "Ascend Plus+",
        price: "₹ 10,599",
        type: "PREMIUM",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "3 career counselling sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with information on certificate/online courses",
          "Guidance on studying abroad",
          "CV reviews for job application"
        ],
        excluded: []
      }
    ],
    "WORKING PROFESSIONALS": [
      {
        planName: "Ascend Online",
        price: "₹ 6,499",
        type: "STANDARD",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career counselling session",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts"
        ],
        excluded: [
          "Customised reports after each session with information on certificate/online courses",
          "Guidance on studying abroad",
          "CV reviews for job application"
        ]
      },
      {
        planName: "Ascend Plus+",
        price: "₹ 10,599",
        type: "PREMIUM",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "3 career counselling sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with information on certificate/online courses",
          "Guidance on studying abroad",
          "CV reviews for job application"
        ],
        excluded: []
      }
    ]
  };

  const customPackages = [
    { title: "CV Building", price: "₹2000", desc: "Is your CV making a great first impression on your behalf? Our HR experts will help you build the kind of CV that stands out from the crowd and increases your chances of getting interview calls." },
    { title: "LinkedIn Profile Building", price: "₹2000", desc: "Revamp your LinkedIn profile with recommendations from recruitment experts to showcase your career journey and increase your chances of interview calls." },
    { title: "LinkedIn Profile + CV Building", price: "₹3500", desc: "Build the kind of profile recruiters would love to spend time on. Get your CV and LinkedIn profile built by our HR/Recruitment experts." },
    { title: "Job Application Strategy", price: "₹4000", desc: "Build the right pipeline for job interviews through a customised job application tracker with information on companies, job postings and steps you need to follow to land your dream job." },
    { title: "Career Report", price: "₹2500", desc: "Get a detailed report of your psychometric assessment for a scientific analysis of your interests, personality and abilities. Find out where your interests lie and which future paths you can potentially consider." },
    { title: "Career Report + Career Counselling", price: "₹4000", desc: "Connect with India's top career coaches to analyse your psychometric report, get a detailed action plan for your development areas and shortlist the top three career paths you're most likely to enjoy and excel at." },
    { title: "Knowledge Gateway + Career Helpline Access", price: "₹250/month", desc: "Unlock holistic information on your career paths and get direct access to Mentoria's experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from now until you land a job you love." },
    { title: "One-to-One Session with a Career Expert", price: "₹3500 per interaction for 1 hour", desc: "Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field." },
    { title: "Overseas Admission Planner", price: "₹3000 for a planner with top 10 colleges", desc: "Planning your masters studies? Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner." },
    { title: "Overseas Admission: SOP Brainstorm", price: "₹3000 for a one-hour session", desc: "Increase your chances of getting admissions in your dream college by structuring your SOP in the most ideal manner through discussions with an overseas admissions expert." },
    { title: "Overseas Admission: SOP Review", price: "₹2500", desc: "Is your SOP/Essay good enough to get you shortlisted? Get it reviewed by our team of overseas admissions experts to make sure you make the cut." },
    { title: "Interview Prep Session", price: "₹2000", desc: "Ace your upcoming interviews with guidance from India's top HR experts and increase your chances of landing your dream job." }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap border-b border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-sm font-semibold text-center transition-colors ${
              activeTab === tab
                ? "border-b-2 border-[#001F3F] text-[#001F3F] bg-blue-50"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 mt-10">
        {packages[activeTab as keyof typeof packages].map((pkg, idx) => (
          <div key={idx} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm relative overflow-hidden">
            {pkg.type === "PREMIUM" && (
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-pink-500 opacity-20"></div>
            )}
            {pkg.type === "STANDARD" && (
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-yellow-400 opacity-20"></div>
            )}
            
            <p className="text-sm font-bold text-[#001F3F]/60 mb-4">{pkg.type}</p>
            <h3 className="text-3xl font-bold text-[#001F3F] mb-2">{pkg.planName}</h3>
            <p className="text-4xl font-extrabold text-[#001F3F] mb-8">{pkg.price}</p>
            
            <ul className="mb-8 flex-1 space-y-4">
              {pkg.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start">
                  <svg className="h-6 w-6 shrink-0 text-[#001F3F] mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3 text-sm text-slate-700 leading-relaxed">{feature}</span>
                </li>
              ))}
              {pkg.excluded.map((feature: string, i: number) => (
                <li key={`ex-${i}`} className="flex items-start opacity-50">
                  <svg className="h-6 w-6 shrink-0 text-slate-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="ml-3 text-sm text-slate-500 line-through leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a href="/contact" style={{ color: "#ffffff" }} className={`mt-auto block w-full rounded-full py-3.5 text-center text-sm font-bold text-white transition-colors ${pkg.type === 'PREMIUM' ? 'bg-[#4353FF] hover:bg-blue-700' : 'bg-[#8F9CFF] hover:bg-blue-400'}`}>
              BUY NOW
            </a>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Want To Customise Your Mentorship Plan?</h2>
        <p className="text-slate-600 mb-10">If you want to subscribe to specific services from Mentoria that resolve your career challenges, you can choose one or more of the following:</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {customPackages.map((pkg, idx) => (
          <div key={idx} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
            <div className="mb-4 flex-1">
              <h4 className="text-lg font-bold text-[#001F3F]">{pkg.title}</h4>
              <p className="text-sm font-extrabold text-[#001F3F] mt-1">{pkg.price}</p>
              <p className="text-sm text-slate-600 mt-3">{pkg.desc}</p>
            </div>
            <a href="/contact" className="inline-block rounded bg-[#8F9CFF] px-6 py-2 text-sm font-bold text-white" style={{ color: "#ffffff" }} hover:bg-blue-500 text-center w-full sm:w-auto mt-4 self-start">
              BUY NOW
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
