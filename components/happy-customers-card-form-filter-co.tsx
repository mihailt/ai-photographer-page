import type { NextPage } from "next";
import ReviewContainer from "./review-container";

const HappyCustomersCardFormFilterCo: NextPage = () => {
  return (
    <section className="self-stretch h-[964px] overflow-hidden shrink-0 flex flex-col py-28 px-16 box-border items-center justify-start gap-[80px] bg-[url('/testimonial--18@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-29xl text-white font-text-small-link">
      <div className="w-[560px] flex flex-col items-center justify-start gap-[24px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-thin font-inherit">
          Happy Customers
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] font-light">
          Read what our satisfied clients have to say
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[32px] text-left text-base">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] text-lg">
          <div className="self-stretch rounded-lg bg-gray overflow-hidden flex flex-col p-8 items-start justify-start gap-[32px]">
            <ReviewContainer
              dimensions="/vector.svg"
              photographDimensions="/vector1.svg"
              photographDimensions2="/vector2.svg"
              photographDimensionsOther="/vector2.svg"
              photographId="/vector3.svg"
              eventPhotos="Their photographs captured the essence of our event perfectly."
            />
            <div className="flex flex-row items-center justify-between text-base">
              <img
                className="relative rounded-[50%] w-14 h-14 object-cover"
                alt=""
                src="/avatar-image@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[150%] font-semibold">
                  David Wilson
                </div>
                <div className="relative leading-[150%]">
                  Founder, Company JKL
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-gray overflow-hidden flex flex-col p-8 items-start justify-start gap-[32px] text-base">
            <ReviewContainer
              dimensions="/vector4.svg"
              photographDimensions="/vector5.svg"
              photographDimensions2="/vector6.svg"
              photographDimensionsOther="/vector6.svg"
              photographId="/vector7.svg"
              eventPhotos="Their attention to detail and creativity exceeded our expectations."
              propAlignSelf="unset"
              propWidth="352px"
              propAlignSelf1="unset"
              propWidth1="352px"
            />
            <div className="self-stretch flex flex-row items-center justify-between">
              <img
                className="relative rounded-[50%] w-14 h-14 object-cover"
                alt=""
                src="/avatar-image1@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[150%] font-semibold">
                  Sarah Thompson
                </div>
                <div className="self-stretch relative leading-[150%]">
                  Creative Director, Company MNO
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
          <div className="self-stretch rounded-lg bg-gray overflow-hidden flex flex-col p-8 items-start justify-start gap-[32px]">
            <ReviewContainer
              dimensions="/vector.svg"
              photographDimensions="/vector1.svg"
              photographDimensions2="/vector8.svg"
              photographDimensionsOther="/vector9.svg"
              photographId="/vector3.svg"
              eventPhotos="We were impressed with their professionalism and the quality of their work."
              propAlignSelf="stretch"
              propWidth="unset"
              propAlignSelf1="unset"
              propWidth1="unset"
            />
            <div className="self-stretch flex flex-row items-center justify-between">
              <img
                className="relative rounded-[50%] w-14 h-14 object-cover"
                alt=""
                src="/avatar-image2@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[150%] font-semibold">
                  Jane Smith
                </div>
                <div className="self-stretch relative leading-[150%]">
                  Marketing Manager, Company ABC
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-gray overflow-hidden flex flex-col p-8 items-start justify-start gap-[32px]">
            <ReviewContainer
              dimensions="/vector4.svg"
              photographDimensions="/vector5.svg"
              photographDimensions2="/vector10.svg"
              photographDimensionsOther="/vector11.svg"
              photographId="/vector7.svg"
              eventPhotos="Working with them was a pleasure and we highly recommend their services."
              propAlignSelf="stretch"
              propWidth="unset"
              propAlignSelf1="unset"
              propWidth1="unset"
            />
            <div className="flex flex-row items-center justify-between">
              <img
                className="relative rounded-[50%] w-14 h-14 object-cover"
                alt=""
                src="/avatar-image3@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[150%] font-semibold">
                  Mike Johnson
                </div>
                <div className="relative leading-[150%]">
                  Director, Company DEF
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
          <div className="self-stretch rounded-lg bg-gray overflow-hidden flex flex-col p-8 items-start justify-start gap-[32px]">
            <ReviewContainer
              dimensions="/vector.svg"
              photographDimensions="/vector12.svg"
              photographDimensions2="/vector13.svg"
              photographDimensionsOther="/vector9.svg"
              photographId="/vector14.svg"
              eventPhotos="We were blown away by the stunning images they delivered."
              propAlignSelf="stretch"
              propWidth="unset"
              propAlignSelf1="unset"
              propWidth1="unset"
            />
            <div className="flex flex-row items-center justify-between">
              <img
                className="relative rounded-[50%] w-14 h-14 object-cover"
                alt=""
                src="/avatar-image4@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[150%] font-semibold">
                  Emily Brown
                </div>
                <div className="relative leading-[150%]">
                  HR Manager, Company GHI
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-gray overflow-hidden flex flex-col p-8 items-start justify-start gap-[32px]">
            <ReviewContainer
              dimensions="/vector4.svg"
              photographDimensions="/vector15.svg"
              photographDimensions2="/vector16.svg"
              photographDimensionsOther="/vector11.svg"
              photographId="/vector17.svg"
              eventPhotos="Our experience with this photographer was outstanding."
              propAlignSelf="stretch"
              propWidth="unset"
              propAlignSelf1="unset"
              propWidth1="unset"
            />
            <div className="flex flex-row items-center justify-between">
              <img
                className="relative rounded-[50%] w-14 h-14 object-cover"
                alt=""
                src="/avatar-image5@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[150%] font-semibold">
                  John Doe
                </div>
                <div className="relative leading-[150%]">CEO, Company XYZ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomersCardFormFilterCo;
