import React, { useState, useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import D from "../../components/layout/navbar/desktop";
import FooterMobile from "../../components/layout/footer/mobile";
import { BsPencil } from "react-icons/bs";
import axios from "axios";

import ButtonCustom from "../../components/tools/buttoncustom";

const Custom = () => {
  const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
  };

  const [sketchSettings, setSketchSettings] = useState({
    showStroke: false,
    showErase: false,
    strokeWidth: 0,
    strokeColor: "black",
    eraserWidth: 0,
  });

  const sketchRef = useRef();

  const SaveImage = () => {
    sketchRef.current
      .exportImage("png")
      .then((data) => {
        console.log(data);
        axios.put(
          "http://localhost:8000/api/users/1",
          {
            custom: [data],
          },
          {
            headers: {
              Authorization:
                "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTY5NDAyODIsImV4cCI6MTY5Njk0Mzg4Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluIn0.wNjcsBM2hu65tDdALqVIDCjVnQPj3cb-uS_isFdE533jzQPhFoI6NPt80Ks8DmQ9iLERSShfR1g5housQbU344rD-5-BIve10nEDhhJmyshqGDoYKMM5ti8Sw9z9fehF2iGcMG5Nmjon5EZN_EflxzShpJoca4WIc7Ln4EXJ1vDbjkSlYgN4w60F-yHrmG9NGgSORVuBHhQt6M6UZeZ2ROwE4JbWx_dQ0oE3UZIDYmXL1-YDjtqq56N_YjAOjNPkdUIDky3V1b_OJQ-2SU-YKrEz-hS-ShiDJ2gJeQsfV5dzhgCTFTaidNVHrKZZQut0iJ7WsKErM5YC-ZBqnfF9WQ",
            },
          }
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section className="h-full w-full ">
      <D />
      <div className="bg-gray-200 pr-8 lg:py-16 xl:py-20 grid grid-cols-[20%,80%]">
        <div className=" grid grid-rows-2 justify-center items-center ">
          <div className="flex flex-col justify-center items-center">
            <ButtonCustom
              className={sketchSettings.showStroke ? "bg-green-500" : null}
              onClick={() => {
                sketchRef.current.eraseMode(false);
                setSketchSettings({
                  strokeWidth: 0,
                  showStroke: !sketchSettings.showStroke,
                });
              }}
            />
            {sketchSettings.showStroke === true ? (
              <>
                <input
                  type="text"
                  onChange={(event) =>
                    setSketchSettings({
                      showStroke: true,
                      strokeWidth: event.target.value,
                    })
                  }
                />
                <input
                  type="color"
                  onChange={(event) => {
                    setSketchSettings({
                      showStroke: true,
                      strokeColor: event.target.value,
                    });
                  }}
                />
              </>
            ) : null}
          </div>
          <div className="pl-20 inline-flex justify-center items-center">
            <ButtonCustom
              className={sketchSettings.showErase ? "bg-green-900" : ""}
              onClick={() => {
                sketchRef.current.eraseMode(true);
                setSketchSettings({
                  eraserWidth: 0,
                  showErase: !sketchSettings.showErase,
                });
              }}
            />
            {sketchSettings.showErase ? (
              <>
                <input
                  type="text"
                  onChange={(event) =>
                    setSketchSettings({
                      showErase: true,
                      eraserWidth: event.target.value,
                    })
                  }
                />
              </>
            ) : null}
          </div>
          <div className="row-span-2">
            <div className="w-full inline-flex justify-around">
              <button
                onClick={() => {
                  sketchRef.current.undo();
                }}
              >
                AR
              </button>
              <button
                onClick={() => {
                  sketchRef.current.redo();
                }}
              >
                AV
              </button>
            </div>
          </div>
          <div className="row-span-2">
            <button
              className="p-2 border-[1px] w-28 border-black text-center mt-12  hover:bg-red-500/50"
              onClick={() => {
                SaveImage();
              }}
            >
              Save
            </button>
            <button
              className="p-2 border-[1px] w-28 border-black text-center mt-12  hover:bg-red-500/50"
              onClick={() => {
                sketchRef.current.clearCanvas();
                setSketchSettings({ showStroke: false, showErase: false });
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <div>
          <ReactSketchCanvas
            className="border-2 border-black   h-[34rem]"
            style={styles}
            width="w-full"
            height="h-full"
            strokeWidth={sketchSettings.strokeWidth}
            strokeColor={`${sketchSettings.strokeColor}`}
            ref={sketchRef}
            eraserWidth={sketchSettings.eraserWidth}
          />
        </div>
      </div>
      <FooterMobile />
    </section>
  );
};
export default Custom;
