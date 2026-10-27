import type { AppLink } from "@/data/apps";
import { Label } from "./Label";

export function AppChiclet({ app }: { app: AppLink }) {
  const host = new URL(app.href).hostname.replace(/^www\./, "");

  return (
    <a
      href={app.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-34 flex-col gap-3.5 rounded-[5px] border border-line bg-paper px-4.5 pt-4.5 pb-3.5 shadow-rest transition-[translate,box-shadow,border-color] duration-150 hover:-translate-y-0.5 hover:border-ink hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-red focus-visible:outline-solid motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:min-h-44"
    >
      <Label tone={app.staging ? "ink" : "tag"}>{app.label}</Label>
      <span className="mt-auto font-display text-[30px] leading-none uppercase">{app.name}</span>
      <span className="flex min-w-0 items-center justify-between gap-2 border-t border-line pt-3 font-mono text-xs text-faint">
        <span className="wrap-anywhere">{host}</span>
        <span
          aria-hidden="true"
          className="flex-none font-body text-base font-medium text-red transition-[translate] duration-150 group-hover:translate-x-[3px] motion-reduce:transition-none"
        >
          &rarr;
        </span>
      </span>
    </a>
  );
}
