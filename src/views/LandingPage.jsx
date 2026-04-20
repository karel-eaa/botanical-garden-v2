import { useProgressStore } from "../store/progressStore";
import { useState } from "react";

export default function LandingPage() {
  // DIFFERENT VIEWS
  const [index, setIndex] = useState(0);
  const advance = () => setIndex(index + 1);
  const startGame = useProgressStore((s) => s.startGame);

  // IMAGES
  const landingImg = `${import.meta.env.BASE_URL}images/instruction/LandingPageImg.webp`;
  const gardener = `${import.meta.env.BASE_URL}images/instruction/InstructionPage.png`;
  const gardener2 = `${import.meta.env.BASE_URL}images/instruction/InstructionPagePt2.png`;
  const gardener3 = `${import.meta.env.BASE_URL}images/instruction/InstructionPagePt3.png`;

  // VIEW LOGIC
  if (index === 0) {
    return (
      <main className="min-h-screen bg-[#F1F8E9]">
        <div className="flex flex-col items-center p-8 text-center">
          <h1 className="text-3xl font-bold text-[#607A2E] text-[36px] w-[329px]">
            Welcome to the Botanical Garden
          </h1>
          <div className="mt-[35px] flex w-full max-w-xs items-center gap-3 text-[#8C8C84] mb-[72px]">
            <span className="h-px flex-1 bg-[#8C8C84]/70"></span>
            <span className="text-[23px]">Aarhus</span>
            <span className="h-px flex-1 bg-[#8C8C84]/70"></span>
          </div>
          <img
            src={landingImg}
            alt="Landing page"
            width={345}
            height={329}
            className="mb-[86px]"
          />
          <button
            onClick={advance}
            className="rounded-[40px] pt-[12px] pr-[60px] pb-[13px] pl-[62px] bg-[#A5D14F] text-white text-[28px] font-bold"
          >
            Start
          </button>
        </div>
      </main>
    );
  } else if (index === 1) {
    return (
      <main className="min-h-screen bg-[#F1F8E9] px-[50px] pt-[70px]">
        <div className="relative w-full max-w-[333px] h-[373px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="333"
            height="373"
            viewBox="0 0 333 373"
            fill="none"
            className="absolute inset-0"
          >
            <path
              d="M18.9529 0C9.52105 0 0 7.00298 0 20.3455V276.248C0 292.945 5.50435 299.727 18.9529 299.727H59.0308V373L119.192 299.764H314.047C326.811 299.764 333 292.06 333 276.285V20.3823C333 7.0398 323.479 0.0368576 314.047 0.0368576H18.9529V0Z"
              fill="white"
            />
          </svg>
          <div className="relative z-10 p-[20px] h-full flex flex-col justify-start">
            <p className="text-[16px] text-[#4A5E29] mb-[40px] leading-[150%] tracking-[1.2px] text-[24px]">
              Nice to meet you! <br className="mb-[14px]" /> The garden is
              divided into 4 sections. Each zone contains unique plants you will
              need to find.
            </p>
          </div>
          <button
            onClick={advance}
            className="absolute bottom-[40px] right-[20px] z-20 w-[78px] h-[61px] rounded-[40px] bg-[#A5D14F] flex items-center justify-center py-[12px] text-white font-bold leading-[100%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="50"
              viewBox="0 0 36 72"
              fill="none"
            >
              <path
                d="M7.35596 19.74L10.539 16.56L27.876 33.891C28.1554 34.1687 28.3772 34.4989 28.5286 34.8627C28.6799 35.2264 28.7578 35.6165 28.7578 36.0105C28.7578 36.4045 28.6799 36.7945 28.5286 37.1583C28.3772 37.522 28.1554 37.8523 27.876 38.13L10.539 55.47L7.35896 52.29L23.631 36.015L7.35596 19.74Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <img src={gardener} alt="Gardener" width={285} height={445} />
      </main>
    );
  } else if (index === 2) {
    return (
      <main className="min-h-screen bg-[#F1F8E9] px-[50px] pt-[70px]">
        <div className="relative w-full max-w-[333px] h-[373px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="333"
            height="373"
            viewBox="0 0 333 373"
            fill="none"
            className="absolute inset-0"
          >
            <path
              d="M18.9529 0C9.52105 0 0 7.00298 0 20.3455V276.248C0 292.945 5.50435 299.727 18.9529 299.727H59.0308V373L119.192 299.764H314.047C326.811 299.764 333 292.06 333 276.285V20.3823C333 7.0398 323.479 0.0368576 314.047 0.0368576H18.9529V0Z"
              fill="white"
            />
          </svg>
          <div className="relative z-10 p-[20px] h-full flex flex-col justify-start">
            <p className="text-[16px] text-[#4A5E29] leading-[150%] tracking-[1.2px] text-[24px]">
              Your task is very simple! You will be shown an image of a plant
              before each challenge. Find the plant that matches the image and
              scan the QR code to collect it.
            </p>
          </div>
          <button
            onClick={advance}
            className="absolute bottom-[40px] right-[20px] z-20 w-[78px] h-[61px] rounded-[40px] bg-[#A5D14F] flex items-center justify-center py-[12px] text-white font-bold leading-[100%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="50"
              viewBox="0 0 36 72"
              fill="none"
            >
              <path
                d="M7.35596 19.74L10.539 16.56L27.876 33.891C28.1554 34.1687 28.3772 34.4989 28.5286 34.8627C28.6799 35.2264 28.7578 35.6165 28.7578 36.0105C28.7578 36.4045 28.6799 36.7945 28.5286 37.1583C28.3772 37.522 28.1554 37.8523 27.876 38.13L10.539 55.47L7.35896 52.29L23.631 36.015L7.35596 19.74Z"
                fill="white"
              />
            </svg>
          </button>
          <img src={gardener2} alt="Gardener" width={285} height={445} />
        </div>
      </main>
    );
  } else if (index === 3) {
    return (
      <main className="min-h-screen bg-[#F1F8E9] px-[50px] pt-[70px]">
        <div className="relative w-full max-w-[333px] h-[373px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="333"
            height="373"
            viewBox="0 0 333 373"
            fill="none"
            className="absolute inset-0"
          >
            <path
              d="M18.9529 0C9.52105 0 0 7.00298 0 20.3455V276.248C0 292.945 5.50435 299.727 18.9529 299.727H59.0308V373L119.192 299.764H314.047C326.811 299.764 333 292.06 333 276.285V20.3823C333 7.0398 323.479 0.0368576 314.047 0.0368576H18.9529V0Z"
              fill="white"
            />
          </svg>
          <div className="relative z-10 p-[20px] h-full flex flex-col justify-start">
            <p className="text-[16px] text-[#4A5E29] leading-[150%] tracking-[1.2px] text-[24px]">
              Each correct scan unlocks the next challenge. Complete all zones
              to finish the game. <br className="mb-[70px]" />
              Are you ready?
            </p>
          </div>
          <button
            onClick={startGame}
            className="absolute bottom-[30px] right-[20px] z-20 w-[153px] h-[53px] rounded-[40px] bg-[#A5D14F] flex items-center justify-center py-[12px] text-white text-[24px] font-bold leading-[100%]"
          >
            Let's begin
          </button>
          <img src={gardener3} alt="Gardener" width={285} height={445} />
        </div>
      </main>
    );
  } else {
    return (
      <main className="min-h-screen bg-[#F1F8E9] px-[50px] pt-[70px]">
        <h1>404 ERROR</h1>
        <p>Something went wrong...</p>
      </main>
    );
  }
}
