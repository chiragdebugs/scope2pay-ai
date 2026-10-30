import { Navbar } from "@/components/layout/Navbar";

export function App() {
  const handleRequestDemo = () => {
    alert("Request a demo for Scope2Pay AI");
  };

  const handleLogin = () => {
    alert("Log in to Scope2Pay");
  };

  const handleGetStarted = () => {
    alert("Get started with Scope2Pay");
  };

  return (
    <div className="relative w-full min-h-screen bg-white text-black font-sans selection:bg-[#B154F9] selection:text-white overflow-x-hidden">
      {/* 1. Flush, Integrated Navigation Bar matching Krepling */}
      <Navbar
        onLoginClick={handleLogin}
        onGetStartedClick={handleGetStarted}
      />

      <main className="w-full">
        {/* 2. Fullscreen Hero Section (Direct Blueprint Reproduction of Krepling) */}
        <section className="relative w-full min-h-screen min-h-[100svh] bg-white overflow-hidden flex flex-col justify-between">
          {/* Centered Background Hero Artwork matching Krepling SiteHero_media */}
          <div className="absolute top-0 left-0 w-full h-[100vh] h-[100svh] pointer-events-none overflow-hidden z-0 origin-[50%_0] scale-[1.10]">
            <video
              poster="/hero-poster.png"
              playsInline
              autoPlay
              muted
              loop
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
            >
              <source src="/hero-artwork.mp4" type="video/mp4" />
              <source src="https://cdn.sanity.io/files/2unoqsa0/production/f1834828a2d905c3d6d9eccbb47f5712de04462b.mp4" type="video/mp4" />
              <img
                src="/hero-poster.png"
                alt="Scope2Pay 3D Conduit Artwork"
                className="w-full h-full object-cover"
              />
            </video>
          </div>

          {/* Foreground Hero Content Layout Grid */}
          <div className="relative z-10 w-full min-h-screen min-h-[100svh] px-[20px] sm:px-[36px] lg:px-[48px] pt-[84px] sm:pt-[125px] pb-[28px] sm:pb-[48px] flex flex-col justify-between box-border">
            {/* Top Row: Subtitle Anchored in Upper-Right */}
            <div className="w-full flex justify-end pr-[12px] sm:pr-0">
              <div className="w-full max-w-[185px] sm:max-w-[400px] lg:max-w-[430px] text-left">
                <h2 className="text-[14px] sm:text-[24px] lg:text-[30px] text-black font-normal leading-[1.25] tracking-[-0.01em]">
                  Manage your freelance business using clicks instead of spreadsheets.
                </h2>
              </div>
            </div>

            {/* Bottom Row: Asymmetrical Bottom-Left Title & Bottom-Right Description + CTA */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-[24px] lg:gap-[16px] items-end mt-auto">
              {/* Bottom-Left: Massive Oversized Display Title */}
              <div className="lg:col-span-6 xl:col-span-5">
                <h1 className="text-[29px] sm:text-[52px] lg:text-[68px] xl:text-[76px] text-black font-normal leading-[1.06] tracking-[-0.025em] m-0">
                  The world’s most <br />powerful freelance <br />platform.
                </h1>
              </div>

              {/* Middle Space for 3D Artwork */}
              <div className="hidden lg:block lg:col-span-2 xl:col-span-3 pointer-events-none" />

              {/* Bottom-Right: Narrative Description + Filled Bolt Violet CTA */}
              <div className="lg:col-span-4 flex flex-col items-start gap-[16px] sm:gap-[20px] max-w-[390px]">
                <p className="text-[14px] sm:text-[16px] lg:text-[17px] text-[#555555] font-normal leading-[1.35] m-0">
                  Your freelance work should be a profitable business, <br className="hidden sm:inline" />not an administrative challenge.
                </p>

                <button
                  onClick={handleRequestDemo}
                  className="bg-[#B154F9] hover:bg-[#a03ee8] active:bg-[#902bd8] text-white text-[15px] font-normal px-[24px] sm:px-[26px] py-[12px] sm:py-[14px] rounded-[8px] transition-colors cursor-pointer select-none border-none outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B154F9] focus-visible:outline-offset-2"
                >
                  Request a demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
