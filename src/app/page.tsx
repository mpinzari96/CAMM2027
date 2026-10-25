"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Video,
  Mic2,
  Monitor,
  Camera,
  Users,
  GraduationCap,
  TrendingUp,
  Calendar,
  MapPin,
  Clock,
  Play,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Shield,
  CheckCircle,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import { conferenceData } from "@/lib/conference-data";

const iconMap: Record<string, React.ElementType> = {
  Video,
  Mic2,
  Monitor,
  Camera,
  Users,
  GraduationCap,
  TrendingUp,
};

export default function CAMMConference2027() {
  const [activeDay, setActiveDay] = React.useState<1 | 2>(1);
  const [activeTrack, setActiveTrack] = React.useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);
  const [iframeBlocked, setIframeBlocked] = React.useState(false);
  const [iframeLoading, setIframeLoading] = React.useState(true);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (iframeLoading) {
        setIframeBlocked(true);
        setIframeLoading(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [iframeLoading]);

  const handleIframeLoad = () => {
    setIframeLoading(false);
    setIframeBlocked(false);
  };

  const currentSchedule =
    activeDay === 1
      ? conferenceData.schedule.day1
      : conferenceData.schedule.day2;

  const filteredEvents = currentSchedule.events.filter((event) => {
    if (activeTrack === "all") return true;
    if (event.type !== "lesson") return true;
    return event.tracks && activeTrack in event.tracks;
  });

  return (
    <div className="min-h-screen bg-[#07101E]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-3">
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
            {conferenceData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground-muted hover:text-accent transition-colors uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
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
              {conferenceData.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-foreground-muted hover:text-accent transition-colors uppercase tracking-wide border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}
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

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07101E] via-[#0B1526] to-[#07101E]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1RUIwRjgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        {/* Decorative stage lighting effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-b from-accent/10 via-transparent to-transparent blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-medium text-accent uppercase tracking-widest">
                Welcome to the
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block text-white">CAMM</span>
              <span className="block text-accent">CONFERENCE</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground-muted mb-4 max-w-3xl mx-auto">
              {conferenceData.tagline}
            </p>
            <p className="text-lg text-foreground-muted/70 mb-8 max-w-2xl mx-auto">
              {conferenceData.fullName}
            </p>

            {/* Event Badge */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-white">
                  {conferenceData.dates.shortDisplay}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-white">
                  {conferenceData.venue.fullAddress}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#registration"
                className="flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-[#07101E] font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 text-lg"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#schedule"
                className="flex items-center gap-2 px-8 py-4 border-2 border-accent/50 hover:border-accent text-white font-semibold rounded-full transition-all duration-300 hover:bg-accent/10"
              >
                <Play className="w-5 h-5" />
                View Schedule
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-accent/50" />
        </div>
      </section>

      {/* 4-Column Track & Feature Strip */}
      <section id="tracks" className="py-20 bg-[#0B1526] border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {conferenceData.tracks.map((track) => {
              const Icon = iconMap[track.icon] || Video;
              return (
                <div
                  key={track.id}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-card border border-border group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 uppercase tracking-wide">
                    {track.name}
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    {track.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section id="about" className="py-20 bg-[#07101E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Why Attend
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Attend CAMM?
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Two days of inspiration, fellowship, and practical training for
              advancing God&apos;s kingdom through media ministry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {conferenceData.whyAttend.map((item) => {
              const Icon = iconMap[item.icon] || Users;
              return (
                <div key={item.id} className="card-dark-hover p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent/10 border border-accent/30">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {item.name}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule & Registration Split Section */}
      <section id="schedule" className="py-20 bg-[#0B1526]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - Schedule */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 text-sm font-medium text-accent uppercase tracking-widest mb-4">
                  Daily Schedule
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Conference Schedule
                </h2>
                <p className="text-foreground-muted">
                  {conferenceData.dates.days} days of inspiration, training, and
                  community.
                </p>
              </div>

              {/* Day Tabs */}
              <div className="flex flex-wrap gap-4 mb-6">
                <button
                  onClick={() => setActiveDay(1)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeDay === 1
                      ? "bg-accent text-[#07101E] shadow-lg shadow-accent/30"
                      : "bg-card border border-border text-foreground-muted hover:border-accent/50"
                  }`}
                >
                  <span className="block text-xs uppercase tracking-wider opacity-70">
                    Day 1
                  </span>
                  <span className="block">
                    {conferenceData.schedule.day1.shortDate}
                  </span>
                </button>
                <button
                  onClick={() => setActiveDay(2)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeDay === 2
                      ? "bg-accent text-[#07101E] shadow-lg shadow-accent/30"
                      : "bg-card border border-border text-foreground-muted hover:border-accent/50"
                  }`}
                >
                  <span className="block text-xs uppercase tracking-wider opacity-70">
                    Day 2
                  </span>
                  <span className="block">
                    {conferenceData.schedule.day2.shortDate}
                  </span>
                </button>
              </div>

              {/* Track Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button
                  onClick={() => setActiveTrack("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTrack === "all"
                      ? "bg-accent/20 text-accent border border-accent/50"
                      : "bg-card/50 text-foreground-muted border border-transparent hover:border-border"
                  }`}
                >
                  All Tracks
                </button>
                {conferenceData.tracks.map((track) => (
                  <button
                    key={track.id}
                    onClick={() => setActiveTrack(track.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTrack === track.id
                        ? "bg-accent/20 text-accent border border-accent/50"
                        : "bg-card/50 text-foreground-muted border border-transparent hover:border-border"
                    }`}
                  >
                    {track.name}
                  </button>
                ))}
              </div>

              {/* Day Theme */}
              <div className="mb-6 p-4 bg-card rounded-xl border border-border">
                <p className="text-accent font-medium text-sm uppercase tracking-wider mb-1">
                  {currentSchedule.dayLabel} Theme
                </p>
                <p className="text-white font-semibold">
                  {currentSchedule.theme}
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                {filteredEvents.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Timeline Node */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          event.type === "lesson" || event.type === "workshop"
                            ? "bg-accent glow-accent"
                            : event.type === "meal"
                            ? "bg-emerald-500"
                            : event.type === "break"
                            ? "bg-foreground-muted/30"
                            : "bg-accent/50"
                        }`}
                      ></div>
                      {index < filteredEvents.length - 1 && (
                        <div className="w-px h-full bg-border min-h-[60px]"></div>
                      )}
                    </div>

                    {/* Event Content */}
                    <div
                      className={`flex-1 pb-4 ${
                        event.type === "break" ? "opacity-60" : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-accent font-mono text-sm">
                          {event.time}
                        </span>
                        {event.location && (
                          <span className="text-xs text-foreground-muted bg-card px-2 py-0.5 rounded">
                            {event.location}
                          </span>
                        )}
                      </div>
                      <h4 className="text-white font-semibold">{event.title}</h4>
                      {event.subtitle && (
                        <p className="text-foreground-muted text-sm">
                          {event.subtitle}
                        </p>
                      )}

                      {/* Track Details for Lessons */}
                      {event.tracks && (
                        <div className="mt-3 space-y-2 pl-4 border-l-2 border-accent/30">
                          {Object.entries(event.tracks)
                            .filter(
                              ([track]) =>
                                activeTrack === "all" || track === activeTrack
                            )
                            .map(([track, topic]) => (
                              <div key={track} className="text-sm">
                                <span className="text-accent font-medium capitalize">
                                  {track}:
                                </span>{" "}
                                <span className="text-foreground-muted">
                                  {topic}
                                </span>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Registration Hub */}
            <div className="lg:col-span-2 space-y-6">
              {/* Registration Card */}
              <div className="card-dark p-8">
                <span className="inline-block px-4 py-2 text-sm font-medium text-accent uppercase tracking-widest mb-4">
                  Get Involved
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Registration is Open
                </h3>
                <p className="text-foreground-muted mb-6">
                  Join us for {conferenceData.dates.days} days of powerful
                  teaching, practical training, and meaningful connections.
                </p>
                <a
                  href="#registration"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-accent hover:bg-accent-hover text-[#07101E] font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                >
                  REGISTER NOW
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="card-dark p-4 text-center">
                  <Calendar className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-xs text-foreground-muted uppercase tracking-wider">
                    {conferenceData.dates.shortDisplay}
                  </p>
                  <p className="text-sm text-white font-medium mt-1">
                    {conferenceData.dates.days} Days
                  </p>
                </div>
                <div className="card-dark p-4 text-center">
                  <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-xs text-foreground-muted uppercase tracking-wider">
                    {conferenceData.venue.city}, {conferenceData.venue.state}
                  </p>
                  <p className="text-sm text-white font-medium mt-1">
                    {conferenceData.venue.name}
                  </p>
                </div>
                <div className="card-dark p-4 text-center">
                  <Video className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-xs text-foreground-muted uppercase tracking-wider">
                    In-Person &
                  </p>
                  <p className="text-sm text-white font-medium mt-1">
                    Hands-on
                  </p>
                </div>
              </div>

              {/* Quote Card */}
              <div className="card-dark p-8 relative overflow-hidden">
                <div className="absolute top-4 left-4 text-6xl text-accent/10 font-serif">
                  &ldquo;
                </div>
                <blockquote className="relative z-10 text-lg text-white italic leading-relaxed">
                  &ldquo;{conferenceData.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section with Subsplash Embed */}
      <section id="registration" className="py-20 bg-[#07101E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Secure Your Spot
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Register for CAMM 2027
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Complete your registration below to join fellow believers at CAMM
              Conference 2027
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-dark overflow-hidden">
              {/* Registration Header */}
              <div className="p-6 bg-accent/10 border-b border-border">
                <h3 className="text-xl font-semibold text-white text-center">
                  Complete Your Registration
                </h3>
                <p className="text-foreground-muted text-center mt-2">
                  {conferenceData.dates.display} • {conferenceData.venue.name},{" "}
                  {conferenceData.venue.city}, {conferenceData.venue.state}
                </p>
              </div>

              {/* Iframe Container */}
              <div className="p-6">
                {iframeLoading && !iframeBlocked && (
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin mb-4"></div>
                    <p className="text-foreground-muted">
                      Loading registration form...
                    </p>
                  </div>
                )}

                {iframeBlocked ? (
                  <div className="py-12 text-center">
                    <AlertCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Registration Form Not Loading?
                    </h4>
                    <p className="text-foreground-muted mb-6 max-w-md mx-auto">
                      If you&apos;re using an ad-blocker or have strict browser
                      privacy settings, the embedded form may not display. No
                      worries! Use the button below to complete your
                      registration.
                    </p>
                    <a
                      href={conferenceData.registration.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-[#07101E] font-bold rounded-full transition-all duration-300"
                    >
                      Open Official Registration
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <p className="text-sm text-foreground-muted mt-4">
                      Opens Subsplash registration in a new tab
                    </p>
                  </div>
                ) : (
                  <div
                    className={`w-full rounded-lg overflow-hidden border border-border ${
                      iframeLoading ? "hidden" : ""
                    }`}
                  >
                    <iframe
                      ref={iframeRef}
                      src={conferenceData.registration.url}
                      width="100%"
                      height="700"
                      frameBorder="0"
                      className="w-full bg-white"
                      title="CAMM Conference Registration"
                      onLoad={handleIframeLoad}
                      onError={() => setIframeBlocked(true)}
                    />
                  </div>
                )}

                {/* Alternative Registration Link */}
                {!iframeBlocked && !iframeLoading && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-foreground-muted">
                      Having trouble?{" "}
                      <a
                        href={conferenceData.registration.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Open registration in new tab
                      </a>
                    </p>
                  </div>
                )}
              </div>

              {/* Trust Signals */}
              <div className="p-6 bg-card border-t border-border">
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Secure Payment via Subsplash</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Instant Confirmation</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Full Refund Policy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Registration Help */}
            <div className="mt-8 text-center">
              <p className="text-foreground-muted">
                Questions about registration? Contact us at{" "}
                <a
                  href={`tel:${conferenceData.contact.phone}`}
                  className="text-accent hover:underline"
                >
                  {conferenceData.contact.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#0B1526]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {conferenceData.faqs.map((faq, index) => (
              <div key={index} className="card-dark overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-card-hover transition-colors"
                >
                  <span className="text-white font-semibold pr-4">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-foreground-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-20 bg-[#07101E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-medium text-accent uppercase tracking-widest mb-4">
              Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Location & Contact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Venue Card */}
            <div className="card-dark-hover p-8">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Venue</h3>
              <p className="text-foreground-muted mb-4">
                {conferenceData.venue.name}
                <br />
                {conferenceData.venue.city}, {conferenceData.venue.state}
              </p>
              <a
                href={conferenceData.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
              >
                View on Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Contact Card */}
            <div className="card-dark-hover p-8">
              <Phone className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
              <p className="text-foreground-muted mb-4">
                Questions? We&apos;re here to help!
              </p>
              <a
                href={`tel:${conferenceData.contact.phone}`}
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-xl font-semibold"
              >
                <Phone className="w-5 h-5" />
                {conferenceData.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#050c18] border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
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
              <p className="text-foreground-muted max-w-sm">
                {conferenceData.fullName} - Equipping creators and advancing the
                mission through media ministry.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {conferenceData.navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-foreground-muted hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  href="/feedback"
                  className="block text-foreground-muted hover:text-accent transition-colors"
                >
                  Feedback
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2">
                <a
                  href={`tel:${conferenceData.contact.phone}`}
                  className="flex items-center gap-2 text-foreground-muted hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {conferenceData.contact.phoneDisplay}
                </a>
                <p className="text-foreground-muted">
                  {conferenceData.venue.city}, {conferenceData.venue.state}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-foreground-muted text-sm">
              &copy; {conferenceData.year} CAMM Conference. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
