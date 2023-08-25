import type { NextPage } from "next";
import TextInput from "./text-input";
import TextArea from "./text-area";
import SelectedFalse from "./selected-false";
import StyleSecondarySmallFalse from "./style-secondary-small-false";
import ContactInfoContainer from "./contact-info-container";
import StyleLinkSmallFalseDark from "./style-link-small-false-dark";

const ContactForm1: NextPage = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col py-28 px-16 items-start justify-start gap-[48px] bg-[url('/contact--11@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-base text-white font-text-small-link">
      <div className="w-[768px] flex flex-col items-start justify-start gap-[16px]">
        <div className="relative leading-[150%] font-semibold">
          Capturing Moments
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-29xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-thin font-inherit">
            Get in Touch
          </h1>
          <div className="self-stretch relative text-lg leading-[150%] font-light">
            Have a question or need more information? Feel free to reach out to
            us!
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[80px] text-left">
        <div className="w-[616px] flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[150%]">Name</div>
            <TextInput
              textInputPosition="unset"
              textInputBackgroundColor="#000"
              textInputBorder="1px solid #fff"
              textInputBoxSizing="border-box"
              textInputWidth="unset"
              textInputAlignSelf="stretch"
              textInputFlex="unset"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[150%]">Email</div>
            <TextInput
              textInputPosition="unset"
              textInputBackgroundColor="#000"
              textInputBorder="1px solid #fff"
              textInputBoxSizing="border-box"
              textInputWidth="unset"
              textInputAlignSelf="stretch"
              textInputFlex="unset"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[150%]">Message</div>
            <TextArea
              line1="/line-1.svg"
              line2="/line-2.svg"
              textAreaBackgroundColor="#000"
              textAreaBorder="1px solid #fff"
              textAreaWidth="unset"
              textAreaAlignSelf="stretch"
            />
          </div>
          <SelectedFalse
            checkboxLabel="I agree to the Terms"
            selectedFalsePosition="unset"
            selectedFalsePadding="0px 0px 16px"
            selectedFalseBoxSizing="border-box"
            checkboxBackgroundColor="#000"
            checkboxBorder="1px solid #fff"
            checkboxCursor="pointer"
            labelColor="#fff"
          />
          <StyleSecondarySmallFalse
            buttonText="Submit"
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
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
            <ContactInfoContainer
              contactIconText="/icon--envelope.svg"
              contactInfoIconText="Email"
              contactMethodText="Send us an email"
              contactInfoText="hello@relume.io"
            />
            <ContactInfoContainer
              contactIconText="/icon--phone.svg"
              contactInfoIconText="Phone"
              contactMethodText="Give us a call"
              contactInfoText="+1 (555) 000-0000"
            />
          </div>
          <div className="w-60 flex flex-col items-start justify-start gap-[16px] text-xl">
            <img
              className="relative w-8 h-8 overflow-hidden shrink-0"
              alt=""
              src="/icon--map.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <b className="self-stretch relative leading-[140%]">Office</b>
              <div className="self-stretch relative text-base leading-[150%]">
                123 Sample St, Sydney NSW 2000 AU
              </div>
              <div className="self-stretch flex flex-col pt-4 px-0 pb-0 items-start justify-start">
                <StyleLinkSmallFalseDark
                  buttonText="Get Directions"
                  buttonIconUrl="/icon--chevronright.svg"
                  styleLinkSmallFalseDarkPosition="unset"
                  styleLinkSmallFalseDarkCursor="pointer"
                  styleLinkSmallFalseDarkBorder="none"
                  styleLinkSmallFalseDarkPadding="0"
                  styleLinkSmallFalseDarkBackgroundColor="transparent"
                  buttonColor="#fff"
                  buttonDisplay="inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm1;
