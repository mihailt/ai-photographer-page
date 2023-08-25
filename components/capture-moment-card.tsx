import type { NextPage } from "next";
import StyleSecondarySmallFalse from "./style-secondary-small-false";

const CaptureMomentCard: NextPage = () => {
  return (
    <section className="self-stretch h-[900px] overflow-hidden shrink-0 flex flex-col py-0 px-16 box-border items-center justify-start bg-[url('/header--76@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-45xl text-white font-text-small-link">
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="self-stretch flex-1 flex flex-col py-0 pr-20 pl-0 items-start justify-center gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-thin font-inherit">
              Capturing Moments That Last a Lifetime
            </h1>
            <div className="self-stretch relative text-lg leading-[150%] font-light">
              Welcome to the world of an award-winning photographer, where every
              frame tells a story. With a keen eye for detail and a passion for
              capturing emotions, our photographer creates stunning images that
              will leave you breathless. Explore our portfolio and let us bring
              your vision to life.
            </div>
          </div>
          <div className="w-[237px] flex flex-row pt-4 px-0 pb-0 box-border items-start justify-start gap-[16px]">
            <StyleSecondarySmallFalse
              buttonText="Book"
              styleSecondarySmallFalsePosition="unset"
              styleSecondarySmallFalseBorder="1px solid #fff"
              styleSecondarySmallFalseBoxSizing="border-box"
              styleSecondarySmallFalseCursor="pointer"
              styleSecondarySmallFalseBackgroundColor="#fff"
              styleSecondarySmallFalseFlex="1"
              buttonDisplay="inline-block"
              buttonColor="#000"
              buttonFontFamily="'SF Pro Text'"
              buttonFontWeight="unset"
            />
            <StyleSecondarySmallFalse
              buttonText="Learn"
              styleSecondarySmallFalsePosition="unset"
              styleSecondarySmallFalseBorder="1px solid #fff"
              styleSecondarySmallFalseBoxSizing="border-box"
              styleSecondarySmallFalseCursor="pointer"
              styleSecondarySmallFalseBackgroundColor="transparent"
              styleSecondarySmallFalseFlex="1"
              buttonDisplay="inline-block"
              buttonColor="#fff"
              buttonFontFamily="'SF Pro Text'"
              buttonFontWeight="unset"
            />
          </div>
        </div>
        <div className="flex-1 h-[900px] flex flex-row items-start justify-start relative gap-[16px]">
          <div className="self-stretch flex-1 z-[0]" />
          <div className="w-[319.25px] h-[2732px] hidden flex-col items-start justify-start gap-[16px] z-[1]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[340px] shrink-0 object-cover"
              alt=""
              src="/placeholder-image@2x.png"
            />
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[340px] shrink-0 object-cover"
              alt=""
              src="/placeholder-image@2x.png"
            />
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[340px] shrink-0 object-cover"
              alt=""
              src="/placeholder-image@2x.png"
            />
          </div>
          <div className="my-0 mx-[!important] absolute w-[48.67%] top-[-152px] right-[51.33%] left-[0%] h-[2732px] hidden flex-col items-start justify-start gap-[16px] z-[2]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[340px] shrink-0 object-cover"
              alt=""
              src="/placeholder-image1@2x.png"
            />
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[340px] shrink-0 object-cover"
              alt=""
              src="/placeholder-image1@2x.png"
            />
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[340px] shrink-0 object-cover"
              alt=""
              src="/placeholder-image1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaptureMomentCard;
