import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { siDiscord, siInstagram, siTiktok } from 'simple-icons';
import heroVideo from '../assets/hero video/amine.mp4';
import { heroContent, socialLinks } from '../data/portfolioData';

const typewriterTitles = [
  'Web Developer',
  'Frontend Developer',
  'Full Stack Developer',
  'Backend Developer',
  'Software Developer',
];

const heroSocials = [
  { label: 'Instagram', href: socialLinks.instagram, icon: siInstagram },
  { label: 'TikTok', href: socialLinks.tiktok, icon: siTiktok },
  { label: 'Discord', href: socialLinks.discord, icon: siDiscord },
];

const Hero = () => {
  const videoRef = useRef(null);
  const audioRecoveryRef = useRef(false);
  const introEndRef = useRef(null);
  const introCompletionTimerRef = useRef(null);
  const videoStartTimerRef = useRef(null);
  const videoStartedRef = useRef(false);

  const [typedTitle, setTypedTitle] = useState('');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [resumeAvailable, setResumeAvailable] = useState(null);

  /* -------------------------------------------------------
     VIDEO AUTOPLAY
     Starts 7 seconds after the intro transition finishes.
     Tries with sound first, then falls back to muted autoplay.
  ------------------------------------------------------- */
  useEffect(() => {
    const video = videoRef.current;
    const intro = introEndRef.current;

    if (!video || !intro) return undefined;

    const restoreAudioAfterInteraction = () => {
      if (!audioRecoveryRef.current || !videoRef.current) return;

      const currentVideo = videoRef.current;

      currentVideo.muted = false;

      currentVideo
        .play()
        .then(() => {
          audioRecoveryRef.current = false;
        })
        .catch(() => {
          // Browser still blocks audio.
        });
    };

    const startVideo = async () => {
      videoStartTimerRef.current = null;

      if (videoStartedRef.current) return;

      try {
        video.currentTime = 0;
      } catch {
        // Ignore currentTime errors.
      }

      /*
       * First attempt:
       * autoplay with sound.
       */
      video.muted = false;

      try {
        await video.play();

        videoStartedRef.current = true;
        audioRecoveryRef.current = false;

        return;
      } catch {
        /*
         * Chrome/Safari/etc. may block autoplay with sound.
         * Fallback to muted autoplay.
         */
        video.muted = true;
        audioRecoveryRef.current = true;

        try {
          await video.play();

          videoStartedRef.current = true;

          /*
           * On the first natural user interaction,
           * try enabling sound again.
           */
          window.addEventListener(
            'pointerdown',
            restoreAudioAfterInteraction,
            { once: true }
          );

          window.addEventListener(
            'keydown',
            restoreAudioAfterInteraction,
            { once: true }
          );

          window.addEventListener(
            'touchstart',
            restoreAudioAfterInteraction,
            { once: true }
          );
        } catch {
          videoStartedRef.current = false;
          audioRecoveryRef.current = false;
        }
      }
    };

    /*
     * IMPORTANT:
     * Only 7 seconds after intro completion.
     */
    const scheduleVideo = () => {
      if (
        videoStartedRef.current ||
        videoStartTimerRef.current
      ) {
        return;
      }

      videoStartTimerRef.current = window.setTimeout(
        startVideo,
        4400
      );
    };

    const parseTime = (value) => {
      const number = Number.parseFloat(value) || 0;

      return value.trim().endsWith('ms')
        ? number
        : number * 1000;
    };

    /*
     * Detect the real CSS transition duration of
     * the intro container instead of guessing.
     */
    const scheduleAfterIntro = () => {
      const style = window.getComputedStyle(intro);

      const delays = style.transitionDelay
        .split(',')
        .map(parseTime);

      const durations = style.transitionDuration
        .split(',')
        .map(parseTime);

      const transitionTime = Math.max(
        ...durations.map(
          (duration, index) =>
            duration +
            (delays[index] || delays[0] || 0)
        ),
        0
      );

      introCompletionTimerRef.current =
        window.setTimeout(
          scheduleVideo,
          transitionTime
        );
    };

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      disable: false,
    });

    if (reduceMotion) {
      scheduleVideo();
    } else {
      scheduleAfterIntro();
    }

    return () => {
      if (introCompletionTimerRef.current) {
        window.clearTimeout(
          introCompletionTimerRef.current
        );
      }

      if (videoStartTimerRef.current) {
        window.clearTimeout(
          videoStartTimerRef.current
        );
      }

      introCompletionTimerRef.current = null;
      videoStartTimerRef.current = null;

      window.removeEventListener(
        'pointerdown',
        restoreAudioAfterInteraction
      );

      window.removeEventListener(
        'keydown',
        restoreAudioAfterInteraction
      );

      window.removeEventListener(
        'touchstart',
        restoreAudioAfterInteraction
      );
    };
  }, []);

  /* -------------------------------------------------------
     RESUME MODAL
  ------------------------------------------------------- */
  useEffect(() => {
    if (!resumeOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setResumeOpen(false);
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    window.addEventListener(
      'keydown',
      closeOnEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        'keydown',
        closeOnEscape
      );
    };
  }, [resumeOpen]);

  /* -------------------------------------------------------
     CHECK RESUME FILE
  ------------------------------------------------------- */
  useEffect(() => {
    if (!resumeOpen) return undefined;

    let cancelled = false;

    fetch(heroContent.ctaResume.href, {
      method: 'HEAD',
    })
      .then((response) => {
        const contentType =
          response.headers.get('content-type') || '';

        if (!cancelled) {
          setResumeAvailable(
            response.ok &&
              contentType.includes('application/pdf')
          );
        }
      })
      .catch(() => {
        if (!cancelled) {
          setResumeAvailable(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [resumeOpen]);

  /* -------------------------------------------------------
     TYPEWRITER
  ------------------------------------------------------- */
  useEffect(() => {
    let titleIndex = 0;
    let characterIndex = 0;
    let phase = 'typing';
    let timerId;

    const tick = () => {
      const currentTitle =
        typewriterTitles[titleIndex];

      if (phase === 'typing') {
        characterIndex += 1;

        setTypedTitle(
          currentTitle.slice(
            0,
            characterIndex
          )
        );

        if (
          characterIndex ===
          currentTitle.length
        ) {
          phase = 'pause';
        }

        timerId = window.setTimeout(
          tick,
          phase === 'pause' ? 1800 : 70
        );

        return;
      }

      if (phase === 'pause') {
        phase = 'deleting';

        timerId = window.setTimeout(
          tick,
          45
        );

        return;
      }

      if (phase === 'deleting') {
        characterIndex -= 1;

        setTypedTitle(
          currentTitle.slice(
            0,
            characterIndex
          )
        );

        if (characterIndex === 0) {
          phase = 'gap';
        }

        timerId = window.setTimeout(
          tick,
          phase === 'gap' ? 300 : 45
        );

        return;
      }

      titleIndex =
        (titleIndex + 1) %
        typewriterTitles.length;

      characterIndex = 0;
      phase = 'typing';

      timerId = window.setTimeout(
        tick,
        300
      );
    };

    timerId = window.setTimeout(
      tick,
      70
    );

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

  return (
    <section
      className="
        hero-surface
        relative
        grid
        min-h-[720px]
        w-full
        overflow-hidden
        bg-[#f6f5f2]
        px-5
        pb-16
        pt-28
        sm:px-8
        md:min-h-[760px]
        md:px-12
        md:pb-24
        md:pt-36
        lg:grid-cols-2
        lg:items-center
        lg:gap-14
      "
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-12rem]
          top-16
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-amber-700/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[-10rem]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-slate-400/10
          blur-3xl
        "
      />

      {/* =====================================================
          TV VIDEO
      ===================================================== */}
      <div
        className="
          hero-reel-frame
          relative
          z-10
          order-2
          mx-auto
          mt-8
          w-full
          max-w-[860px]
          transition-transform
          duration-700
          ease-out
          hover:-translate-y-1
          lg:col-start-2
          lg:row-start-1
          lg:mt-0
        "
      >

        {/* TV OUTER BODY */}
        <div
          className="
            relative
            mx-auto
            rounded-[2.2rem]
            border
            border-slate-800/80
            bg-[#151922]
            p-3
            shadow-[0_35px_90px_rgba(15,23,42,0.28)]
            transition-all
            duration-700
            hover:shadow-[0_45px_110px_rgba(15,23,42,0.34)]
            sm:p-4
            md:rounded-[2.6rem]
            md:p-5
          "
        >

          {/* TV TOP HIGHLIGHT */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-10
              top-1
              h-px
              bg-white/20
            "
          />

          {/* TV BRAND / DECORATION */}
          <div
            className="
              pointer-events-none
              absolute
              left-7
              top-5
              flex
              items-center
              gap-2
              md:left-9
              md:top-7
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-amber-400
                shadow-[0_0_12px_rgba(251,191,36,0.7)]
              "
            />

            <span
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-white/40
                sm:text-[8px]
              "
            >
              AMINE
            </span>
          </div>

          {/* TV POWER LED */}
          <div
            className="
              pointer-events-none
              absolute
              right-7
              top-5
              flex
              items-center
              gap-1.5
              md:right-9
              md:top-7
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-amber-400
                shadow-[0_0_10px_rgba(251,191,36,0.75)]
              "
            />

            <span
              className="
                text-[6px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/25
              "
            >
              ON
            </span>
          </div>

          {/* TV SCREEN BEZEL */}
          <div
            className="
              relative
              mt-5
              overflow-hidden
              rounded-[1.55rem]
              border
              border-black/60
              bg-black
              p-1.5
              shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_45px_rgba(0,0,0,0.9)]
              sm:mt-6
              sm:p-2
              md:rounded-[1.8rem]
            "
          >

            {/* INNER SCREEN */}
            <div
              className="
                hero-reel-screen
                relative
                overflow-hidden
                rounded-[1.2rem]
                border
                border-white/10
                bg-slate-950
                shadow-[inset_0_0_35px_rgba(0,0,0,0.8)]
                sm:rounded-[1.4rem]
              "
            >

              {/* SCREEN GLASS */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  bg-gradient-to-br
                  from-white/[0.10]
                  via-transparent
                  to-black/20
                "
              />

              {/* SUBTLE SCREEN VIGNETTE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  shadow-[inset_0_0_45px_rgba(0,0,0,0.55)]
                "
              />

              {/* VIDEO */}
              <video
                ref={videoRef}
                playsInline
                preload="auto"
                aria-label="AMINE talking video"
                className="
                  relative
                  z-0
                  block
                  aspect-video
                  w-full
                  object-contain
                  object-center
                  bg-black
                  brightness-[0.92]
                  saturate-[0.94]
                  transition-transform
                  duration-700
                "
              >
                <source
                  src={heroVideo}
                  type="video/mp4"
                />

                Your browser does not support
                the video tag.
              </video>

              {/* SCREEN REFLECTION */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  z-30
                  h-1/3
                  bg-gradient-to-b
                  from-white/[0.06]
                  to-transparent
                "
              />

            </div>
          </div>

          {/* TV SPEAKER AREA */}
          <div
            className="
              mx-auto
              mt-3
              flex
              items-center
              justify-center
              gap-1
              opacity-60
              sm:mt-4
            "
            aria-hidden="true"
          >
            {Array.from({ length: 13 }).map(
              (_, index) => (
                <span
                  key={index}
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-white/20
                  "
                />
              )
            )}
          </div>

          {/* TV CONTROL LINE */}
          <div
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-2
              sm:mt-3
            "
            aria-hidden="true"
          >
            <span
              className="
                h-1
                w-8
                rounded-full
                bg-white/10
              "
            />

            <span
              className="
                h-1
                w-1
                rounded-full
                bg-amber-400/60
              "
            />

            <span
              className="
                h-1
                w-8
                rounded-full
                bg-white/10
              "
            />
          </div>

        </div>

        {/* TV FEET */}
        <div
          className="
            pointer-events-none
            relative
            mx-auto
            flex
            w-[78%]
            items-start
            justify-between
            px-4
          "
          aria-hidden="true"
        >
          <div
            className="
              h-5
              w-20
              -rotate-[12deg]
              rounded-b-xl
              bg-[#11151d]
              shadow-[0_10px_18px_rgba(15,23,42,0.18)]
              sm:h-6
              sm:w-24
            "
          />

          <div
            className="
              h-5
              w-20
              rotate-[12deg]
              rounded-b-xl
              bg-[#11151d]
              shadow-[0_10px_18px_rgba(15,23,42,0.18)]
              sm:h-6
              sm:w-24
            "
          />
        </div>

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div
        className="
          relative
          z-20
          order-1
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-start
          justify-center
          text-left
          lg:col-start-1
          lg:row-start-1
        "
      >

        <div
          className="
            flex
            w-full
            max-w-2xl
            flex-col
            items-start
            text-left
          "
        >

          {/* MOBILE SOCIALS */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="
              mb-5
              flex
              items-center
              gap-3
              lg:hidden
            "
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-300
                bg-white/80
                text-slate-700
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-slate-900
                hover:bg-slate-900
                hover:text-white
              "
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-300
                bg-white/80
                text-slate-700
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-slate-900
                hover:bg-slate-900
                hover:text-white
              "
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-300
                bg-white/80
                text-slate-700
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-amber-700
                hover:text-amber-700
              "
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-4.849-.149-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>

          {/* MAIN HEADING */}
          <h1
            data-aos="fade-up"
            className="
              max-w-3xl
              text-4xl
              font-black
              leading-[0.98]
              tracking-[-0.045em]
              text-slate-900
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {heroContent.greeting},{' '}

            <br />

            <span
              className="
                relative
                block
                min-h-[1.2em]
                w-full
                max-w-[22ch]
              "
            >
              <span
                className="
                  hero-title-cycle
                  block
                  text-slate-900
                "
              >
                {typedTitle}

                <span
                  className="hero-typewriter-caret"
                  aria-hidden="true"
                />
              </span>
            </span>
          </h1>

          {/* SUBHEADING */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              mb-8
              mt-6
              max-w-xl
              text-base
              font-medium
              leading-[1.8]
              text-slate-600
              md:text-lg
            "
          >
            {heroContent.subtitle}
          </p>

          {/* CTA BUTTONS */}
          <div
            ref={introEndRef}
            data-aos="fade-up"
            data-aos-delay="400"
            className="
              flex
              w-full
              flex-row
              flex-wrap
              items-center
              gap-3
            "
          >

            {/* PRIMARY */}
            <a
              href={heroContent.ctaPrimary.href}
              className="
                group
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-slate-900
                px-6
                text-sm
                font-bold
                text-white
                shadow-[0_12px_28px_rgba(15,23,42,0.16)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-amber-700
                hover:shadow-[0_16px_32px_rgba(180,83,9,0.20)]
                sm:w-[170px]
              "
            >
              {heroContent.ctaPrimary.text}

              <svg
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>
            </a>

            {/* SECONDARY */}
            <a
              href={heroContent.ctaSecondary.href}
              className="
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-slate-300
                bg-white/80
                px-6
                text-sm
                font-bold
                text-slate-800
                shadow-sm
                backdrop-blur
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-slate-900
                hover:bg-white
                hover:shadow-md
                sm:w-[170px]
              "
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* RESUME */}
            <a
              href={heroContent.ctaResume.href}
              onClick={(event) => {
                event.preventDefault();
                setResumeAvailable(null);
                setResumeOpen(true);
              }}
              className="
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-slate-300
                bg-transparent
                px-6
                text-sm
                font-bold
                text-slate-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-amber-700
                hover:bg-white
                hover:text-amber-700
                sm:w-[170px]
              "
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>

              {heroContent.ctaResume.text}
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div
            className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-3
              sm:justify-start
            "
            aria-label="Social links"
          >
            {heroSocials.map(
              ({ label, href, icon }) => (
                <a
                  key={label}
                  href={href || undefined}
                  target={
                    href
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    href
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={label}
                  aria-disabled={!href}
                  tabIndex={
                    href ? 0 : -1
                  }
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    text-slate-700
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                    hover:border-amber-700
                    hover:text-amber-700
                    hover:shadow-md
                  "
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              )
            )}
          </div>

        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          pointer-events-none
          md:block
        "
      >
        <div className="animate-bounce">
          <svg
            className="
              h-6
              w-6
              text-slate-900/70
            "
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* =====================================================
          RESUME MODAL
      ===================================================== */}
      {resumeOpen && (
        <div
          className="
            resume-viewer-backdrop
            fixed
            inset-0
            z-[100]
          "
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setResumeOpen(false);
            }
          }}
        >
          <div
            className="
              resume-viewer
              relative
            "
            role="dialog"
            aria-modal="true"
            aria-label="Resume viewer"
          >

            {/* MODAL TOOLBAR */}
            <div className="resume-viewer-toolbar">

              <span className="resume-viewer-title">
                AMINE / RESUME
              </span>

              <div className="resume-viewer-actions">

                <a
                  href={
                    resumeAvailable
                      ? heroContent.ctaResume.href
                      : undefined
                  }
                  download={
                    resumeAvailable || undefined
                  }
                  className={`
                    resume-viewer-action
                    ${
                      resumeAvailable === false
                        ? 'resume-viewer-action-disabled'
                        : ''
                    }
                  `}
                >
                  Download
                </a>

                <a
                  href={
                    resumeAvailable
                      ? heroContent.ctaResume.href
                      : undefined
                  }
                  target={
                    resumeAvailable
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    resumeAvailable
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className={`
                    resume-viewer-action
                    ${
                      resumeAvailable === false
                        ? 'resume-viewer-action-disabled'
                        : ''
                    }
                  `}
                >
                  New tab
                </a>

                <button
                  type="button"
                  onClick={() =>
                    setResumeOpen(false)
                  }
                  className="
                    resume-viewer-close
                  "
                  aria-label="Close resume viewer"
                >
                  &#10005;
                </button>

              </div>
            </div>

            {/* DOCUMENT */}
            <div
              className="
                resume-viewer-document
              "
            >

              {resumeAvailable === true ? (
                <iframe
                  title="AMINE resume"
                  src={
                    heroContent.ctaResume.href
                  }
                />
              ) : resumeAvailable === false ? (
                <div
                  className="
                    resume-viewer-unavailable
                  "
                >
                  <strong>
                    Resume PDF not available yet.
                  </strong>

                  <span>
                    Add the existing CV file at{' '}
                    <code>
                      amine_Resume_2026.pdf
                    </code>{' '}
                    to enable the preview.
                  </span>
                </div>
              ) : (
                <div
                  className="
                    resume-viewer-loading
                  "
                >
                  Checking resume file...
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;