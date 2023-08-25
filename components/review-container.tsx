import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ReviewContainerType = {
  dimensions?: string;
  photographDimensions?: string;
  photographDimensions2?: string;
  photographDimensionsOther?: string;
  photographId?: string;
  eventPhotos?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
};

const ReviewContainer: NextPage<ReviewContainerType> = ({
  dimensions,
  photographDimensions,
  photographDimensions2,
  photographDimensionsOther,
  photographId,
  eventPhotos,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
  propWidth1,
}) => {
  const contentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const starsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth1,
    };
  }, [propAlignSelf1, propWidth1]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-lg text-white font-text-small-link"
      style={contentStyle}
    >
      <div
        className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[4px]"
        style={starsStyle}
      >
        <img className="relative w-5 h-[18.89px]" alt="" src={dimensions} />
        <img
          className="relative w-5 h-[18.89px]"
          alt=""
          src={photographDimensions}
        />
        <img
          className="relative w-5 h-[18.89px]"
          alt=""
          src={photographDimensions2}
        />
        <img
          className="relative w-5 h-[18.89px]"
          alt=""
          src={photographDimensionsOther}
        />
        <img className="relative w-5 h-[18.89px]" alt="" src={photographId} />
      </div>
      <div className="self-stretch relative leading-[150%] font-light">
        {eventPhotos}
      </div>
    </div>
  );
};

export default ReviewContainer;
