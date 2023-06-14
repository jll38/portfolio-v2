import { useEffect } from "react";
export default function IntroAnim(showAnim) {
  let width = 0;
  useEffect(() => {
    setTimeout(() => {
      document
        .getElementById("cerulean")
        .classList.replace("w-[0px]", "w-full");
    }, 500);
    setTimeout(() => {
      document
        .getElementById("prussian")
        .classList.replace("w-[0px]", "w-full");
    }, 1000);
    setTimeout(() => {
      document.getElementById("federal").classList.replace("w-[0px]", "w-full");
    }, 1500);
    setTimeout(() => {
        document.getElementById("intro").classList.replace("opacity-100", "opacity-0");
      }, 3000);
      setTimeout(() => {
        document.getElementById("intro").classList.add("hidden");
      }, 3500);

  }, []);
  return (
    <>
      <div id="intro" className="bg-aero w-screen h-screen fixed z-50 opacity-100 transition-all duration-500">
        <div
          id="cerulean"
          className={`h-full w-[0px] bg-cerulean transition-all duration-300 z-[51] fixed`}
        ></div>
        <div
          id="prussian"
          className={`h-full w-[0px] bg-prussian transition-all duration-300 z-[52] fixed`}
        ></div>
        <div
          id="federal"
          className={`h-full w-[0px] bg-federal transition-all duration-300 z-[52] fixed  overflow-hidden`}
        >
          <div className="w-screen h-screen flex justify-center items-center">
            <div className="text-[4em] sm:text-[8em] font-bold tracking-tighter text-center">Julian Lechner</div>
          </div>
        </div>
      </div>
    </>
  );
}
