"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const NOTE_MS = 5000;

const COPY_FAILED = "Copy did not work. The text is selected, so press Cmd+C or Ctrl+C.";

const variants = {
  primary:
    "bg-red px-4 pt-3 pb-[11px] text-white shadow-button hover:bg-red-press focus-visible:outline-ink active:translate-y-px active:shadow-button-press",
  outline:
    "border border-line-strong bg-paper px-3.5 pt-[9px] pb-2 text-ink hover:border-ink focus-visible:outline-red",
};

type CopyActionProps = {
  value: string;
  sourceId: string;
  done: string;
  href?: string;
  variant: keyof typeof variants;
  noteClassName?: string;
  children: ReactNode;
};

function selectContents(id: string) {
  const source = document.getElementById(id);
  const selection = window.getSelection();
  if (!source || !selection) return;
  const range = document.createRange();
  range.selectNodeContents(source);
  selection.removeAllRanges();
  selection.addRange(range);
}

export function CopyAction({
  value,
  sourceId,
  done,
  href,
  variant,
  noteClassName = "",
  children,
}: CopyActionProps) {
  const [note, setNote] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function show(message: string) {
    clearTimeout(timer.current);
    setNote(message);
    timer.current = setTimeout(() => setNote(""), NOTE_MS);
  }

  function copy() {
    const fail = () => {
      selectContents(sourceId);
      show(COPY_FAILED);
    };
    if (!navigator.clipboard) {
      fail();
      return;
    }
    navigator.clipboard.writeText(value).then(() => show(done), fail);
  }

  const className = `inline-flex items-center justify-center gap-2.5 rounded-[3px] font-label text-[13px] font-semibold tracking-[0.1em] uppercase transition-[background-color,border-color,translate] duration-150 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-solid motion-reduce:transition-none ${variants[variant]}`;

  return (
    <>
      {href ? (
        <a
          className={className}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={copy}
        >
          {children}
        </a>
      ) : (
        <button type="button" className={`cursor-pointer ${className}`} onClick={copy}>
          {children}
        </button>
      )}
      <p aria-live="polite" className={`text-[13px] text-muted ${noteClassName}`}>
        {note}
      </p>
    </>
  );
}
