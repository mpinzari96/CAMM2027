"use client";

import * as React from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { conferenceData } from "@/lib/conference-data";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const total = Math.floor(seconds);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function ConferenceHeroVideo() {
  const { src, poster } = conferenceData.welcomeVideo;
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const stageRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const [needsTap, setNeedsTap] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const progress = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;
  const showPlayOverlay = !hasError && !isPlaying && (!isLoading || needsTap);

  const syncFromVideo = React.useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
    if (Number.isFinite(video.duration) && video.duration > 0) {
      setDuration(video.duration);
    }
    setIsPlaying(!video.paused && !video.ended);
    setIsMuted(video.muted);
  }, []);

  const attemptAutoplay = React.useCallback(async () => {
    const video = videoRef.current;
    if (!video || hasError) return;
    if (prefersReducedMotion()) {
      setNeedsTap(true);
      setIsLoading(false);
      return;
    }
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("webkit-playsinline", "true");
    try {
      await video.play();
      setNeedsTap(false);
      setIsPlaying(true);
    } catch {
      setNeedsTap(true);
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  }, [hasError]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        setDuration(video.duration);
      }
    };
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onPlay = () => {
      setIsPlaying(true);
      setNeedsTap(false);
      setIsLoading(false);
    };
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setIsLoading(true);
    const onPlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
      setNeedsTap(false);
    };
    const onCanPlay = () => setIsLoading(false);
    const onError = () => {
      setHasError(true);
      setIsLoading(false);
      setIsPlaying(false);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setNeedsTap(true);
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);
    video.addEventListener("ended", onEnded);

    void attemptAutoplay();

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
      video.removeEventListener("ended", onEnded);
      video.pause();
    };
  }, [attemptAutoplay]);

  React.useEffect(() => {
    const onFs = () => {
      const node = stageRef.current;
      setIsFullscreen(
        Boolean(
          document.fullscreenElement === node ||
            (document as Document & { webkitFullscreenElement?: Element }).webkitFullscreenElement ===
              node
        )
      );
    };
    document.addEventListener("fullscreenchange", onFs);
    document.addEventListener("webkitfullscreenchange", onFs);
    return () => {
      document.removeEventListener("fullscreenchange", onFs);
      document.removeEventListener("webkitfullscreenchange", onFs);
    };
  }, []);

  const play = async () => {
    const video = videoRef.current;
    if (!video || hasError) return;
    try {
      await video.play();
      setNeedsTap(false);
    } catch {
      setNeedsTap(true);
    }
  };

  const pause = () => {
    videoRef.current?.pause();
  };

  const togglePlay = () => {
    if (hasError) return;
    if (videoRef.current?.paused || videoRef.current?.ended) {
      void play();
    } else {
      pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video || hasError) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (!video.muted && video.paused) void play();
  };

  const playWithSound = () => {
    const video = videoRef.current;
    if (!video || hasError) return;
    video.muted = false;
    setIsMuted(false);
    void play();
  };

  const seekFromClientX = (clientX: number) => {
    const video = videoRef.current;
    const track = trackRef.current;
    if (!video || !track || !Number.isFinite(video.duration) || video.duration <= 0) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
    setCurrentTime(video.currentTime);
  };

  const onTrackPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (hasError) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    seekFromClientX(event.clientX);
  };

  const onTrackPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    seekFromClientX(event.clientX);
  };

  const toggleFullscreen = async () => {
    const node = stageRef.current as HTMLElement & {
      webkitRequestFullscreen?: () => void;
    } | null;
    if (!node) return;
    const doc = document as Document & {
      webkitExitFullscreen?: () => void;
      webkitFullscreenElement?: Element;
    };
    const active = document.fullscreenElement || doc.webkitFullscreenElement;
    try {
      if (active) {
        if (document.exitFullscreen) await document.exitFullscreen();
        else doc.webkitExitFullscreen?.();
      } else if (node.requestFullscreen) {
        await node.requestFullscreen();
      } else {
        node.webkitRequestFullscreen?.();
      }
    } catch {
      /* fullscreen can be denied; controls remain usable */
    }
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-10 pb-8 sm:pb-11">
      <div className="cinema-dock max-w-[860px] mx-auto p-3 sm:p-4 min-w-0">
        <div
          ref={stageRef}
          className="video-stage relative w-full overflow-hidden rounded-[10px] border border-[rgba(142,202,230,0.45)] bg-black min-w-0"
        >
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted={isMuted}
            playsInline
            preload="metadata"
            autoPlay
            controls={false}
            disablePictureInPicture
            className="hero-video"
            aria-label="CAMM Conference 2027 welcome video"
            onClick={togglePlay}
          />

          {hasError && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(rgba(4,8,17,0.72), rgba(4,8,17,0.86)), url('${poster}')` }}
            >
              <AlertCircle className="w-8 h-8 text-[#8ECAE6]" aria-hidden="true" />
              <p className="text-sm text-[#C7D7E8]">Welcome video could not be loaded.</p>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-accent"
              >
                Open video
              </a>
            </div>
          )}

          {isLoading && !hasError && currentTime === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Loader2 className="w-8 h-8 text-[#8ECAE6] animate-spin" aria-hidden="true" />
              <span className="sr-only">Loading welcome video</span>
            </div>
          )}
          {isLoading && !hasError && currentTime > 0 && (
            <div className="absolute top-3 right-3 pointer-events-none">
              <Loader2 className="w-5 h-5 text-[#8ECAE6] animate-spin" aria-hidden="true" />
            </div>
          )}

          {showPlayOverlay && (
            <button
              type="button"
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-[rgba(4,8,17,0.28)]"
              aria-label="Play welcome video"
            >
              <span className="play-circle">
                <Play className="w-[18px] h-[18px] text-white fill-white ml-0.5" />
              </span>
            </button>
          )}
        </div>

        <div className="mt-4 flex justify-center min-w-0">
          <button
            type="button"
            onClick={isMuted ? playWithSound : toggleMute}
            className="btn-solid-accent w-full sm:w-auto justify-center flex-shrink-0"
            disabled={hasError}
          >
            {isMuted ? (
              <>
                Play with sound <Volume2 className="w-4 h-4" />
              </>
            ) : (
              <>
                Sound on <Volume2 className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
      </div>

      <div className="scrubber-bar px-4 sm:px-6 lg:px-10 py-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 min-w-0">
          <button
            type="button"
            onClick={togglePlay}
            className="text-[#8ECAE6] hover:text-white transition-colors flex-shrink-0"
            aria-label={isPlaying ? "Pause welcome video" : "Play welcome video"}
            disabled={hasError}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 fill-current" />
            )}
          </button>

          <div
            ref={trackRef}
            className="scrubber-hit min-w-0 flex-1 basis-[180px]"
            onPointerDown={onTrackPointerDown}
            onPointerMove={onTrackPointerMove}
            role="slider"
            tabIndex={hasError ? -1 : 0}
            aria-label="Seek welcome video"
            aria-valuemin={0}
            aria-valuemax={Math.floor(duration) || 0}
            aria-valuenow={Math.floor(currentTime)}
            aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
            onKeyDown={(event) => {
              const video = videoRef.current;
              if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
              if (event.key === "ArrowRight") {
                video.currentTime = Math.min(video.duration, video.currentTime + 5);
                syncFromVideo();
              } else if (event.key === "ArrowLeft") {
                video.currentTime = Math.max(0, video.currentTime - 5);
                syncFromVideo();
              }
            }}
          >
            <div className="scrubber-track">
              <div className="scrubber-fill" style={{ width: `${progress}%` }} />
              <div className="scrubber-knob" style={{ left: `${progress}%` }} />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-semibold tracking-[0.08em] text-[#B8CBE0] tabular-nums flex-shrink-0">
            <span>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <button
              type="button"
              onClick={toggleMute}
              className="text-[#8ECAE6] hover:text-white transition-colors"
              aria-label={isMuted ? "Unmute welcome video" : "Mute welcome video"}
              aria-pressed={!isMuted}
              disabled={hasError}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <span className="hd-badge">4K</span>
            <button
              type="button"
              onClick={() => void toggleFullscreen()}
              className="flex items-center gap-1 text-[#B8CBE0] hover:text-white transition-colors"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              disabled={hasError}
            >
              {isFullscreen ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
              <span className="hidden sm:inline">{isFullscreen ? "EXIT" : "FULLSCREEN"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
