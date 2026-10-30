"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  Star,
  MessageSquare,
  CheckCircle,
  Menu,
  X,
  Phone,
} from "lucide-react";
import { conferenceData } from "@/lib/conference-data";

export default function FeedbackPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [rating, setRating] = React.useState<number>(0);
  const [hoveredRating, setHoveredRating] = React.useState<number>(0);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    attendeeType: "",
    overallExperience: "",
    favoriteSession: "",
    improvements: "",
    wouldRecommend: "",
    additionalComments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", { ...formData, rating });
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#040811] overflow-x-hidden w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism hairline-b">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-[68px] sm:h-[76px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5">
            <Image
              src={conferenceData.logo}
              alt="CAMM Conference 2027"
              width={140}
              height={40}
              className="h-8 sm:h-10 w-auto max-w-[160px] object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-xs font-semibold tracking-[0.16em] uppercase text-[#A9BCD0] hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#schedule"
              className="text-xs font-semibold tracking-[0.16em] uppercase text-[#A9BCD0] hover:text-white transition-colors"
            >
              Schedule
            </Link>
            <Link
              href="/#registration"
              className="text-xs font-semibold tracking-[0.16em] uppercase text-[#A9BCD0] hover:text-white transition-colors"
            >
              Registration
            </Link>
            <Link
              href="/feedback"
              className="text-xs font-semibold tracking-[0.16em] uppercase text-white transition-colors"
            >
              Feedback
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={conferenceData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex btn-outline-accent"
            >
              Register Now
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#8ECAE6] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glassmorphism hairline-t">
            <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 space-y-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-[#A9BCD0] hover:text-[#8ECAE6] transition-colors uppercase tracking-[0.12em] text-sm font-semibold hairline-b"
              >
                Home
              </Link>
              <Link
                href="/#schedule"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-[#A9BCD0] hover:text-[#8ECAE6] transition-colors uppercase tracking-[0.12em] text-sm font-semibold hairline-b"
              >
                Schedule
              </Link>
              <Link
                href="/#registration"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-[#A9BCD0] hover:text-[#8ECAE6] transition-colors uppercase tracking-[0.12em] text-sm font-semibold hairline-b"
              >
                Registration
              </Link>
              <Link
                href="/feedback"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-[#8ECAE6] transition-colors uppercase tracking-[0.12em] text-sm font-semibold hairline-b"
              >
                Feedback
              </Link>
              <a
                href={conferenceData.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 mt-4 btn-solid-accent"
              >
                Register Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-[92px] sm:pt-[100px] pb-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 min-w-0">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#A9BCD0] hover:text-[#8ECAE6] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-[0.2em] text-[#8ECAE6] uppercase mb-3">
              Your Voice Matters
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Conference Feedback
            </h1>
            <p className="text-base sm:text-lg text-[#94A8BE] max-w-xl mx-auto">
              Help us improve CAMM Conference by sharing your experience and suggestions.
            </p>
          </div>

          {submitted ? (
            /* Success Message */
            <div className="max-w-2xl mx-auto">
              <div className="card-dark p-5 sm:p-8 lg:p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/50">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Thank You for Your Feedback!
                </h2>
                <p className="text-[#94A8BE] mb-8">
                  Your input is invaluable in helping us make CAMM Conference even better. We
                  appreciate you taking the time to share your thoughts.
                </p>
                <Link href="/" className="btn-solid-accent inline-flex w-full sm:w-auto justify-center">
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            /* Feedback Form */
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="card-dark p-5 sm:p-8 min-w-0">
                  <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#8ECAE6] flex-shrink-0" />
                    Your Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#94A8BE] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#040811] border border-[rgba(255,255,255,0.08)] rounded-lg text-white placeholder-[#6E849B] focus:outline-none focus:border-[#8ECAE6] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#94A8BE] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#040811] border border-[rgba(255,255,255,0.08)] rounded-lg text-white placeholder-[#6E849B] focus:outline-none focus:border-[#8ECAE6] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="attendeeType" className="block text-sm font-medium text-[#94A8BE] mb-2">
                      I attended as...
                    </label>
                    <select
                      id="attendeeType"
                      name="attendeeType"
                      value={formData.attendeeType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#040811] border border-[rgba(255,255,255,0.08)] rounded-lg text-white focus:outline-none focus:border-[#8ECAE6] transition-colors"
                    >
                      <option value="">Select your role</option>
                      <option value="volunteer">Church Volunteer</option>
                      <option value="mediaDirector">Media Director / Tech Lead</option>
                      <option value="pastor">Pastor / Ministry Leader</option>
                      <option value="professional">Media Professional</option>
                      <option value="student">Student / Learning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Overall Rating */}
                <div className="card-dark p-5 sm:p-8 min-w-0">
                  <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#8ECAE6] flex-shrink-0" />
                    Overall Experience
                  </h2>
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-[#94A8BE] mb-4">
                      How would you rate your overall conference experience?
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="p-1 transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 sm:w-10 sm:h-10 ${
                              star <= (hoveredRating || rating)
                                ? "text-amber-400 fill-amber-400"
                                : "text-[#4A5568]"
                            } transition-colors`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="overallExperience" className="block text-sm font-medium text-[#94A8BE] mb-2">
                      Tell us more about your experience
                    </label>
                    <textarea
                      id="overallExperience"
                      name="overallExperience"
                      value={formData.overallExperience}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#040811] border border-[rgba(255,255,255,0.08)] rounded-lg text-white placeholder-[#6E849B] focus:outline-none focus:border-[#8ECAE6] transition-colors resize-none"
                      placeholder="What stood out to you about this year's conference?"
                    />
                  </div>
                </div>

                {/* Sessions & Content */}
                <div className="card-dark p-5 sm:p-8 min-w-0">
                  <h2 className="text-lg font-bold text-white mb-6">Sessions & Content</h2>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="favoriteSession" className="block text-sm font-medium text-[#94A8BE] mb-2">
                        What was your favorite session or lesson?
                      </label>
                      <textarea
                        id="favoriteSession"
                        name="favoriteSession"
                        value={formData.favoriteSession}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-[#040811] border border-[rgba(255,255,255,0.08)] rounded-lg text-white placeholder-[#6E849B] focus:outline-none focus:border-[#8ECAE6] transition-colors resize-none"
                        placeholder="Which sessions did you find most valuable?"
                      />
                    </div>
                    <div>
                      <label htmlFor="improvements" className="block text-sm font-medium text-[#94A8BE] mb-2">
                        What could we improve for next year?
                      </label>
                      <textarea
                        id="improvements"
                        name="improvements"
                        value={formData.improvements}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-[#040811] border border-[rgba(255,255,255,0.08)] rounded-lg text-white placeholder-[#6E849B] focus:outline-none focus:border-[#8ECAE6] transition-colors resize-none"
                        placeholder="Any suggestions for topics, speakers, or logistics?"
                      />
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="card-dark p-5 sm:p-8 min-w-0">
                  <h2 className="text-lg font-bold text-white mb-6">Recommendation</h2>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-[#94A8BE] mb-4">
                        Would you recommend CAMM Conference to others?
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {["Definitely!", "Probably", "Maybe", "Probably not"].map((option) => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="wouldRecommend"
                              value={option}
                              checked={formData.wouldRecommend === option}
                              onChange={handleChange}
                              className="w-4 h-4 accent-[#8ECAE6]"
                            />
                            <span className="text-[#94A8BE]">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="additionalComments" className="block text-sm font-medium text-[#94A8BE] mb-2">
                        Additional comments or suggestions
                      </label>
                      <textarea
                        id="additionalComments"
                        name="additionalComments"
                        value={formData.additionalComments}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-[#040811] border border-[rgba(255,255,255,0.08)] rounded-lg text-white placeholder-[#6E849B] focus:outline-none focus:border-[#8ECAE6] transition-colors resize-none"
                        placeholder="Anything else you'd like to share with us?"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn-solid-accent inline-flex w-full sm:w-auto justify-center">
                    <Send className="w-5 h-5" />
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-7 bg-[#03060D] hairline-t">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <Image
              src={conferenceData.logo}
              alt="CAMM Conference 2027"
              width={120}
              height={34}
              className="h-8 w-auto object-contain"
            />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link href="/" className="text-[#A9BCD0] hover:text-[#8ECAE6] transition-colors text-sm">
              Home
            </Link>
            <Link href="/#schedule" className="text-[#A9BCD0] hover:text-[#8ECAE6] transition-colors text-sm">
              Schedule
            </Link>
            <a
              href={`tel:${conferenceData.contact.phone}`}
              className="flex items-center gap-2 text-[#A9BCD0] hover:text-[#8ECAE6] transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              {conferenceData.contact.phoneDisplay}
            </a>
          </div>

          <div className="text-xs text-[#6E849B]">
            © {conferenceData.year} CAMM Conference. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
