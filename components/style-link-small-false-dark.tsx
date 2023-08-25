import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type StyleLinkSmallFalseDarkType = {
  buttonText?: string;
  buttonIconUrl?: string;

  /** Style props */
  styleLinkSmallFalseDarkPosition?: CSSProperties["position"];
  styleLinkSmallFalseDarkCursor?: CSSProperties["cursor"];
  styleLinkSmallFalseDarkBorder?: CSSProperties["border"];
  styleLinkSmallFalseDarkPadding?: CSSProperties["padding"];
  styleLinkSmallFalseDarkBackgroundColor?: CSSProperties["backgroundColor"];
  buttonColor?: CSSProperties["color"];
  buttonDisplay?: CSSProperties["display"];
};

const StyleLinkSmallFalseDark: NextPage<StyleLinkSmallFalseDarkType> = ({
  buttonText,
  buttonIconUrl,
  styleLinkSmallFalseDarkPosition,
  styleLinkSmallFalseDarkCursor,
  styleLinkSmallFalseDarkBorder,
  styleLinkSmallFalseDarkPadding,
  styleLinkSmallFalseDarkBackgroundColor,
  buttonColor,
  buttonDisplay,
}) => {
  const styleLinkSmallFalseDarkStyle: CSSProperties = useMemo(() => {
    return {
      position: styleLinkSmallFalseDarkPosition,
      cursor: styleLinkSmallFalseDarkCursor,
      border: styleLinkSmallFalseDarkBorder,
      padding: styleLinkSmallFalseDarkPadding,
      backgroundColor: styleLinkSmallFalseDarkBackgroundColor,
    };
  }, [
    styleLinkSmallFalseDarkPosition,
    styleLinkSmallFalseDarkCursor,
    styleLinkSmallFalseDarkBorder,
    styleLinkSmallFalseDarkPadding,
    styleLinkSmallFalseDarkBackgroundColor,
  ]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonColor, buttonDisplay]);

  return (
    <div
      className="relative flex flex-row items-center justify-center gap-[8px] text-left text-base text-black font-text-small-link"
      style={styleLinkSmallFalseDarkStyle}
    >
      <div className="relative leading-[150%]" style={buttonStyle}>
        {buttonText}
      </div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src={buttonIconUrl}
      />
    </div>
  );
};

export default StyleLinkSmallFalseDark;
