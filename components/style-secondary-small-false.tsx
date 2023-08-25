import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type StyleSecondarySmallFalseType = {
  buttonText?: string;

  /** Style props */
  styleSecondarySmallFalsePosition?: CSSProperties["position"];
  styleSecondarySmallFalseBorder?: CSSProperties["border"];
  styleSecondarySmallFalseBoxSizing?: CSSProperties["boxSizing"];
  styleSecondarySmallFalseCursor?: CSSProperties["cursor"];
  styleSecondarySmallFalseBackgroundColor?: CSSProperties["backgroundColor"];
  styleSecondarySmallFalseFlex?: CSSProperties["flex"];
  buttonDisplay?: CSSProperties["display"];
  buttonColor?: CSSProperties["color"];
  buttonFontFamily?: CSSProperties["fontFamily"];
  buttonFontWeight?: CSSProperties["fontWeight"];
};

const StyleSecondarySmallFalse: NextPage<StyleSecondarySmallFalseType> = ({
  buttonText,
  styleSecondarySmallFalsePosition,
  styleSecondarySmallFalseBorder,
  styleSecondarySmallFalseBoxSizing,
  styleSecondarySmallFalseCursor,
  styleSecondarySmallFalseBackgroundColor,
  styleSecondarySmallFalseFlex,
  buttonDisplay,
  buttonColor,
  buttonFontFamily,
  buttonFontWeight,
}) => {
  const styleSecondarySmallFalseStyle: CSSProperties = useMemo(() => {
    return {
      position: styleSecondarySmallFalsePosition,
      border: styleSecondarySmallFalseBorder,
      boxSizing: styleSecondarySmallFalseBoxSizing,
      cursor: styleSecondarySmallFalseCursor,
      backgroundColor: styleSecondarySmallFalseBackgroundColor,
      flex: styleSecondarySmallFalseFlex,
    };
  }, [
    styleSecondarySmallFalsePosition,
    styleSecondarySmallFalseBorder,
    styleSecondarySmallFalseBoxSizing,
    styleSecondarySmallFalseCursor,
    styleSecondarySmallFalseBackgroundColor,
    styleSecondarySmallFalseFlex,
  ]);

  const button1Style: CSSProperties = useMemo(() => {
    return {
      display: buttonDisplay,
      color: buttonColor,
      fontFamily: buttonFontFamily,
      fontWeight: buttonFontWeight,
    };
  }, [buttonDisplay, buttonColor, buttonFontFamily, buttonFontWeight]);

  return (
    <div
      className="relative flex flex-row py-3 px-6 items-center justify-center text-left text-base text-black font-text-small-link border-[1px] border-solid border-black"
      style={styleSecondarySmallFalseStyle}
    >
      <div className="relative leading-[150%]" style={button1Style}>
        {buttonText}
      </div>
    </div>
  );
};

export default StyleSecondarySmallFalse;
