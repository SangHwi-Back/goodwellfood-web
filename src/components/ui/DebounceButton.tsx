'use client';

import React, { ButtonHTMLAttributes, useCallback, useState } from "react";
import { ButtonType, getButtonBackgroundColor } from '@/components/ui/ButtonType';

interface DebounceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  debounceTime?: number;
  buttonType?: ButtonType;
  icon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export default function DebounceButton({
  children,
  debounceTime,
  buttonType = ButtonType.NONE,
  icon,
  trailingIcon,
  disabled,
  onClick,
  ...props
}: DebounceButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isClicked || !onClick) return;

      setIsClicked(true);
      onClick(event);

      const timer = setTimeout(() => {
        setIsClicked(false);
      }, debounceTime);

      return () => clearTimeout(timer);
    },
    [isClicked, debounceTime, onClick]
  );

  const buttonClass = `flex gap-1 cursor-pointer ${getButtonBackgroundColor(buttonType)} px-4 py-2 rounded-lg text-white transition-all ${
    disabled ? ButtonType.DISABLED : ""
  }`;

  return (
    <button
      {...props}
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled || isClicked}>
      {icon ?? null}
      {children}
      {trailingIcon ?? null}
    </button>
  );
};
