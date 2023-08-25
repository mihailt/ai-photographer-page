import type { NextPage } from "next";

type ContactInfoContainerType = {
  contactIconText?: string;
  contactInfoIconText?: string;
  contactMethodText?: string;
  contactInfoText?: string;
};

const ContactInfoContainer: NextPage<ContactInfoContainerType> = ({
  contactIconText,
  contactInfoIconText,
  contactMethodText,
  contactInfoText,
}) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] text-left text-base text-white font-text-small-link">
      <img
        className="relative w-8 h-8 overflow-hidden shrink-0"
        alt=""
        src={contactIconText}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <b className="self-stretch relative text-xl leading-[140%]">
          {contactInfoIconText}
        </b>
        <div className="self-stretch relative leading-[150%]">
          {contactMethodText}
        </div>
        <div className="self-stretch relative [text-decoration:underline] leading-[150%] font-text-regular-link">
          {contactInfoText}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoContainer;
