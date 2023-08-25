import type { NextPage } from "next";
import StepInfoComponent from "./step-info-component";
import StyleSecondarySmallFalse from "./style-secondary-small-false";
import StyleLinkSmallFalseDark from "./style-link-small-false-dark";

const BookingProcessContainer: NextPage = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col py-28 px-16 items-center justify-start gap-[80px] bg-[url('/layout--237@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-base text-white font-text-small-link">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[16px]">
        <div className="relative leading-[150%] font-semibold">Capturing</div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-thin font-inherit">
            Streamlined Process for Booking Your Photographer
          </h1>
          <div className="self-stretch relative text-lg leading-[150%] font-medium">
            Booking and working with our award-winning photographer is a breeze.
            Follow these simple steps to capture your special moments:
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[48px] text-13xl">
        <div className="self-stretch flex flex-row items-start justify-start gap-[48px]">
          <StepInfoComponent
            packageImageId="/icon--relume.svg"
            stepTitleStepDescription="Step 1: Choose Your Package"
            packageDescription="Browse our selection of photography packages and find the one that suits your needs."
          />
          <StepInfoComponent
            packageImageId="/icon--relume1.svg"
            stepTitleStepDescription="Step 3: Enjoy Your Photoshoot"
            packageDescription="Relax and have fun during your personalized and professional photoshoot experience."
          />
          <StepInfoComponent
            packageImageId="/icon--relume2.svg"
            stepTitleStepDescription="Step 2: Schedule Your Session"
            packageDescription="Pick a date and time that works best for you, and we'll take care of the rest."
          />
        </div>
        <div className="flex flex-row pt-4 px-0 pb-0 items-center justify-start gap-[24px]">
          <StyleSecondarySmallFalse
            buttonText="Book"
            styleSecondarySmallFalsePosition="unset"
            styleSecondarySmallFalseBorder="1px solid #fff"
            styleSecondarySmallFalseBoxSizing="border-box"
            styleSecondarySmallFalseCursor="pointer"
            styleSecondarySmallFalseBackgroundColor="transparent"
            styleSecondarySmallFalseFlex="unset"
            buttonDisplay="inline-block"
            buttonColor="#fff"
            buttonFontFamily="Roboto"
            buttonFontWeight="500"
          />
          <StyleLinkSmallFalseDark
            buttonText="Learn"
            buttonIconUrl="/icon--chevronright.svg"
            styleLinkSmallFalseDarkPosition="unset"
            styleLinkSmallFalseDarkCursor="unset"
            styleLinkSmallFalseDarkBorder="unset"
            styleLinkSmallFalseDarkPadding="unset"
            styleLinkSmallFalseDarkBackgroundColor="unset"
            buttonColor="#fff"
            buttonDisplay="inline-block"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingProcessContainer;
