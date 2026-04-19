import { useProgressStore } from "../store/progressStore";

export default function LandingPage4() {
  const startGame = useProgressStore((s) => s.startGame);
  const gardener = `${import.meta.env.BASE_URL}images/instruction/InstructionPagePt3.png`;

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
            Each correct scan unlocks the next challenge. Complete all zones to
            finish the game. <br className="mb-[70px]" />
            Are you ready?
          </p>
        </div>
        <button
          onClick={startGame}
          className="absolute bottom-[30px] right-[20px] z-20 w-[153px] h-[53px] rounded-[40px] bg-[#A5D14F] flex items-center justify-center py-[12px] text-white text-[24px] font-bold leading-[100%]"
        >
          Let's begin
        </button>
        <img src={gardener} alt="Gardener" width={285} height={445} />
      </div>
    </main>
  );
}
