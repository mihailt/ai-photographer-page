import type { NextPage } from "next";

type StepInfoComponentType = {
  packageImageId?: string;
  stepTitleStepDescription?: string;
  packageDescription?: string;
};

const StepInfoComponent: NextPage<StepInfoComponentType> = ({
  packageImageId,
  stepTitleStepDescription,
  packageDescription,
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[24px] text-center text-13xl text-white font-text-small-link">
      <img
        className="relative w-12 h-12 overflow-hidden shrink-0"
        alt=""
        src={packageImageId}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-thin font-inherit">
          {stepTitleStepDescription}
        </h1>
        <div className="self-stretch relative text-base leading-[150%]">
          {packageDescription}
        </div>
      </div>
    </div>
  );
};

export default StepInfoComponent;
