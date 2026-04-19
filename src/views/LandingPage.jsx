import { useProgressStore } from "../store/progressStore";

export default function LandingPage() {
  const goToLanding2 = useProgressStore((s) => s.goToLanding2);
  const landingImg = `${import.meta.env.BASE_URL}images/instruction/LandingPageImg.webp`;

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
          onClick={goToLanding2}
          className="rounded-[40px] pt-[12px] pr-[60px] pb-[13px] pl-[62px] bg-[#A5D14F] text-white text-[28px] font-bold"
        >
          Start
        </button>
      </div>
    </main>
  );
}
