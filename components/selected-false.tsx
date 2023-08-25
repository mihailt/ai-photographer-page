import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type SelectedFalseType = {
  checkboxLabel?: string;

  /** Style props */
  selectedFalsePosition?: CSSProperties["position"];
  selectedFalsePadding?: CSSProperties["padding"];
  selectedFalseBoxSizing?: CSSProperties["boxSizing"];
  checkboxBackgroundColor?: CSSProperties["backgroundColor"];
  checkboxBorder?: CSSProperties["border"];
  checkboxCursor?: CSSProperties["cursor"];
  labelColor?: CSSProperties["color"];
};

const SelectedFalse: NextPage<SelectedFalseType> = ({
  checkboxLabel,
  selectedFalsePosition,
  selectedFalsePadding,
  selectedFalseBoxSizing,
  checkboxBackgroundColor,
  checkboxBorder,
  checkboxCursor,
  labelColor,
}) => {
  const selectedFalseStyle: CSSProperties = useMemo(() => {
    return {
      position: selectedFalsePosition,
      padding: selectedFalsePadding,
      boxSizing: selectedFalseBoxSizing,
    };
  }, [selectedFalsePosition, selectedFalsePadding, selectedFalseBoxSizing]);

  const checkboxStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: checkboxBackgroundColor,
      border: checkboxBorder,
      cursor: checkboxCursor,
    };
  }, [checkboxBackgroundColor, checkboxBorder, checkboxCursor]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  return (
    <div
      className="relative flex flex-row items-center justify-start gap-[12px] text-left text-base text-black font-text-small-link"
      style={selectedFalseStyle}
    >
      <div
        className="relative bg-white box-border w-5 h-5 overflow-hidden shrink-0 border-[1px] border-solid border-black"
        style={checkboxStyle}
      />
      <div className="relative leading-[150%]" style={labelStyle}>
        {checkboxLabel}
      </div>
    </div>
  );
};

export default SelectedFalse;
