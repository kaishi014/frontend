import { useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const contactEmail =
    personalInfo?.email || 'arraffiardhiansyah@gmail.com';

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (sent) {
      setSent(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!contactEmail) return;

    setIsSending(true);

    const subject = encodeURIComponent(
      `Portfolio Contact — ${formData.firstName} ${formData.lastName}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    );

    window.location.href =
      `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSending(false);
      setSent(true);
    }, 500);
  };

  return (
    <section
      id="contact"
      className="
        contact-section
        relative
        w-full
        overflow-hidden
        bg-[#f6f5f2]
        px-6
        py-24
        font-sans
        md:px-12
        md:py-32
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-32
          h-[520px]
          w-[520px]
          rounded-full
          bg-amber-700/[0.035]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[460px]
          w-[460px]
          rounded-full
          bg-slate-900/[0.025]
          blur-[130px]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            TWO COLUMN
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-16
            lg:grid-cols-12
            lg:items-start
            lg:gap-20
          "
        >

          {/* =================================================
              LEFT
          ================================================= */}

          <div
            data-aos="fade-up"
            className="
              relative
              lg:col-span-6
              lg:pr-8
            "
          >

            {/* Badge */}

            <div
              className="
                mb-8
                inline-flex
                items-center
                gap-3
                text-[10px]
                font-black
                uppercase
                tracking-[0.28em]
                text-amber-700
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-amber-700
                    animate-ping
                    opacity-30
                  "
                />

                <span
                  className="
                    relative
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-amber-700
                  "
                />
              </span>

              Let's connect
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-[760px]
                text-5xl
                font-black
                leading-[0.92]
                tracking-[-0.055em]
                text-[#20262b]
                sm:text-6xl
                md:text-7xl
                lg:text-[6.3rem]
                xl:text-[7rem]
              "
            >
              Let's build
              <br />
              something
              <br />

              <span className="relative inline-block">
                meaningful.

                <span
                  className="
                    absolute
                    -bottom-3
                    left-0
                    h-[4px]
                    w-16
                    rounded-full
                    bg-amber-700
                    transition-all
                    duration-700
                    md:w-24
                    hover:w-36
                  "
                />
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-9
                max-w-xl
                text-base
                font-medium
                leading-[1.8]
                text-slate-500
                md:text-lg
              "
            >
              Have an idea, a project, or just want to connect?
              Feel free to reach out.
            </p>

            {/* Available */}

            <div
              className="
                mt-12
                flex
                max-w-sm
                items-center
                gap-4
                text-[9px]
                font-black
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              <span
                className="
                  h-px
                  w-12
                  bg-amber-700/50
                "
              />

              <span>
                ARRAFFI / AVAILABLE FOR NEW PROJECTS
              </span>
            </div>

            {/* =================================================
                SOCIAL ICONS
            ================================================= */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-3
              "
            >

              {/* GitHub */}

              {socialLinks?.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    group
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-300
                    bg-white/80
                    text-slate-600
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#20262b]
                    hover:bg-[#20262b]
                    hover:text-white
                    hover:shadow-lg
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688 0 0-.546-1.379-.546-2.398 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
              {/* Whatsapp */}
              {socialLinks?.nwhatsapp && (
                <a
                  href={socialLinks.nwhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="whatsapp"
                  className="
                    group
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-300
                    bg-white/80
                    text-slate-600
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#20262b]
                    hover:bg-[#20262b]
                    hover:text-white
                    hover:shadow-lg
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              )}

              {/* Instagram */}

              {socialLinks?.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    group
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-300
                    bg-white/80
                    text-slate-600
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-amber-700
                    hover:bg-amber-700
                    hover:text-white
                    hover:shadow-lg
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              )}

              {/* Email icon */}

              <a
                href={`mailto:${contactEmail}`}
                aria-label="Email"
                className="
                  group
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-300
                  bg-white/80
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-amber-700
                  hover:bg-amber-700
                  hover:text-white
                  hover:shadow-lg
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
            </div>

            {/* Email address */}

            <a
              href={`mailto:${contactEmail}`}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                text-slate-500
                transition-colors
                hover:text-amber-700
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />

                <path d="m3 7 9 6 9-6" />
              </svg>

              {contactEmail}
            </a>
          </div>

          {/* =================================================
              RIGHT — FORM
          ================================================= */}

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="lg:col-span-6"
          >
            <div
              className="
                relative
                rounded-[2rem]
                border
                border-slate-200
                bg-white/70
                p-6
                shadow-[0_25px_70px_rgba(32,38,43,0.055)]
                backdrop-blur-xl
                md:p-8
                lg:p-10
              "
            >

              {/* Accent */}

              <div
                className="
                  absolute
                  left-8
                  right-8
                  top-0
                  h-[2px]
                  overflow-hidden
                  rounded-full
                  bg-slate-200
                  md:left-10
                  md:right-10
                "
              >
                <div
                  className="
                    h-full
                    w-1/3
                    rounded-full
                    bg-amber-700
                    transition-all
                    duration-700
                    hover:w-full
                  "
                />
              </div>

              {/* Form header */}

              <div className="mb-9">

                <div
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-amber-700
                  "
                >
                  {/* Small email icon */}

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-amber-700/10
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />

                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>

                  Start a conversation
                </div>

                <h3
                  className="
                    text-2xl
                    font-black
                    tracking-tight
                    text-[#20262b]
                    md:text-3xl
                  "
                >
                  Tell me about your idea.
                </h3>

                <p
                  className="
                    mt-2
                    max-w-md
                    text-sm
                    font-medium
                    leading-relaxed
                    text-slate-500
                  "
                >
                  Fill in the details below and I'll get back to you.
                </p>
              </div>

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >

                {/* Names */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-7
                    sm:grid-cols-2
                  "
                >

                  {/* First name */}

                  <div className="contact-input-group">
                    <label
                      htmlFor="firstName"
                      className="contact-label"
                    >
                      First name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="ARRAFFI"
                      className="contact-input"
                    />
                  </div>

                  {/* Last name */}

                  <div className="contact-input-group">
                    <label
                      htmlFor="lastName"
                      className="contact-label"
                    >
                      Last name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="contact-input"
                    />
                  </div>
                </div>

                {/* Email */}

                <div className="contact-input-group">
                  <label
                    htmlFor="email"
                    className="contact-label"
                  >
                    Email
                  </label>

                  <div className="relative">
                    <span
                      className="
                        pointer-events-none
                        absolute
                        left-0
                        top-1/2
                        -translate-y-1/2
                        text-slate-300
                        transition-colors
                        duration-300
                        peer-focus:text-amber-700
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                        />

                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </span>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="
                        contact-input
                        peer
                        pl-7
                        focus:pl-7
                      "
                    />
                  </div>
                </div>

                {/* Message */}

                <div className="contact-input-group">

                  <div className="mb-3 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="contact-label mb-0"
                    >
                      Message
                    </label>

                    <span
                      className="
                        font-mono
                        text-[10px]
                        font-bold
                        text-slate-400
                      "
                    >
                      {formData.message.length}
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me what you're thinking..."
                    className="
                      min-h-[150px]
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-slate-200
                      bg-[#faf9f6]
                      px-4
                      py-4
                      text-sm
                      font-medium
                      leading-relaxed
                      text-slate-900
                      outline-none
                      placeholder:text-slate-300
                      transition-all
                      duration-300
                      hover:border-slate-300
                      focus:border-amber-700
                      focus:bg-white
                      focus:shadow-[0_0_0_4px_rgba(180,83,9,0.06)]
                      md:min-h-[170px]
                    "
                  />
                </div>

                {/* =================================================
                    SEND
                ================================================= */}

                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    border-t
                    border-slate-200
                    pt-6
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-slate-400
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-amber-700
                      "
                    />

                    Usually replies via email
                  </div>

                  <button
                    type="submit"
                    disabled={isSending || !contactEmail}
                    className="
                      contact-send-button
                      group
                      relative
                      inline-flex
                      h-12
                      min-w-[180px]
                      items-center
                      justify-center
                      gap-3
                      overflow-hidden
                      rounded-full
                      bg-[#20262b]
                      px-7
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.14em]
                      text-black
                      shadow-[0_12px_30px_rgba(15,23,42,0.15)]
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:bg-amber-700
                      hover:shadow-[0_18px_38px_rgba(180,83,9,0.20)]
                      active:translate-y-0
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >

                    {/* Shine */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-y-0
                        -left-16
                        w-10
                        skew-x-[-20deg]
                        bg-white/15
                        transition-all
                        duration-700
                        group-hover:left-[115%]
                      "
                    />

                    <span className="relative z-10">
                      {isSending
                        ? 'Opening...'
                        : sent
                        ? 'Message Ready'
                        : 'Send Message'}
                    </span>

                    {/* Send icon */}

                    <span
                      className="
                        relative
                        z-10
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h13" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM LINE
        ===================================================== */}

        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="
            mt-20
            flex
            flex-col
            gap-3
            border-t
            border-slate-200
            pt-5
            text-[9px]
            font-black
            uppercase
            tracking-[0.18em]
            text-slate-400
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>ARRAFFI / PORTFOLIO</span>

          <span>
            © {new Date().getFullYear()} ARRAFFI
          </span>
        </div>
      </div>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`
        .contact-input-group {
          position: relative;
        }

        .contact-label {
          display: block;
          margin-bottom: 0.75rem;
          font-size: 0.75rem;
          line-height: 1rem;
          font-weight: 700;
          color: rgb(100 116 139);
          transition:
            color 300ms ease,
            transform 300ms ease;
        }

        .contact-input-group:focus-within .contact-label {
          color: rgb(180 83 9);
        }

        .contact-input {
          width: 100%;
          border: 0;
          border-bottom: 1px solid rgb(203 213 225);
          background: transparent;
          padding: 0.7rem 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: rgb(15 23 42);
          outline: none;
          transition:
            border-color 300ms ease,
            padding-left 300ms ease,
            background 300ms ease;
        }

        .contact-input::placeholder {
          color: rgb(203 213 225);
          font-weight: 500;
        }

        .contact-input:hover {
          border-color: rgb(148 163 184);
        }

        .contact-input:focus {
          border-color: rgb(180 83 9);
        }

        .contact-send-button::after {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.08);
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-input,
          .contact-label,
          .contact-send-button {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;