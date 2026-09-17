import { personalInfo, socialLinks } from '../data/portfolioData';

const Footer = () => {
  const contactEmail = personalInfo?.email || 'arraffiardhiansyah@gmail.com';

  const footerLinks = [
    {
      label: 'GitHub',
      href: socialLinks?.github || 'https://github.com/kaishi014',
    },
    {
      label: 'whatsapp',
      href:
        socialLinks?.nwhatsapp ||
        'https://wa.me/6283878085393',
    },
    {
      label: 'Email',
      href: `mailto:${contactEmail}`,
    },
  ];

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
  id="footer"
  className="
    relative
    w-full
    overflow-hidden
    bg-[#f8f7f4]
    px-5
    py-7
    text-[#20262b]
    sm:px-8
    sm:py-8
    lg:px-12
  "
>
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-56
          w-56
          rounded-full
          bg-amber-500/[0.06]
          blur-[90px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-20
          h-48
          w-48
          rounded-full
          bg-white/[0.025]
          blur-[80px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Top line */}
        <div
          className="
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-amber-500
                text-sm
                font-black
                text-[#20262b]
                shadow-[0_8px_25px_rgba(245,158,11,0.15)]
                transition-transform
                duration-300
                hover:scale-105
              "
            >
              AR
            </div>

            <div>
              <div
                className="
                  text-sm
                  font-black
                  tracking-[-0.02em]
                  text-white
                "
              >
                ARRAFFI
              </div>

              <div
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-slate-500
                "
              >
                Full Stack Developer
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.label === 'Email' ? undefined : '_blank'
                }
                rel={
                  link.label === 'Email'
                    ? undefined
                    : 'noopener noreferrer'
                }
                className="
                  rounded-full
                  border
                  border-white/10
                  px-3
                  py-1.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-amber-500/60
                  hover:bg-amber-500
                  hover:text-[#20262b]
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-3
            text-[8px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-slate-600
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            © {new Date().getFullYear()} ARRAFFI. All rights reserved.
          </span>

          <button
            type="button"
            onClick={handleBackToTop}
            className="
              group
              flex
              w-fit
              items-center
              gap-2
              text-slate-500
              transition-colors
              duration-300
              hover:text-amber-500
            "
          >
            <span>Back to top</span>

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-[11px]
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:border-amber-500/60
              "
            >
              ↑
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          footer *,
          footer *::before,
          footer *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;