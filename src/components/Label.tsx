import type { ReactNode } from "react";

const tones = {
  eyebrow: "gap-2 text-xs text-red before:size-[7px]",
  tag: "gap-[7px] text-[11px] text-muted before:size-1.5",
  ink: "gap-[7px] rounded-[3px] bg-ink px-2 pt-[5px] pb-1 text-[11px] text-white before:size-1.5",
};

export function Label({ tone, children }: { tone: keyof typeof tones; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center self-start font-label font-semibold tracking-[0.14em] uppercase before:bg-red before:content-[''] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
