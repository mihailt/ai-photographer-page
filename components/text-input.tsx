import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TextInputType = {
  inputPlaceholder?: string;

  /** Style props */
  textInputPosition?: CSSProperties["position"];
  textInputBackgroundColor?: CSSProperties["backgroundColor"];
  textInputBorder?: CSSProperties["border"];
  textInputBoxSizing?: CSSProperties["boxSizing"];
  textInputWidth?: CSSProperties["width"];
  textInputAlignSelf?: CSSProperties["alignSelf"];
  textInputFlex?: CSSProperties["flex"];
  placeholderColor?: CSSProperties["color"];
};

const TextInput: NextPage<TextInputType> = ({
  inputPlaceholder,
  textInputPosition,
  textInputBackgroundColor,
  textInputBorder,
  textInputBoxSizing,
  textInputWidth,
  textInputAlignSelf,
  textInputFlex,
  placeholderColor,
}) => {
  const textInputStyle: CSSProperties = useMemo(() => {
    return {
      position: textInputPosition,
      backgroundColor: textInputBackgroundColor,
      border: textInputBorder,
      boxSizing: textInputBoxSizing,
      width: textInputWidth,
      alignSelf: textInputAlignSelf,
      flex: textInputFlex,
    };
  }, [
    textInputPosition,
    textInputBackgroundColor,
    textInputBorder,
    textInputBoxSizing,
    textInputWidth,
    textInputAlignSelf,
    textInputFlex,
  ]);

  const placeholderStyle: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor,
    };
  }, [placeholderColor]);

  return (
    <div
      className="relative bg-white box-border w-[367px] flex flex-row p-3 items-center justify-start text-left text-base text-dimgray font-text-small-link border-[1px] border-solid border-black"
      style={textInputStyle}
    >
      <div className="flex-1 relative leading-[150%]" style={placeholderStyle}>
        {inputPlaceholder}
      </div>
    </div>
  );
};

export default TextInput;
