"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFireworksPreset } from "@tsparticles/preset-fireworks";

const CanfitteBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFireworksPreset(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    init && (
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          preset: "",
          particles: {
            color: {
              value: "#ff460f",
            },
            links: {
              color: "#d43d0c",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },

            move: {
              decay: 0.05,
              direction: "top",
              enable: true,
              gravity: {
                enable: true,
              },
              outModes: {
                top: "none",
                default: "destroy",
              },
              speed: {
                min: 50,
                max: 100,
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 25,
              },
              enlighten: {
                enable: true,
                value: 25,
              },
              enable: true,
              speed: {
                min: 5,
                max: 15,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              speed: {
                min: -7,
                max: 7,
              },
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["circle", "square"],
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};

export default CanfitteBackground;
