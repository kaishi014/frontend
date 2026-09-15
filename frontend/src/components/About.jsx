import { useEffect, useRef } from 'react';
import stackImage from '../assets/about/amine.jpg';
import { aboutContent } from '../data/portfolioData';

const About = () => {
  const cardRef = useRef(null);
  const frameRef = useRef(null);
  const ropePathRef = useRef(null);
  const physicsFrameRef = useRef(null);

  const physicsRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    velocityX: 0,
    velocityY: 0,
    rotation: 0,
    dragging: false,
    pointerId: null,
    startPointerX: 0,
    startPointerY: 0,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
  });

  const canDragRef = useRef(false);
  const motionEnabledRef = useRef(true);
  const returningRef = useRef(false);

  /*
   * ============================================================
   * SETTINGS
   * ============================================================
   */

  const ROPE_LENGTH = 235;

  const MAX_X = 220;
  const MIN_Y = -130;
  const MAX_Y = 160;

  /*
   * ============================================================
   * CLAMP
   * ============================================================
   */

  const clamp = (value, min, max) => {
    return Math.max(
      min,
      Math.min(max, value)
    );
  };

  /*
   * ============================================================
   * UPDATE ROPE
   * ============================================================
   */

  const updateRope = () => {
    const rope = ropePathRef.current;

    if (!rope) return;

    const physics = physicsRef.current;

    const movement = clamp(
      physics.velocityX * 0.018,
      -24,
      24
    );

    const positionCurve = clamp(
      physics.x * 0.08,
      -18,
      18
    );

    const curve =
      movement +
      positionCurve;

    const verticalCurve = clamp(
      physics.velocityY * 0.006,
      -10,
      10
    );

    const path = `
      M 50 0

      C
        ${50 + curve * 0.25} ${ROPE_LENGTH * 0.18},
        ${50 + curve} ${ROPE_LENGTH * 0.48},
        ${50 + curve * 0.55} ${ROPE_LENGTH * 0.72}

      C
        ${50 + curve * 0.25} ${ROPE_LENGTH * 0.84},
        ${50 + verticalCurve} ${ROPE_LENGTH * 0.94},
        50 ${ROPE_LENGTH}
    `;

    rope.setAttribute('d', path);
  };

  /*
   * ============================================================
   * UPDATE VISUAL
   * ============================================================
   */

  const updateVisual = () => {
    const frame = frameRef.current;

    if (!frame) return;

    const {
      x,
      y,
      rotation,
    } = physicsRef.current;

    frame.style.transform = `
      translate3d(
        ${x}px,
        ${y}px,
        0
      )
      rotateZ(
        ${rotation}deg
      )
    `;

    updateRope();
  };

  /*
   * ============================================================
   * PHYSICS LOOP
   * ============================================================
   */

  useEffect(() => {
    const motionQuery =
      window.matchMedia(
        '(prefers-reduced-motion: no-preference)'
      );

    canDragRef.current = true;

    motionEnabledRef.current =
      motionQuery.matches;

    let previousTime =
      performance.now();

    const tick = (time) => {
      const physics =
        physicsRef.current;

      const deltaTime =
        Math.min(
          (time - previousTime) / 1000,
          0.04
        );

      previousTime = time;

      /*
       * ========================================================
       * DRAGGING
       * ========================================================
       */

      if (physics.dragging) {
        const dx =
          physics.targetX -
          physics.x;

        const dy =
          physics.targetY -
          physics.y;

        /*
         * Smooth photo movement.
         */

        physics.x +=
          dx * 0.30;

        physics.y +=
          dy * 0.30;

        /*
         * Velocity.
         */

        physics.velocityX =
          physics.velocityX * 0.78 +
          (
            dx *
            0.22 /
            Math.max(
              deltaTime,
              0.016
            )
          );

        physics.velocityY =
          physics.velocityY * 0.78 +
          (
            dy *
            0.22 /
            Math.max(
              deltaTime,
              0.016
            )
          );

        /*
         * Natural rotation.
         */

        const desiredRotation =
          physics.velocityX *
            0.018 +
          physics.x *
            0.032;

        physics.rotation +=
          (
            desiredRotation -
            physics.rotation
          ) *
          0.28;

        physics.rotation =
          clamp(
            physics.rotation,
            -10,
            10
          );
      }

      /*
       * ========================================================
       * RELEASE → SMOOTH RETURN
       * ========================================================
       */

      else {
        /*
         * Spring strength.
         */

        const springX = 26;
        const dampingX = 8.5;

        const springY = 30;
        const dampingY = 8.5;

        const springRotation = 34;
        const dampingRotation = 9;

        /*
         * X RETURN
         */

        const forceX =
          -springX *
            physics.x -
          dampingX *
            physics.velocityX;

        physics.velocityX +=
          forceX *
          deltaTime;

        physics.x +=
          physics.velocityX *
          deltaTime;

        /*
         * Y RETURN
         */

        const forceY =
          -springY *
            physics.y -
          dampingY *
            physics.velocityY;

        physics.velocityY +=
          forceY *
          deltaTime;

        physics.y +=
          physics.velocityY *
          deltaTime;

        /*
         * ROTATION RETURN
         */

        const rotationForce =
          -springRotation *
            physics.rotation -
          dampingRotation *
            physics.rotation;

        physics.rotation +=
          rotationForce *
          deltaTime;

        physics.rotation +=
          physics.velocityX *
          0.0007;

        physics.rotation =
          clamp(
            physics.rotation,
            -10,
            10
          );

        /*
         * ======================================================
         * SNAP ONLY WHEN ALREADY VERY CLOSE
         * ======================================================
         */

        if (
          Math.abs(physics.x) < 0.08 &&
          Math.abs(physics.velocityX) < 0.08
        ) {
          physics.x = 0;
          physics.velocityX = 0;
        }

        if (
          Math.abs(physics.y) < 0.08 &&
          Math.abs(physics.velocityY) < 0.08
        ) {
          physics.y = 0;
          physics.velocityY = 0;
        }

        if (
          Math.abs(physics.rotation) < 0.08
        ) {
          physics.rotation = 0;
        }

        /*
         * Exact original position.
         */

        if (
          Math.abs(physics.x) < 0.08 &&
          Math.abs(physics.y) < 0.08 &&
          Math.abs(physics.velocityX) < 0.08 &&
          Math.abs(physics.velocityY) < 0.08 &&
          Math.abs(physics.rotation) < 0.08
        ) {
          physics.x = 0;
          physics.y = 0;

          physics.velocityX = 0;
          physics.velocityY = 0;

          physics.rotation = 0;

          returningRef.current = false;
        }
      }

      /*
       * Reduced motion.
       */

      if (
        !motionEnabledRef.current &&
        !physics.dragging &&
        !returningRef.current
      ) {
        physics.x = 0;
        physics.y = 0;

        physics.velocityX = 0;
        physics.velocityY = 0;

        physics.rotation = 0;
      }

      /*
       * Update photo + rope.
       */

      updateVisual();

      physicsFrameRef.current =
        requestAnimationFrame(
          tick
        );
    };

    physicsFrameRef.current =
      requestAnimationFrame(
        tick
      );

    return () => {
      if (
        physicsFrameRef.current
      ) {
        cancelAnimationFrame(
          physicsFrameRef.current
        );

        physicsFrameRef.current =
          null;
      }
    };
  }, []);

  /*
   * ============================================================
   * POINTER DOWN
   * ============================================================
   */

  const handlePointerDown = (
    event
  ) => {
    /*
     * Keep mobile scrolling.
     */

    if (
      event.pointerType ===
      'touch'
    ) {
      return;
    }

    if (
      !frameRef.current ||
      !canDragRef.current
    ) {
      return;
    }

    const physics =
      physicsRef.current;

    physics.dragging = true;

    returningRef.current = false;

    physics.pointerId =
      event.pointerId;

    /*
     * Pointer start.
     */

    physics.startPointerX =
      event.clientX;

    physics.startPointerY =
      event.clientY;

    /*
     * Current photo position.
     */

    physics.startX =
      physics.x;

    physics.startY =
      physics.y;

    physics.targetX =
      physics.x;

    physics.targetY =
      physics.y;

    physics.lastX =
      physics.x;

    physics.lastY =
      physics.y;

    physics.lastTime =
      event.timeStamp;

    /*
     * Stop old momentum.
     */

    physics.velocityX *= 0.15;
    physics.velocityY *= 0.15;

    /*
     * Cursor.
     */

    frameRef.current.classList.add(
      'about-card-grabbing'
    );

    /*
     * Capture pointer.
     */

    try {
      event.currentTarget.setPointerCapture(
        event.pointerId
      );
    } catch {
      // Ignore.
    }

    event.preventDefault();
  };

  /*
   * ============================================================
   * POINTER MOVE
   * ============================================================
   */

  const handlePointerMove = (
    event
  ) => {
    const physics =
      physicsRef.current;

    if (
      !physics.dragging ||
      physics.pointerId !==
        event.pointerId
    ) {
      return;
    }

    /*
     * Mouse movement.
     */

    const deltaX =
      event.clientX -
      physics.startPointerX;

    const deltaY =
      event.clientY -
      physics.startPointerY;

    /*
     * Position limits.
     */

    const nextX =
      clamp(
        physics.startX +
          deltaX,
        -MAX_X,
        MAX_X
      );

    const nextY =
      clamp(
        physics.startY +
          deltaY,
        MIN_Y,
        MAX_Y
      );

    /*
     * Velocity.
     */

    const elapsed =
      Math.max(
        (
          event.timeStamp -
          physics.lastTime
        ) / 1000,
        0.016
      );

    const velocityX =
      (
        nextX -
        physics.lastX
      ) / elapsed;

    const velocityY =
      (
        nextY -
        physics.lastY
      ) / elapsed;

    physics.velocityX =
      physics.velocityX * 0.65 +
      velocityX * 0.35;

    physics.velocityY =
      physics.velocityY * 0.65 +
      velocityY * 0.35;

    physics.lastX =
      nextX;

    physics.lastY =
      nextY;

    physics.lastTime =
      event.timeStamp;

    /*
     * Target.
     */

    physics.targetX =
      nextX;

    physics.targetY =
      nextY;

    /*
     * Immediate position.
     */

    physics.x =
      nextX;

    physics.y =
      nextY;

    /*
     * Natural rotation.
     */

    physics.rotation =
      clamp(
        nextX * 0.032 +
        physics.velocityX * 0.018,
        -10,
        10
      );

    updateVisual();

    event.preventDefault();
  };

  /*
   * ============================================================
   * POINTER UP
   * ============================================================
   */

  const releaseCard = (
    event
  ) => {
    const physics =
      physicsRef.current;

    if (
      !physics.dragging ||
      physics.pointerId !==
        event.pointerId
    ) {
      return;
    }

    /*
     * Stop dragging.
     */

    physics.dragging = false;

    /*
     * IMPORTANT:
     *
     * We do NOT set x/y to zero.
     *
     * The physics loop will smoothly
     * bring the photo back.
     */

    returningRef.current = true;

    /*
     * Keep a tiny amount of momentum.
     */

    physics.velocityX *= 0.12;
    physics.velocityY *= 0.12;

    /*
     * Cursor.
     */

    frameRef.current?.classList.remove(
      'about-card-grabbing'
    );

    /*
     * Release pointer capture.
     */

    try {
      if (
        event.currentTarget.hasPointerCapture(
          event.pointerId
        )
      ) {
        event.currentTarget.releasePointerCapture(
          event.pointerId
        );
      }
    } catch {
      // Ignore.
    }

    physics.pointerId = null;

    event.preventDefault();
  };

  /*
   * ============================================================
   * POINTER CANCEL
   * ============================================================
   */

  const handlePointerCancel = (
    event
  ) => {
    const physics =
      physicsRef.current;

    if (!physics.dragging) {
      return;
    }

    physics.dragging = false;

    physics.pointerId = null;

    returningRef.current = true;

    physics.velocityX *= 0.12;
    physics.velocityY *= 0.12;

    frameRef.current?.classList.remove(
      'about-card-grabbing'
    );

    event.preventDefault();
  };

  /*
   * ============================================================
   * JSX
   * ============================================================
   */

  return (
    <section
      id="about"
      className="
        bg-[#ff2a2a]
        pt-20
        pb-40
        px-6
        md:px-12
        w-full
        relative
        overflow-hidden
        font-sans
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          flex
          flex-col
          md:flex-row
          gap-16
          items-start
        "
      >

        {/* ====================================================
            PHOTO
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            w-full
            md:w-[350px]
            shrink-0
            mt-12
            md:mt-0
          "
        >

          <div
            ref={cardRef}
            data-aos="drop-bounce"
            className="
              relative
              flex
              w-full
              justify-center
            "
          >

            {/* ==================================================
                EVERYTHING MOVES TOGETHER
            ================================================== */}

            <div
              ref={frameRef}
              onPointerDown={
                handlePointerDown
              }
              onPointerMove={
                handlePointerMove
              }
              onPointerUp={
                releaseCard
              }
              onPointerCancel={
                handlePointerCancel
              }
              className="
                about-card-physics
                relative
                z-20
                w-full
                max-w-[280px]
                cursor-grab
                rounded-2xl
                bg-gray-900
                p-3
                shadow-[0_24px_50px_rgba(0,0,0,0.38)]
                select-none
                touch-none
                overflow-visible
                will-change-transform
              "
              style={{
                transform:
                  'translate3d(0,0,0) rotateZ(0deg)',

                /*
                 * Hanging point = top center.
                 */

                transformOrigin:
                  '50% 0%',
              }}
            >

              {/* =================================================
                  LONG FLEXIBLE ROPE
              ================================================= */}

              <svg
                aria-hidden="true"
                className="
                  absolute
                  pointer-events-none
                  overflow-visible
                "
                style={{
                  left: '50%',
                  top:
                    `-${ROPE_LENGTH}px`,
                  width: '110px',
                  height:
                    `${ROPE_LENGTH + 12}px`,
                  transform:
                    'translateX(-50%)',
                  zIndex: 0,
                }}
                viewBox={`
                  0
                  0
                  110
                  ${ROPE_LENGTH + 12}
                `}
                preserveAspectRatio="none"
              >

                {/* Main rope */}

                <path
                  ref={ropePathRef}
                  d={`
                    M 55 0

                    C
                      55 ${ROPE_LENGTH * 0.20},
                      55 ${ROPE_LENGTH * 0.50},
                      55 ${ROPE_LENGTH * 0.72}

                    C
                      55 ${ROPE_LENGTH * 0.84},
                      55 ${ROPE_LENGTH * 0.94},
                      55 ${ROPE_LENGTH}
                  `}
                  fill="none"
                  stroke="#000"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Subtle rope highlight */}

                <path
                  d={`
                    M 55 0

                    C
                      55 ${ROPE_LENGTH * 0.20},
                      55 ${ROPE_LENGTH * 0.50},
                      55 ${ROPE_LENGTH * 0.72}

                    C
                      55 ${ROPE_LENGTH * 0.84},
                      55 ${ROPE_LENGTH * 0.94},
                      55 ${ROPE_LENGTH}
                  `}
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.35"
                  pointerEvents="none"
                />

              </svg>

              {/* =================================================
                  CLIP
              ================================================= */}

              <div
                className="
                  absolute
                  -top-6
                  left-1/2
                  z-30
                  flex
                  h-12
                  w-6
                  -translate-x-1/2
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-gray-400
                  bg-gradient-to-b
                  from-gray-200
                  to-gray-300
                  shadow-[0_3px_12px_rgba(0,0,0,0.35)]
                  pointer-events-none
                "
              >

                <div
                  className="
                    h-5
                    w-2
                    rounded-full
                    bg-gray-500/50
                    shadow-inner
                  "
                />

              </div>

              {/* =================================================
                  DARK CLIP BASE
              ================================================= */}

              <div
                className="
                  absolute
                  -top-3
                  left-1/2
                  z-20
                  flex
                  h-6
                  w-16
                  -translate-x-1/2
                  items-center
                  justify-center
                  rounded-t-xl
                  bg-gray-900
                  pointer-events-none
                "
              >

                <div
                  className="
                    h-2
                    w-8
                    rounded-full
                    bg-black/30
                    shadow-inner
                  "
                />

              </div>

              {/* =================================================
                  PHOTO
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  aspect-[3/4]
                  w-full
                  overflow-hidden
                  rounded-xl
                  bg-gray-800
                  border-2
                  border-transparent
                  pointer-events-none
                "
              >

                <img
                  src={stackImage}
                  alt="AMINE — Software Developer"
                  draggable="false"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-top
                    select-none
                    pointer-events-none
                  "
                />

              </div>

            </div>
          </div>
        </div>

        {/* ====================================================
            TEXT
        ==================================================== */}

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="
            flex-1
            text-white
            mt-8
            md:mt-0
            relative
            z-20
          "
        >

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              text-black
              mb-4
            "
          >
            {aboutContent.heading}
          </h2>

          <div
            className="
              space-y-5
              text-base
              md:text-lg
              font-medium
              leading-relaxed
              max-w-3xl
              text-slate-600
            "
          >

            <p
              className="
                font-bold
                text-amber-700
              "
              dangerouslySetInnerHTML={{
                __html:
                  aboutContent.bio,
              }}
            />

            <p>
              I am interested in the space
              where thoughtful design and
              practical engineering meet. I
              like turning an early idea into
              a clear experience that feels
              useful, calm, and intentional.
            </p>

            <p>
              My approach is hands-on:
              understand the problem, shape
              the structure, build carefully,
              and keep improving the details
              that make a product easier to
              use. I value readable work,
              strong collaboration, and
              interfaces that communicate
              without unnecessary noise.
            </p>

            <p>
              Outside the code itself, I enjoy
              the visual side of digital work:
              pacing, composition, motion, and
              the small interactions that give
              a project its character.
            </p>

          </div>
        </div>

      </div>

      {/* ========================================================
          BOTTOM DIVIDER
      ======================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          pointer-events-none
          z-30
          translate-y-1
        "
      >

        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="
            w-full
            h-12
            md:h-20
            fill-white
          "
        >

          <path
            d="
              M321.39,56.44
              c58-10.79,114.16-30.13,172-41.86
              c82.39-16.72,168.19-17.73,250.45-.39
              C823.78,31,906.67,72,985.66,92.83
              c70.05,18.48,146.53,26.09,214.34,3
              V120H0V95.8
              C59.71,118.08,130.83,119.62,
              189.5,99.8
              C242.79,81.82,282.88,63.6,
              321.39,56.44Z
            "
          />

        </svg>
      </div>

      {/* ========================================================
          STAR 1
      ======================================================== */}

      <div
        className="
          absolute
          top-10
          right-10
          md:right-20
          text-black
          opacity-30
          pointer-events-none
        "
      >

        <svg
          className="
            w-16
            h-16
          "
          fill="currentColor"
          viewBox="0 0 24 24"
        >

          <path
            d="
              M12 0
              l2.5 8.5
              L23 12
              l-8.5 2.5
              L12 23
              l-2.5-8.5
              L1 12
              l8.5-2.5z
            "
          />

        </svg>

      </div>

      {/* ========================================================
          STAR 2
      ======================================================== */}

      <div
        className="
          absolute
          bottom-32
          left-4
          md:left-20
          text-black
          opacity-30
          pointer-events-none
        "
      >

        <svg
          className="
            w-20
            h-20
          "
          fill="currentColor"
          viewBox="0 0 24 24"
        >

          <path
            d="
              M12 0
              l2.5 8.5
              L23 12
              l-8.5 2.5
              L12 23
              l-2.5-8.5
              L1 12
              l8.5-2.5z
            "
          />

        </svg>

      </div>

    </section>
  );
};

export default About;