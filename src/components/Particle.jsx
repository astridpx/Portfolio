import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 10,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },

              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.5,
              },
            },
          },

          fullScreen: { enable: false, zIndex: 0 }, // ? fix the issue of particle overlaping the height
          particles: {
            color: {
              value: ["#ffffff", "#be9a8e", "#f9465c", "#6c6edf", "#e9d559"],
            },

            links: {
              enable: false,
            },

            collisions: {
              enable: true,
            },

            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },

              random: true,
              speed: 2,
              straight: false,
            },

            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100, // no of particles by reload
            },

            opacity: {
              value: 0.5,
            },

            shape: {
              type: "circle",
            },

            size: {
              value: { min: 1, max: 3 },
            },
          },

          detectRetina: true,
        }}
      />
    </>
  );
};

export default Particle;
