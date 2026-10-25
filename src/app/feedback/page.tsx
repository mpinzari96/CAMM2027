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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#07101E]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src={conferenceData.logo}
                alt="CAMM Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden sm:block font-semibold text-white">
              CAMM <span className="text-accent">CONFERENCE</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground-muted hover:text-accent transition-colors uppercase tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/#schedule"
              className="text-sm font-medium text-foreground-muted hover:text-accent transition-colors uppercase tracking-wide"
            >
              Schedule
            </Link>
            <Link
              href="/#registration"
              className="text-sm font-medium text-foreground-muted hover:text-accent transition-colors uppercase tracking-wide"
            >
              Registration
            </Link>
            <Link
              href="/feedback"
              className="text-sm font-medium text-accent transition-colors uppercase tracking-wide"
            >
              Feedback
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={conferenceData.registration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-accent hover:bg-accent-hover text-[#07101E] font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
            >
              REGISTER NOW
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glassmorphism border-t border-border">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-foreground-muted hover:text-accent transition-colors uppercase tracking-wide border-b border-border/50"
              >
                Home
              </Link>
              <Link
                href="/#schedule"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-foreground-muted hover:text-accent transition-colors uppercase tracking-wide border-b border-border/50"
              >
                Schedule
              </Link>
              <Link
                href="/#registration"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-foreground-muted hover:text-accent transition-colors uppercase tracking-wide border-b border-border/50"
              >
                Registration
              </Link>
              <Link
                href="/feedback"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-accent transition-colors uppercase tracking-wide border-b border-border/50"
              >
                Feedback
              </Link>
              <a
                href={conferenceData.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 mt-4 bg-accent hover:bg-accent-hover text-[#07101E] font-semibold rounded-full transition-colors"
              >
                REGISTER NOW
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Your Voice Matters
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conference Feedback
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Help us improve CAMM Conference by sharing your experience and
              suggestions.
            </p>
          </div>

          {submitted ? (
            /* Success Message */
            <div className="max-w-2xl mx-auto">
              <div className="card-dark p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/50">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Thank You for Your Feedback!
                </h2>
                <p className="text-foreground-muted mb-8">
                  Your input is invaluable in helping us make CAMM Conference
                  even better. We appreciate you taking the time to share your
                  thoughts.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-[#07101E] font-bold rounded-full transition-all duration-300"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            /* Feedback Form */
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <div className="card-dark p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-accent" />
                    Your Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground-muted mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#07101E] border border-border rounded-lg text-white placeholder-foreground-muted/50 focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground-muted mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#07101E] border border-border rounded-lg text-white placeholder-foreground-muted/50 focus:outline-none focus:border-accent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="attendeeType"
                      className="block text-sm font-medium text-foreground-muted mb-2"
                    >
                      I attended as...
                    </label>
                    <select
                      id="attendeeType"
                      name="attendeeType"
                      value={formData.attendeeType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#07101E] border border-border rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select your role</option>
                      <option value="volunteer">Church Volunteer</option>
                      <option value="mediaDirector">
                        Media Director / Tech Lead
                      </option>
                      <option value="pastor">Pastor / Ministry Leader</option>
                      <option value="professional">
                        Media Professional
                      </option>
                      <option value="student">Student / Learning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Overall Rating */}
                <div className="card-dark p-8">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Star className="w-5 h-5 text-accent" />
                    Overall Experience
                  </h2>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground-muted mb-4">
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
                            className={`w-10 h-10 ${
                              star <= (hoveredRating || rating)
                                ? "text-amber-400 fill-amber-400"
                                : "text-foreground-muted/30"
                            } transition-colors`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="overallExperience"
                      className="block text-sm font-medium text-foreground-muted mb-2"
                    >
                      Tell us more about your experience
                    </label>
                    <textarea
                      id="overallExperience"
                      name="overallExperience"
                      value={formData.overallExperience}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#07101E] border border-border rounded-lg text-white placeholder-foreground-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="What stood out to you about this year's conference?"
                    />
                  </div>
                </div>

                {/* Sessions & Content */}
                <div className="card-dark p-8">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Sessions & Content
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="favoriteSession"
                        className="block text-sm font-medium text-foreground-muted mb-2"
                      >
                        What was your favorite session or track?
                      </label>
                      <textarea
                        id="favoriteSession"
                        name="favoriteSession"
                        value={formData.favoriteSession}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-[#07101E] border border-border rounded-lg text-white placeholder-foreground-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Which sessions did you find most valuable?"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="improvements"
                        className="block text-sm font-medium text-foreground-muted mb-2"
                      >
                        What could we improve for next year?
                      </label>
                      <textarea
                        id="improvements"
                        name="improvements"
                        value={formData.improvements}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-[#07101E] border border-border rounded-lg text-white placeholder-foreground-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Any suggestions for topics, speakers, or logistics?"
                      />
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="card-dark p-8">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Recommendation
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground-muted mb-4">
                        Would you recommend CAMM Conference to others?
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {[
                          "Definitely!",
                          "Probably",
                          "Maybe",
                          "Probably not",
                        ].map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="wouldRecommend"
                              value={option}
                              checked={formData.wouldRecommend === option}
                              onChange={handleChange}
                              className="w-4 h-4 accent-accent"
                            />
                            <span className="text-foreground-muted">
                              {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="additionalComments"
                        className="block text-sm font-medium text-foreground-muted mb-2"
                      >
                        Additional comments or suggestions
                      </label>
                      <textarea
                        id="additionalComments"
                        name="additionalComments"
                        value={formData.additionalComments}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-[#07101E] border border-border rounded-lg text-white placeholder-foreground-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Anything else you'd like to share with us?"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-10 py-4 bg-accent hover:bg-accent-hover text-[#07101E] font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                  >
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
      <footer className="py-12 bg-[#050c18] border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src={conferenceData.logo}
                  alt="CAMM Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-white">
                CAMM <span className="text-accent">CONFERENCE</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-foreground-muted hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#schedule"
                className="text-foreground-muted hover:text-accent transition-colors"
              >
                Schedule
              </Link>
              <a
                href={`tel:${conferenceData.contact.phone}`}
                className="flex items-center gap-2 text-foreground-muted hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                {conferenceData.contact.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-foreground-muted text-sm">
              &copy; {conferenceData.year} CAMM Conference. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
