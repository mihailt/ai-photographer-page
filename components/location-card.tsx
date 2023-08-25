import type { NextPage } from "next";
import StyleLinkSmallFalseDark from "./style-link-small-false-dark";

type LocationCardType = {
  locationName?: string;
  address?: string;
};

const LocationCard: NextPage<LocationCardType> = ({
  locationName,
  address,
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start text-center text-13xl text-white font-text-small-link">
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-thin font-inherit">
            {locationName}
          </h1>
          <div className="self-stretch relative text-base leading-[150%]">
            {address}
          </div>
        </div>
        <StyleLinkSmallFalseDark
          buttonText="Get Directions"
          buttonIconUrl="/icon--chevronright1.svg"
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
  );
};

export default LocationCard;
