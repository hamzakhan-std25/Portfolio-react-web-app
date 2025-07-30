import React from "react";
import Particles from "react-tsparticles";
import { loadFountainPreset } from "tsparticles-preset-fountain";

const ParticlesFountain = () => {
    const particlesInit = async (engine) => {
        await loadFountainPreset(engine);
    };

    return (
        <Particles
            id="fountain"
            init={particlesInit}
            options={{
                preset: "fountain",
                particles: {
                    color: {
                        value: ["#00ffff", "#ff00ff", "#ffff00"]
                    }
                }
                ,
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                background: {
                    color: "#000000", // Change to match your design
                },
            }}
        />
    );
};

export default ParticlesFountain;
