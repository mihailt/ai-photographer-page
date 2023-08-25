import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TextAreaType = {
  line1?: string;
  line2?: string;

  /** Style props */
  textAreaBackgroundColor?: CSSProperties["backgroundColor"];
  textAreaBorder?: CSSProperties["border"];
  textAreaWidth?: CSSProperties["width"];
  textAreaAlignSelf?: CSSProperties["alignSelf"];
};

const TextArea: NextPage<TextAreaType> = ({
  line1,
  line2,
  textAreaBackgroundColor,
  textAreaBorder,
  textAreaWidth,
  textAreaAlignSelf,
}) => {
  const textAreaStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: textAreaBackgroundColor,
      border: textAreaBorder,
      width: textAreaWidth,
      alignSelf: textAreaAlignSelf,
    };
  }, [
    textAreaBackgroundColor,
    textAreaBorder,
    textAreaWidth,
    textAreaAlignSelf,
  ]);

  return (
    <div
      className="relative bg-white box-border w-[602px] h-[182px] flex flex-row p-3 items-start justify-start text-left text-base text-dimgray font-text-small-link border-[1px] border-solid border-black"
      style={textAreaStyle}
    >
      <div className="flex-1 relative leading-[150%] z-[0]">
        Type your message...
      </div>
      <img
        className="absolute my-0 mx-[!important] right-[3.29px] bottom-[3.05px] w-[2.71px] h-[2.71px] z-[1]"
        alt=""
        src={line1}
      />
      <img
        className="absolute my-0 mx-[!important] right-[3.29px] bottom-[3.29px] w-[6.71px] h-[6.71px] z-[2]"
        alt=""
        src={line2}
      />
    </div>
  );
};

export default TextArea;
