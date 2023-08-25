import type { NextPage } from "next";

const CaptivatingMomentsContainer: NextPage = () => {
  return (
    <section className="self-stretch h-[1444px] overflow-hidden shrink-0 flex flex-col py-28 px-16 box-border items-center justify-start gap-[80px] bg-[url('/gallery--8@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-29xl text-white font-text-small-link">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[24px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-thin font-inherit">
          Captivating Moments
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] font-light">
          Explore the photographer's stunning portfolio of breathtaking images.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/placeholder-image-1@2x.png"
          />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[426px] shrink-0 object-cover"
            alt=""
            src="/placeholder-image-2@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[426px] shrink-0 object-cover"
            alt=""
            src="/placeholder-image-3@2x.png"
          />
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/placeholder-image-4@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CaptivatingMomentsContainer;
