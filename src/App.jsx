import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Cloud, OrbitControls, SpotLight } from "@react-three/drei";
import cloud from "/cloud7.jpg";
import night from "/night2.jpg";
import Sun from "./assets/Sun";
import { useState, useEffect, useRef } from "react";
import sunkey from "/sunkey.png";
import moonkey from "/moonkey.png";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);
import Moon from "./Moon";

function App() {
  const postionRef = useRef();
  const [day, setDay] = useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );
  const draggableRef = useRef(null);
  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(day));
    if (day) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [day]);

  useEffect(() => {
    const bounce = draggableRef.current;
    if (bounce) {
      Draggable.create(bounce, {
        type: "y",
        bounds: document.querySelector(".cont"),
        onPress: function () {
          this.startPos = this.y;
        },
        onDragEnd: function () {
          if (this.y > -10) {
            setDay((prevDay) => !prevDay);
          }

          gsap.to(bounce, {
            y: 0,
            ease: "bounce.out",
            duration: 0.5,
          });
        },
      });
    }
  }, []);

  const resetpostion = () => {
    postionRef.current.reset();
  };

  return (
    <div className="relative h-screen  w-screen bg-gradient-to-t from-sky-300 to-sky-500 dark:bg-slate-800 flex justify-center items-center">
      {day ? (
        <img
          src={cloud}
          className="absolute top-0 dayref left-0 opacity-[1%]"
          alt=""
        />
      ) : (
        <img src={night} className="absolute top-0 left-0" alt="" />
      )}

      <Canvas style={{ height: "100vh", width: "100%" }} position={[0, 0, 1]}>
        <OrbitControls
          ref={postionRef}
          maxDistance={20}
          maxAzimuthAngle={20} // Maximum angle for the horizontal (Y-axis) rotation
          enableRotate={true} // Enable rotation, as we need the X-axis rotation
          minPolarAngle={Math.PI / 4} // Set minimum polar angle to restrict vertical rotation
          maxPolarAngle={Math.PI / 2} // Set maximum polar angle to restrict vertical rotation
        />
        <directionalLight intensity={day ? 1 : 0.2} />
        {day ? (
          <>
            <Cloud scale={0.3} position={[8, 8, 4]} />
            <Cloud scale={0.3} position={[3, 7, 1]} />
            <Cloud scale={0.4} position={[-3, 6, 8]} />
            <Cloud scale={0.2} position={[1, 8, 6]} />
            <Cloud scale={0.3} position={[-8, 7, 3]} />
            <Cloud scale={0.2} position={[9, 6, -3]} />
            <Cloud scale={0.2} position={[-3, 8, -8]} />
            <hemisphereLight />

            <Sun position={[0, 5, -5]} rotation={[0, 0, 0]} />
          </>
        ) : (
          <>
            <pointLight position={[0, 5, -2]} intensity={20} />
            <pointLight
              position={[2.3, 0.5, 2]}
              intensity={15}
              color={"yellow"}
            />
            <pointLight
              position={[14, 0.5, 2]}
              intensity={15}
              color={"yellow"}
            />
            <pointLight
              position={[-10.7, 0.5, 2]}
              intensity={15}
              color={"yellow"}
            />
            <pointLight
              position={[-2.3, 0.5, -3]}
              intensity={15}
              color={"yellow"}
            />
            <pointLight
              position={[11, 0.5, -3]}
              intensity={15}
              color={"yellow"}
            />
            <pointLight
              position={[-14.5, 0.5, -3]}
              intensity={15}
              color={"yellow"}
            />
            <pointLight
              position={[-14.5, 0.5, -3]}
              intensity={15}
              color={"yellow"}
            />

            <Moon position={[0, 5, -5]} rotation={[1, 0, 0]} />
          </>
        )}

        <Model rotation={[0, 0, 0]} position={[0, -2, -1]} />
      </Canvas>
      <p
        style={{ fontSize: "7rem", lineHeight: 1 }}
        className="absolute top-11 left-10 font-Sigma w-[600px] text-white"
      >
        The Monster Truck
      </p>
      <div className="absolute -top-40 right-10 text-white h-[40%]  cont">
        <button>
          <img
            ref={draggableRef}
            src={day ? sunkey : moonkey}
            className="h-[30rem] w-30 drag "
            alt=""
          />
        </button>
      </div>
      <div className="absolute bottom-20  w-screen flex justify-between px-96 items-center">
        <button
          onClick={resetpostion}
          className="text-2xl border-2 p-3 border-white text-white rounded-2xl hover:bg-white hover:text-black "
        >
          Reset
        </button>
        <a
          href="https://github.com/MIL10x"
          target="blank"
          className="text-white hover:text-2xl transition-all duration-300"
        >
          github
        </a>
      </div>
    </div>
  );
}

export default App;
