import type { NextPage } from "next";
import StyleSecondarySmallFalse from "./style-secondary-small-false";

const CaptureMemoriesContainer: NextPage = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-row py-28 px-16 items-start justify-between bg-[url('/cta--19@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-29xl text-white font-text-small-link">
      <div className="w-[768px] flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-thin font-inherit">
            Capture Memories That Last Forever
          </h1>
          <div className="self-stretch relative text-lg leading-[150%] font-light">
            Experience the art of photography with our award-winning
            photographer. Book your session today!
          </div>
        </div>
        <div className="w-[235px] flex flex-row pt-4 px-0 pb-0 box-border items-start justify-start gap-[16px]">
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
            buttonFontFamily="Roboto"
            buttonFontWeight="500"
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
    </section>
  );
};

export default CaptureMemoriesContainer;
