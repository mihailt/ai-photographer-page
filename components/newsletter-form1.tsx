import type { NextPage } from "next";
import TextInput from "./text-input";
import StyleSecondarySmallFalse from "./style-secondary-small-false";

const NewsletterForm1: NextPage = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col py-28 px-16 items-center justify-start bg-[url('/cta--28@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-29xl text-white font-text-small-link">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-thin font-inherit">
            Stay Updated with Our Newsletter
          </h1>
          <div className="self-stretch relative text-lg leading-[150%] font-light">
            Subscribe to our newsletter for the latest updates and special
            offers.
          </div>
        </div>
        <div className="w-[513px] flex flex-col pt-4 px-0 pb-0 box-border items-start justify-start gap-[16px] text-left text-xs text-black font-text-regular-link">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <TextInput
              inputPlaceholder="Enter your email"
              textInputPosition="unset"
              textInputBackgroundColor="#000"
              textInputBorder="1px solid #fff"
              textInputBoxSizing="border-box"
              textInputWidth="unset"
              textInputAlignSelf="unset"
              textInputFlex="1"
              placeholderColor="#f4f4f4"
            />
            <StyleSecondarySmallFalse
              buttonText="Sign Up"
              styleSecondarySmallFalsePosition="unset"
              styleSecondarySmallFalseBorder="1px solid #fff"
              styleSecondarySmallFalseBoxSizing="border-box"
              styleSecondarySmallFalseCursor="pointer"
              styleSecondarySmallFalseBackgroundColor="#fff"
              styleSecondarySmallFalseFlex="unset"
              buttonDisplay="inline-block"
              buttonColor="#000"
              buttonFontFamily="'SF Pro Text'"
              buttonFontWeight="unset"
            />
          </div>
          <div className="self-stretch relative leading-[150%]">
            By clicking Sign Up, you agree to our Terms and Conditions.
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm1;
