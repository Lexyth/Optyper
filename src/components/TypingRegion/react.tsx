import { useCallback, forwardRef } from "react";

export const TypingRegion = forwardRef(function TypingRegion(
  {
    className,
    onKeyTyped,
  }: { className?: string; onKeyTyped?: (event: React.KeyboardEvent) => void },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      event.preventDefault();
      onKeyTyped?.(event);
    },
    [onKeyTyped]
  );

  return (
    <div
      className={className}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={ref}
    ></div>
  );
});
