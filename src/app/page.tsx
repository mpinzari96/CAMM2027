"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Video,
  Mic2,
  Monitor,
  Film,
  Users,
  GraduationCap,
  TrendingUp,
  MapPin,
  Play,
  ArrowRight,
  Menu,
  X,
  Phone,
  ChevronDown,
  ChevronUp,
  Shield,
  CheckCircle,
  ExternalLink,
  AlertCircle,
  Volume2,
  Maximize2,
} from "lucide-react";
import { conferenceData, getPricingState } from "@/lib/conference-data";

const iconMap: Record<string, React.ElementType> = {
  Video,
  Mic2,
  Monitor,
  Film,
  Users,
  GraduationCap,
  TrendingUp,
};

const DESKTOP_LAYOUT_QUERY = "(min-width: 1024px)";

function getFirstBreakoutIndex(events: typeof conferenceData.schedule.day1.events): number | null {
  const index = events.findIndex((e) => e.isBreakout);
  return index >= 0 ? index : null;
}

function isDesktopScheduleLayout() {
  return window.matchMedia(DESKTOP_LAYOUT_QUERY).matches;
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

export default function CAMMConference2027() {
  const [activeDay, setActiveDay] = React.useState<1 | 2>(1);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);
  const [iframeBlocked, setIframeBlocked] = React.useState(false);
  const [iframeLoading, setIframeLoading] = React.useState(true);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const pricing = getPricingState();

  const currentSchedule = activeDay === 1 ? conferenceData.schedule.day1 : conferenceData.schedule.day2;
  
  const [selectedBreakout, setSelectedBreakout] = React.useState<number | null>(() => 
    getFirstBreakoutIndex(conferenceData.schedule.day1.events)
  );

  const handleDayChange = (day: 1 | 2) => {
    setActiveDay(day);
    const newSchedule = day === 1 ? conferenceData.schedule.day1 : conferenceData.schedule.day2;
    setSelectedBreakout(getFirstBreakoutIndex(newSchedule.events));
  };

  const handleBreakoutSelect = (index: number) => {
    setSelectedBreakout(index);
    if (typeof window === "undefined" || isDesktopScheduleLayout()) return;
    requestAnimationFrame(() => {
      document.getElementById("breakout-matrix")?.scrollIntoView({
        behavior: scrollBehavior(),
        block: "start",
      });
    });
  };

  const handleBackToSchedule = () => {
    if (typeof window === "undefined") return;
    document.getElementById("schedule-timeline")?.scrollIntoView({
      behavior: scrollBehavior(),
      block: "start",
    });
  };

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

  const selectedEvent = selectedBreakout !== null ? currentSchedule.events[selectedBreakout] : null;

  return (
    <div className="min-h-screen bg-[#040811] overflow-x-hidden w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism hairline-b">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-[68px] sm:h-[76px] flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-3.5">
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
            {conferenceData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-[0.16em] uppercase text-[#A9BCD0] hover:text-white transition-colors"
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
            <nav className="max-w-[1280px] mx-auto px-6 py-6 space-y-4">
              {conferenceData.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-[#A9BCD0] hover:text-[#8ECAE6] transition-colors uppercase tracking-[0.12em] text-sm font-semibold hairline-b"
                >
                  {item.label}
                </a>
              ))}
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

      {/* Hero Section with Cinema Video Dock */}
      <section
        id="home"
        className="relative pt-[68px] sm:pt-[76px]"
        style={{
          background: `linear-gradient(180deg, rgba(4,8,17,0.42) 0%, rgba(4,8,17,0.78) 70%, #040811 100%), url('/mockup-assets/hero-bg.jpg') center/cover no-repeat`,
        }}
      >
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 pb-8 sm:pb-11 text-center">
          {/* Eyebrow */}
          <div className="text-[11px] sm:text-[13px] font-bold tracking-[0.14em] sm:tracking-[0.24em] text-[#8ECAE6] uppercase mb-3">
            {conferenceData.fullName} • {conferenceData.dates.shortDisplay}
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-light tracking-[0.04em] sm:tracking-[0.08em] uppercase text-white mb-3 leading-tight break-words">
            Welcome to the{" "}
            <strong className="font-extrabold whitespace-nowrap">Conference</strong>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-[19px] text-[#C7D7E8] mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            {conferenceData.tagline}
          </p>

          {/* Cinema Video Dock */}
          <div className="cinema-dock max-w-[860px] mx-auto p-4 sm:p-5 flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            {/* Thumbnail */}
            <div
              className="w-full md:w-[190px] h-[100px] sm:h-[106px] rounded-[10px] border border-[rgba(142,202,230,0.45)] flex-shrink-0 flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url('/mockup-assets/camera-monitor.jpg')` }}
            >
              <button className="play-circle">
                <Play className="w-[18px] h-[18px] text-white fill-white ml-0.5" />
              </button>
            </div>

            {/* Video Info */}
            <div className="flex-1 text-center md:text-left min-w-0">
              <div className="text-[10px] sm:text-xs font-extrabold tracking-[0.12em] sm:tracking-[0.16em] text-[#8ECAE6] uppercase mb-1.5">
                Watch Welcome Video • 2:18
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1.5 break-words">
                Inside CAMM 2027: 4 Lessons, Live Stage Labs & Fellowship
              </div>
              <div className="text-xs sm:text-sm text-[#94A8BE] hidden sm:block">
                Click to play full-screen with audio or scrub the preview timeline below.
              </div>
            </div>

            {/* Play Button */}
            <button className="btn-solid-accent w-full md:w-auto justify-center flex-shrink-0">
              Play Intro <Play className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>

        {/* Scrubber Bar */}
        <div className="scrubber-bar px-4 sm:px-6 lg:px-10 py-3 flex items-center gap-2.5 sm:gap-5">
          <button className="text-[#8ECAE6] hover:text-white transition-colors flex-shrink-0">
            <Play className="w-4 h-4 fill-current" />
          </button>
          <div className="scrubber-track min-w-0 flex-1">
            <div className="scrubber-fill" style={{ width: "0%" }}></div>
            <div className="scrubber-knob" style={{ left: "0%" }}></div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-semibold tracking-[0.08em] text-[#B8CBE0] tabular-nums flex-shrink-0">
            <span>0:00 / 2:18</span>
            <button className="text-[#8ECAE6] hover:text-white transition-colors hidden sm:block">
              <Volume2 className="w-4 h-4" />
            </button>
            <span className="hd-badge">HD</span>
            <button className="flex items-center gap-1 text-[#B8CBE0] hover:text-white transition-colors">
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">FULLSCREEN</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4-Column Lesson Strip */}
      <section id="lessons" className="bg-[#050A14] hairline-b">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {conferenceData.tracks.map((track, index) => {
            const Icon = iconMap[track.icon] || Video;
            return (
              <div
                key={track.id}
                className={`p-5 sm:p-7 flex items-start gap-4 min-w-0 hairline-b sm:hairline-b-0 ${
                  index < 3 ? "lg:hairline-r" : ""
                } ${index % 2 === 0 ? "sm:hairline-r lg:hairline-r" : "sm:hairline-r-0"} ${
                  index < 2 ? "sm:hairline-b lg:hairline-b-0" : ""
                }`}
              >
                <div className="track-icon-box flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-extrabold tracking-[0.10em] sm:tracking-[0.14em] uppercase text-white mb-1.5">
                    {track.name}
                  </div>
                  <div className="text-xs sm:text-sm text-[#94A8BE] leading-[1.45]">
                    {track.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Master-Detail Schedule & Breakout Track Matrix */}
      <section id="schedule" className="hairline-b">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 lg:hairline-l lg:hairline-r">
          {/* Left Column - Schedule Timeline */}
          <div className="p-5 sm:p-8 lg:p-12 min-w-0 lg:hairline-r">
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#8ECAE6] uppercase mb-2">
              Lessons
            </div>
            <h2 className="text-2xl sm:text-[28px] font-extrabold tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white mb-3 break-words">
              Conference Schedule
            </h2>
            <p className="text-sm sm:text-base text-[#94A8BE] mb-4 leading-relaxed">
              {conferenceData.experienceSubtitle}
            </p>

            <p className="text-xs sm:text-sm text-[#8FA5BC] mb-4">
              {conferenceData.trackLegend}
            </p>

            {/* Day Switcher */}
            <div className="flex flex-col lg:flex-row flex-wrap gap-2 mb-4 min-w-0">
              <button
                onClick={() => handleDayChange(1)}
                className={`w-full lg:flex-1 lg:max-w-[calc(50%-0.25rem)] min-w-0 px-4 py-2.5 sm:px-5 rounded-[12px] text-left transition-all ${
                  activeDay === 1
                    ? "bg-[#8ECAE6] text-[#040811]"
                    : "border border-[rgba(255,255,255,0.14)] text-[#9FB2C7] hover:border-[#8ECAE6]/50"
                }`}
              >
                <span className="block text-xs sm:text-[13px] font-extrabold tracking-[0.08em] sm:tracking-[0.12em] uppercase">
                  Day 1 ({conferenceData.schedule.day1.shortDate})
                </span>
                <span className="block mt-1 text-[11px] sm:text-xs font-semibold leading-snug tracking-normal normal-case break-words">
                  {conferenceData.schedule.day1.theme}
                </span>
              </button>
              <button
                onClick={() => handleDayChange(2)}
                className={`w-full lg:flex-1 lg:max-w-[calc(50%-0.25rem)] min-w-0 px-4 py-2.5 sm:px-5 rounded-[12px] text-left transition-all ${
                  activeDay === 2
                    ? "bg-[#8ECAE6] text-[#040811]"
                    : "border border-[rgba(255,255,255,0.14)] text-[#9FB2C7] hover:border-[#8ECAE6]/50"
                }`}
              >
                <span className="block text-xs sm:text-[13px] font-extrabold tracking-[0.08em] sm:tracking-[0.12em] uppercase">
                  Day 2 ({conferenceData.schedule.day2.shortDate})
                </span>
                <span className="block mt-1 text-[11px] sm:text-xs font-semibold leading-snug tracking-normal normal-case break-words">
                  {conferenceData.schedule.day2.theme}
                </span>
              </button>
            </div>

            <div className="mb-6 min-w-0">
              <h3 className="text-sm sm:text-base font-extrabold text-white break-words">
                {currentSchedule.dayLabel} ({currentSchedule.shortDate})
              </h3>
              <p className="text-sm text-[#8ECAE6] mt-1 break-words leading-snug">
                {currentSchedule.theme}
              </p>
            </div>

            {/* Timeline: dedicated 12px rail keeps dots on the spine, clear of time text */}
            <div
              id="schedule-timeline"
              className="relative min-w-0 scroll-mt-[88px] sm:scroll-mt-[96px]"
              data-timeline
            >
              <div className="timeline-spine-line" aria-hidden="true" data-timeline-spine />
              {currentSchedule.events.map((event, index) => {
                const isSelected = selectedBreakout === index;
                const isBreakout = event.isBreakout;

                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 sm:gap-4 min-w-0 ${
                      isSelected ? "my-2" : ""
                    }`}
                    data-timeline-row
                  >
                    <div className="timeline-rail" data-timeline-rail>
                      <div
                        className={`timeline-node ${
                          isBreakout
                            ? "bg-[#8ECAE6] shadow-[0_0_12px_rgba(142,202,230,0.6)]"
                            : "bg-[#4A5568]"
                        }`}
                        data-timeline-dot
                      />
                    </div>

                    <div
                      className={`flex-1 min-w-0 py-4 grid grid-cols-1 sm:grid-cols-[minmax(10.75rem,auto)_1fr] gap-1 sm:gap-4 ${
                        isSelected ? "schedule-row-selected px-3" : ""
                      } ${!isSelected && index < currentSchedule.events.length - 1 ? "hairline-b" : ""}`}
                    >
                      <div
                        className={`text-base sm:text-lg font-bold tabular-nums ${
                          isSelected ? "text-[#8ECAE6]" : "text-[#DCEBFA]"
                        }`}
                        data-event-time
                      >
                        {event.time}
                      </div>

                      <div className="min-w-0">
                        {isBreakout ? (
                          <button
                            type="button"
                            onClick={() => handleBreakoutSelect(index)}
                            className="text-left w-full min-w-0"
                          >
                            <div className="text-lg sm:text-xl font-bold text-white break-words">
                              {event.title}
                              {isSelected && (
                                <span className="ml-2 text-[#8ECAE6]">(Selected →)</span>
                              )}
                            </div>
                            <div
                              className={`text-sm sm:text-[15px] mt-1 break-words ${
                                isSelected ? "text-[#B8D8EE]" : "text-[#8FA5BC]"
                              }`}
                            >
                              {event.subtitle}
                            </div>
                          </button>
                        ) : (
                          <>
                            <div className="text-lg sm:text-xl font-bold text-white break-words">{event.title}</div>
                            <div className="text-sm sm:text-[15px] text-[#8FA5BC] mt-1 break-words">{event.subtitle}</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Breakout Track Matrix & Registration */}
          <div className="p-5 sm:p-8 lg:p-12 min-w-0 bg-[#050A14]">
            {/* Breakout Track Matrix Inspector */}
            {selectedEvent && selectedEvent.isBreakout && selectedEvent.sessions && (
              <div
                id="breakout-matrix"
                className="matrix-card mb-6 min-w-0 scroll-mt-[88px] sm:scroll-mt-[96px]"
              >
                <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                  <div className="text-[10px] sm:text-xs font-extrabold tracking-[0.12em] sm:tracking-[0.16em] text-[#8ECAE6] uppercase break-words">
                    {selectedEvent.time} • {selectedEvent.title} • {selectedEvent.sessions.length}{" "}
                    {selectedEvent.sessions.length === 1 ? "Session" : "Sessions"}
                  </div>
                  <span className="text-xs text-[#94A8BE] hidden lg:inline">Click any lesson on left</span>
                </div>
                <button
                  type="button"
                  onClick={handleBackToSchedule}
                  className="lg:hidden mb-3 text-xs font-semibold tracking-[0.08em] uppercase text-[#8ECAE6] hover:text-[#9AD4EE] transition-colors"
                >
                  ← Back to schedule
                </button>
                <p className="text-[11px] text-[#8FA5BC] mb-4">{conferenceData.trackLegend}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedEvent.sessions.map((session) => {
                    const spanCombined =
                      selectedEvent.sessions.length === 3 &&
                      "combined" in session &&
                      session.combined === true;
                    return (
                      <div
                        key={session.trackId}
                        className={`matrix-cell min-w-0 ${spanCombined ? "sm:col-span-2" : ""}`}
                      >
                        <div className="text-[11px] font-extrabold tracking-[0.14em] text-[#8ECAE6] uppercase mb-1">
                          {session.trackLabel}
                        </div>
                        <div className="text-sm sm:text-base font-bold text-white break-words">
                          {session.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Registration Card with Crowd Background */}
            <div
              className="rounded-[14px] border border-[rgba(255,255,255,0.09)] p-5 sm:p-8 bg-cover bg-top min-w-0"
              style={{
                background: `linear-gradient(180deg, rgba(4,8,17,0.4) 0%, #040811 95%), url('/mockup-assets/crowd-top.jpg') top/cover no-repeat`,
              }}
            >
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#8ECAE6] uppercase mb-1.5">
                Get Involved
              </div>
              <h3 className="text-2xl sm:text-[30px] font-extrabold text-white mb-2.5 break-words">
                Registration is Open.
              </h3>
              <p className="text-sm sm:text-[15px] text-[#B8CBE0] leading-relaxed mb-5 break-words">
                {conferenceData.dates.shortDisplay} • {conferenceData.venue.name},{" "}
                {conferenceData.venue.city}, {conferenceData.venue.state} • Subsplash Instant
                Registration
              </p>
              <a
                href="#registration"
                className="btn-solid-accent inline-flex w-full sm:w-auto justify-center"
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section id="about" className="py-14 sm:py-20 bg-[#040811]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-xs font-bold tracking-[0.2em] text-[#8ECAE6] uppercase mb-3">
              Why Attend
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Why Attend CAMM?
            </h2>
            <p className="text-base sm:text-lg text-[#94A8BE] max-w-2xl mx-auto mb-5">
              {conferenceData.experienceSubtitle}
            </p>
            <p className="text-[15px] sm:text-base text-[#94A8BE] max-w-3xl mx-auto leading-relaxed">
              {conferenceData.whyAttendIntro}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {conferenceData.whyAttend.map((item) => {
              const Icon = iconMap[item.icon] || Users;
              return (
                <div key={item.id} className="card-dark-hover p-5 sm:p-8 text-center min-w-0">
                  <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-[rgba(142,202,230,0.08)] border border-[rgba(142,202,230,0.28)]">
                    <Icon className="w-8 h-8 text-[#8ECAE6]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-[15px] text-[#94A8BE] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Section with Subsplash Embed */}
      <section id="registration" className="py-14 sm:py-20 bg-[#070E1B]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[0.2em] text-[#8ECAE6] uppercase mb-3">
              Secure Your Spot
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Register for CAMM 2027
            </h2>
            <p className="text-base sm:text-lg text-[#94A8BE] max-w-xl mx-auto">
              Complete your registration below to join fellow believers at CAMM Conference 2027
            </p>
          </div>

          <div className="max-w-4xl mx-auto min-w-0">
            <div className="card-dark overflow-hidden min-w-0">
              {/* Header */}
              <div className="p-5 sm:p-6 bg-[rgba(142,202,230,0.08)] hairline-b">
                <h3 className="text-lg font-bold text-white text-center">
                  Complete Your Registration
                </h3>
                <p className="text-[#94A8BE] text-center mt-1 text-sm break-words">
                  {conferenceData.dates.display} • {conferenceData.venue.name},
                  <br />
                  {conferenceData.venue.city}, {conferenceData.venue.state}
                </p>
              </div>

              {/* Pricing Tiers */}
              <div className="p-4 sm:p-6 hairline-b min-w-0" suppressHydrationWarning>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0">
                  {conferenceData.registration.tiers.map((tier) => {
                    const isHighlighted = pricing.highlightedId === tier.id;
                    const isPast =
                      pricing.highlightedId === "regular" && tier.id === "early";
                    return (
                      <div
                        key={tier.id}
                        className={`relative min-w-0 rounded-[12px] p-4 sm:p-5 ${
                          isHighlighted
                            ? "border border-[rgba(142,202,230,0.55)] bg-[rgba(142,202,230,0.10)] shadow-[0_0_24px_rgba(142,202,230,0.12)]"
                            : "border border-[rgba(255,255,255,0.08)] bg-[#040811]"
                        } ${isPast ? "opacity-55" : ""}`}
                      >
                        {isHighlighted && (
                          <span className="inline-block mb-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-[0.14em] uppercase bg-[#8ECAE6] text-[#040811]">
                            {pricing.badge}
                          </span>
                        )}
                        {!isHighlighted && !isPast && (
                          <span className="inline-block mb-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-[0.14em] uppercase text-[#8FA5BC] border border-[rgba(255,255,255,0.10)]">
                            {tier.detail}
                          </span>
                        )}
                        {isPast && (
                          <span className="inline-block mb-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-[0.14em] uppercase text-[#6E849B] border border-[rgba(255,255,255,0.08)]">
                            Ended January 2
                          </span>
                        )}
                        <div
                          className={`text-3xl sm:text-4xl font-extrabold tabular-nums ${
                            isPast ? "text-[#6E849B] line-through" : "text-white"
                          }`}
                        >
                          {tier.priceLabel}
                        </div>
                        <div className="mt-2 text-sm font-semibold text-[#C7D7E8] break-words">
                          {tier.windowLabel}
                        </div>
                        <div className="mt-1 text-xs text-[#8FA5BC]">{tier.detail}</div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 text-center text-sm font-medium text-[#8ECAE6] break-words">
                  {pricing.urgencyLine}
                </p>
              </div>

              {/* Iframe Container */}
              <div className="p-4 sm:p-6 min-w-0">
                {iframeLoading && !iframeBlocked && (
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="w-12 h-12 border-4 border-[#8ECAE6]/30 border-t-[#8ECAE6] rounded-full animate-spin mb-4"></div>
                    <p className="text-[#94A8BE]">Loading registration form...</p>
                  </div>
                )}

                {iframeBlocked ? (
                  <div className="py-12 text-center">
                    <AlertCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-4">
                      Registration Form Not Loading?
                    </h4>
                    <p className="text-[#94A8BE] mb-6 max-w-md mx-auto">
                      If you&apos;re using an ad-blocker or have strict browser privacy settings,
                      the embedded form may not display. No worries! Use the button below.
                    </p>
                    <a
                      href={conferenceData.registration.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solid-accent inline-flex w-full sm:w-auto justify-center"
                    >
                      Open in New Tab <ExternalLink className="w-4 h-4" />
                    </a>
                    <p className="text-sm text-[#6E849B] mt-4">
                      Opens Subsplash registration in a new tab
                    </p>
                  </div>
                ) : (
                  <div className={`w-full max-w-full rounded-lg overflow-hidden ${iframeLoading ? "hidden" : ""}`}>
                    <iframe
                      ref={iframeRef}
                      src={conferenceData.registration.url}
                      width="100%"
                      height="700"
                      frameBorder="0"
                      className="w-full max-w-full bg-white"
                      title="CAMM Conference Registration"
                      onLoad={handleIframeLoad}
                      onError={() => setIframeBlocked(true)}
                    />
                  </div>
                )}

                {!iframeBlocked && !iframeLoading && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-[#6E849B]">
                      Having trouble?{" "}
                      <a
                        href={conferenceData.registration.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8ECAE6] hover:underline"
                      >
                        Open in new tab ↗
                      </a>
                    </p>
                  </div>
                )}
              </div>

              {/* Trust Signals */}
              <div className="p-5 bg-[#050A14] hairline-t">
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-[#94A8BE]">
                    <Shield className="w-4 h-4 text-[#8ECAE6]" />
                    <span>Secure Payment via Subsplash</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#94A8BE]">
                    <CheckCircle className="w-4 h-4 text-[#8ECAE6]" />
                    <span>Instant Confirmation</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#94A8BE]">
                    <CheckCircle className="w-4 h-4 text-[#8ECAE6]" />
                    <span>Full Refund Policy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-[#6E849B]">
                Questions about registration? Contact us at{" "}
                <a href={`tel:${conferenceData.contact.phone}`} className="text-[#8ECAE6] hover:underline">
                  {conferenceData.contact.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-14 sm:py-20 bg-[#040811]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[0.2em] text-[#8ECAE6] uppercase mb-3">
              Questions?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {conferenceData.faqs.map((faq, index) => (
              <div key={index} className="card-dark overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-[#0A1322] transition-colors"
                >
                  <span className="text-white font-semibold pr-4 min-w-0 break-words">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#8ECAE6] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#8ECAE6] flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-[#94A8BE] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue & Contact Section */}
      <section id="venue" className="py-14 sm:py-20 bg-[#070E1B]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[0.2em] text-[#8ECAE6] uppercase mb-3">
              Join Us
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">Location & Contact</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-dark-hover p-5 sm:p-8 min-w-0">
              <MapPin className="w-10 h-10 text-[#8ECAE6] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Venue</h3>
              <p className="text-[#94A8BE] mb-4">
                {conferenceData.venue.name}
                <br />
                {conferenceData.venue.city}, {conferenceData.venue.state}
              </p>
              <a
                href={conferenceData.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#8ECAE6] hover:text-[#9AD4EE] transition-colors"
              >
                View on Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="card-dark-hover p-5 sm:p-8 min-w-0">
              <Phone className="w-10 h-10 text-[#8ECAE6] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Contact</h3>
              <p className="text-[#94A8BE] mb-4">Questions? We&apos;re here to help!</p>
              <a
                href={`tel:${conferenceData.contact.phone}`}
                className="inline-flex items-center gap-2 text-[#8ECAE6] hover:text-[#9AD4EE] transition-colors text-xl font-bold"
              >
                <Phone className="w-5 h-5" />
                {conferenceData.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

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

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#A9BCD0]">
            {conferenceData.navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <Link href="/feedback" className="hover:text-white transition-colors">
              Feedback
            </Link>
            <span className="text-[#6E849B]">
              {conferenceData.venue.name} • {conferenceData.venue.city}, {conferenceData.venue.state}
            </span>
          </nav>

          <div className="text-xs text-[#6E849B]">
            © {conferenceData.year} {conferenceData.fullName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
