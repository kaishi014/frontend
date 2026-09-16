import { technicalSkills } from '../data/portfolioData';
import {
  siCplusplus,
  siCss,
  siExpress,
  siFastapi,
  siFirebase,
  siGithub,
  siHtml5,
  siJavascript,
  siMongodb,
  siMysql,
  siN8n,
  siNodedotjs,
  siOpenjdk,
  siPostman,
  siPython,
  siReact,
  siSpringboot,
} from 'simple-icons';

/* =========================================================
   CUSTOM ICON PATHS
========================================================= */

const skillIcons = {
  Java:
    'M7 17c-2 2 9 3 10-1M8 13c-3 2 6 3 9 0M14 3c3 3-4 5 0 8M5 20c4 2 11 1 14-1',

  'C++':
    'M8 9a4 4 0 100 6m0-3h5m2-3v6m3-6v6',

  Python:
    'M8 4h5a3 3 0 013 3v3H9a3 3 0 00-3 3v1a3 3 0 003 3h4M16 20h-5a3 3 0 01-3-3v-3h7a3 3 0 003-3V10a3 3 0 00-3-3h-3',

  'MERN Stack':
    'M12 3a9 9 0 109 9M12 3v9h9',

  HTML:
    'M5 4l1 15 6 2 6-2 1-15H5zm3 4h7M8 12h6M9 16h3',

  CSS:
    'M6 4h12l-1 15-5 2-5-2L6 4zm3 4h6M9 12h5M10 16h2',

  JavaScript:
    'M5 4h14v16H5V4zm3 10v3h2a2 2 0 002-2v-1m2-1v4h3',

  'Spring Boot':
    'M20 5a9 9 0 11-4-2M20 5v5m0-5h-5',

  FastAPI:
    'M5 12h14M12 5l7 7-7 7',

  'REST APIs':
    'M7 7h10M7 12h10M7 17h10M4 7h.01M4 12h.01M4 17h.01',

  MongoDB:
    'M12 3c-2 4-3 6-3 9a3 3 0 006 0c0-3-1-5-3-9zM12 15v6',

  MySQL:
    'M4 17c2-7 5-10 8-10 3 0 4 3 8 3M4 17c2 2 4 2 6 0',

  Firebase:
    'M7 19l2-14 3 5 2-3 3 12H7z',

  'Git & GitHub':
    'M12 3a9 9 0 100 18 9 9 0 000-18zm0 4v5l4 2',

  Postman:
    'M6 18l6-12 6 12M8 14h8',

  'MongoDB Compass':
    'M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4',

  Antigravity:
    'M12 3l9 16H3L12 3zm0 6v4m0 3h.01',

  Codex:
    'M5 5h14v14H5V5zm4 4l3 3-3 3m5 0h2',

  'Data Structures':
    'M5 5h4v4H5V5zm10 0h4v4h-4V5zM5 15h4v4H5v-4zm10 0h4v4h-4v-4zM9 7h6M7 9v6M17 9v6M9 17h6',

  Algorithms:
    'M5 19l5-5 3 3 6-8M16 9h3v3',

  DBMS:
    'M5 6c0-2 14-2 14 0v12c0 2-14 2-14 0V6zm0 0c0 2 14 2 14 0M5 12c0 2 14 2 14 0',

  OOP:
    'M5 5h6v6H5V5zm8 8h6v6h-6v-6zm-2-5h2v3h-2m-4 4v2h4',

  'Software Engineering':
    'M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z',

  Architecture:
    'M4 6h5v5H4V6zm11 0h5v5h-5V6zM4 15h5v5H4v-5zm11 0h5v5h-5v-5zM9 8h6M6 11v4M18 11v4M9 17h6',

  Deployment:
    'M12 3v12m0 0l-4-4m4 4l4-4M5 20h14',
};

/* =========================================================
   OFFICIAL SIMPLE ICONS
========================================================= */

const officialIcons = {
  Java: siOpenjdk,
  'C++': siCplusplus,
  Python: siPython,
  'MERN Stack': siReact,
  HTML: siHtml5,
  CSS: siCss,
  JavaScript: siJavascript,
  'Spring Boot': siSpringboot,
  FastAPI: siFastapi,
  MongoDB: siMongodb,
  MySQL: siMysql,
  Firebase: siFirebase,
  'Git & GitHub': siGithub,
  n8n: siN8n,
  Postman: siPostman,
  'MongoDB Compass': siMongodb,
  'Node.js': siNodedotjs,
  Express: siExpress,
};

/* =========================================================
   TOOL MONOGRAMS
========================================================= */

const skillMonograms = {
  'VS Code': 'VS',
  Antigravity: 'AG',
  Codex: 'CX',
};

/* =========================================================
   UI / UX ICON
========================================================= */

const UiUxIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9 overflow-visible"
    >
      {/* Monitor */}
      <rect
        x="3"
        y="3"
        width="18"
        height="14"
        rx="2"
        className="uiux-monitor"
      />

      {/* Browser top bar */}
      <path d="M3 7h18" />

      {/* Browser dots */}
      <circle
        cx="5.5"
        cy="5"
        r=".55"
        fill="currentColor"
        stroke="none"
      />

      <circle
        cx="8"
        cy="5"
        r=".55"
        fill="currentColor"
        stroke="none"
      />

      <circle
        cx="10.5"
        cy="5"
        r=".55"
        fill="currentColor"
        stroke="none"
      />

      {/* UI card */}
      <rect
        x="5.5"
        y="9.5"
        width="5"
        height="5"
        rx="1"
        className="uiux-panel"
      />

      {/* UI text */}
      <path d="M13 10h5" />
      <path d="M13 12h4" />
      <path d="M13 14h3" />

      {/* Cursor */}
      <path
        d="M10 9l5.8 7.8-3.2-.5-1.5 2.7-1.2-.7 1.5-2.7L10 9z"
        fill="currentColor"
        stroke="none"
        className="uiux-cursor"
      />

      {/* Monitor stand */}
      <path d="M9 20h6" />
      <path d="M12 17v3" />
    </svg>
  );
};

/* =========================================================
   SKILL ICON COMPONENT
========================================================= */

const SkillIcon = ({ name }) => {
  const icon = officialIcons[name];

  /* UI / UX */
  if (
    name === 'UI/UX' ||
    name === 'UI/UX Design' ||
    name === 'UX/UI' ||
    name === 'UX Design'
  ) {
    return <UiUxIcon />;
  }

  /* Monograms */
  if (skillMonograms[name]) {
    return (
      <span className="text-sm font-black tracking-tight">
        {skillMonograms[name]}
      </span>
    );
  }

  /* Official Simple Icons */
  if (icon) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-9 h-9"
      >
        <path d={icon.path} />
      </svg>
    );
  }

  /* Custom SVG */
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9"
    >
      <path
        d={
          skillIcons[name] ||
          skillIcons.Architecture
        }
      />
    </svg>
  );
};

/* =========================================================
   SKILL TILE
========================================================= */

const SkillTile = ({
  skill,
  category,
  index,
  isExtra,
}) => {
  const isUiUx =
    skill.name === 'UI/UX' ||
    skill.name === 'UI/UX Design' ||
    skill.name === 'UX/UI' ||
    skill.name === 'UX Design';

  return (
    <div
      data-aos={isExtra ? 'fade-left' : 'zoom-in'}
      data-aos-delay={index * 80}
      className={`
        group
        relative
        flex
        min-h-[150px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-black/10
        bg-white/75
        p-4
        text-center
        shadow-[0_12px_30px_rgba(32,38,43,0.06)]
        backdrop-blur-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-amber-700/30
        hover:bg-white
        hover:shadow-[0_20px_42px_rgba(32,38,43,0.12)]
        ${isUiUx ? 'uiux-tile' : ''}
      `}
    >

      {/* =================================================
          UI/UX DECORATION
      ================================================= */}

      {isUiUx && (
        <>
          {/* Soft glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-8
              -top-8
              h-24
              w-24
              rounded-full
              bg-amber-500/10
              blur-2xl
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-8
              -left-8
              h-24
              w-24
              rounded-full
              bg-amber-700/10
              blur-2xl
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* Small interaction indicator */}
          <div
            className="
              absolute
              right-3
              top-3
              flex
              gap-1
              opacity-0
              transition-all
              duration-500
              group-hover:opacity-100
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-700 animate-pulse" />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-amber-700
                animate-pulse
              "
              style={{
                animationDelay: '150ms',
              }}
            />

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-amber-700
                animate-pulse
              "
              style={{
                animationDelay: '300ms',
              }}
            />
          </div>
        </>
      )}

      {/* =================================================
          ICON CONTAINER
      ================================================= */}

      <div
        className={`
          relative
          z-10
          mb-3
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#ebe9e3]
          text-slate-800
          transition-all
          duration-500
          group-hover:rotate-6
          group-hover:bg-[#20262b]
          group-hover:text-white
          ${isUiUx ? 'uiux-icon-box' : ''}
        `}
      >
        <SkillIcon name={skill.name} />
      </div>

      {/* =================================================
          NAME
      ================================================= */}

      <h3
        className="
          relative
          z-10
          text-sm
          font-black
          uppercase
          tracking-tight
          text-slate-900
        "
      >
        {skill.name}
      </h3>

      {/* =================================================
          CATEGORY
      ================================================= */}

      <p
        className="
          relative
          z-10
          mt-1
          text-[10px]
          font-bold
          uppercase
          tracking-[0.14em]
          text-slate-500
        "
      >
        {category}
      </p>

      {/* =================================================
          LEVEL
      ================================================= */}

      <div
        className="
          relative
          z-10
          mt-3
          h-1
          w-16
          overflow-hidden
          rounded-full
          bg-slate-200
        "
      >
        <div
          className="
            h-full
            rounded-full
            bg-amber-700
            transition-all
            duration-700
            ease-out
          "
          style={{
            width: `${skill.level}%`,
          }}
        />
      </div>
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const TechnicalSkills = () => {
  const skillTiles = technicalSkills.categories
    .flatMap((category) =>
      category.skills.map((skill) => ({
        ...skill,
        category: category.title,
      }))
    )
    .concat([
      {
        name: 'Architecture',
        level: 88,
        category: 'Engineering',
      },
      {
        name: 'Deployment',
        level: 84,
        category: 'Workflow',
      },
    ]);

  return (
    <section
      id="skills"
      className="
        bg-[#0a0a0a]
        pt-24
        pb-28
        px-6
        md:px-12
        w-full
        relative
        overflow-hidden
        font-sans
      "
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="
          absolute
          top-1/4
          left-10
          w-96
          h-96
          rounded-full
          bg-red-600/10
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-1/4
          right-10
          w-96
          h-96
          rounded-full
          bg-red-500/10
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          max-w-6xl
          mx-auto
          relative
          z-10
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          data-aos="fade-up"
          className="mb-16 text-center"
        >
          <div
            className="
              inline-block
              border
              border-white/20
              rounded-full
              px-5
              py-1.5
              text-sm
              text-white/60
              font-bold
              mb-6
              shadow-sm
              bg-white/5
              backdrop-blur-sm
            "
          >
            Technical Stack
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              text-white
              tracking-tight
              mb-4
              uppercase
            "
          >
            My Skillset
          </h2>

          <p
            className="
              text-white/50
              text-base
              md:text-lg
              max-w-xl
              mx-auto
              leading-relaxed
            "
          >
            A comprehensive overview of my
            programming languages, frameworks,
            databases, and engineering concepts.
          </p>
        </div>

        {/* =================================================
            GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
          "
        >
          {skillTiles.map((skill, index) => (
            <SkillTile
              key={skill.name}
              skill={skill}
              category={skill.category}
              index={index}
              isExtra={
                index >=
                skillTiles.length - 2
              }
            />
          ))}
        </div>
      </div>

      {/* =================================================
          UI/UX ANIMATIONS
      ================================================= */}

      <style>{`
        .uiux-tile:hover .uiux-monitor {
          animation: uiuxMonitor 1.8s ease-in-out infinite;
        }

        .uiux-tile:hover .uiux-panel {
          animation: uiuxPanel 1.2s ease-in-out infinite;
        }

        .uiux-tile:hover .uiux-cursor {
          animation: uiuxCursor 1.5s ease-in-out infinite;
          transform-origin: center;
        }

        .uiux-tile:hover .uiux-icon-box::after {
          animation: uiuxRing 1.8s ease-in-out infinite;
        }

        .uiux-icon-box::after {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 18px;
          border: 1px solid transparent;
          pointer-events: none;
        }

        .group:hover .uiux-icon-box::after {
          border-color: rgba(180, 83, 9, 0.2);
        }

        @keyframes uiuxMonitor {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-1px);
          }
        }

        @keyframes uiuxPanel {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.55;
          }
        }

        @keyframes uiuxCursor {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }

          30% {
            transform: translate(1px, 1px) rotate(-3deg);
          }

          60% {
            transform: translate(2px, -1px) rotate(3deg);
          }

          80% {
            transform: translate(0, 0) rotate(0deg);
          }
        }

        @keyframes uiuxRing {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }

          50% {
            transform: scale(1.06);
            opacity: 0.25;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .uiux-tile:hover .uiux-monitor,
          .uiux-tile:hover .uiux-panel,
          .uiux-tile:hover .uiux-cursor,
          .uiux-tile:hover .uiux-icon-box::after {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TechnicalSkills;