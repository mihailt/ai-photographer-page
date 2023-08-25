import type { NextPage } from "next";
import StyleLinkSmallFalseDark from "./style-link-small-false-dark";
import LocationCard from "./location-card";

const LocationForm: NextPage = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col py-28 px-16 items-center justify-start gap-[80px] bg-[url('/contact--26@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-base text-white font-text-small-link">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[16px]">
        <div className="relative leading-[150%] font-semibold">
          Capturing Moments
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-thin font-inherit">
            Locations
          </h1>
          <div className="self-stretch relative text-lg leading-[150%] font-light">
            Discover our available booking locations
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[64px] text-13xl">
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-thin font-inherit">
                Sydney
              </h1>
              <div className="self-stretch relative text-base leading-[150%]">
                123 Main St, Sydney NSW 2000, Australia
              </div>
            </div>
            <StyleLinkSmallFalseDark
              buttonText="Get Directions"
              buttonIconUrl="/icon--chevronright1.svg"
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
        <LocationCard
          locationName="New York"
          address="123 Broadway, New York, NY 10000, USA"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[64px]">
        <LocationCard
          locationName="London"
          address="123 Queen St, London EC73 9TG, UK"
        />
        <LocationCard
          locationName="Paris"
          address="123 Broadway, New York, NY 10000, USA"
        />
      </div>
    </section>
  );
};

export default LocationForm;
