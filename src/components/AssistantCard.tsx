import {
  commandDisplay,
  commandText,
  serverUrl,
  serverUrlId,
  type Assistant,
} from "@/data/assistants";
import { CopyAction } from "./CopyAction";

export function AssistantCard({ assistant }: { assistant: Assistant }) {
  const { id, name, detail, steps, action } = assistant;
  const commandId = `${id}-command`;

  return (
    <article className="flex min-w-0 flex-col gap-3 rounded-[5px] border border-line bg-paper p-4.5 shadow-rest">
      <h3 className="font-display text-[26px] leading-none uppercase">{name}</h3>
      <span className="font-label text-xs font-medium tracking-[0.1em] text-faint uppercase">
        {detail}
      </span>
      {action.kind === "command" && (
        <pre className="overflow-x-auto rounded-[3px] border border-line bg-canvas px-3 py-2.5">
          <code id={commandId} className="font-mono text-xs leading-relaxed">
            {commandDisplay(action.lines)}
          </code>
        </pre>
      )}
      <ol className="grid list-decimal gap-1.5 pl-5 text-sm text-muted marker:font-label marker:font-semibold marker:text-red">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <div className="mt-auto grid gap-2 pt-1">
        {action.kind === "open" ? (
          <CopyAction
            variant="primary"
            value={serverUrl}
            sourceId={serverUrlId}
            href={action.href}
            done="Server URL copied. Paste it in step 2."
          >
            {action.label} <span aria-hidden="true">&rarr;</span>
          </CopyAction>
        ) : (
          <CopyAction
            variant="primary"
            value={commandText(action.lines)}
            sourceId={commandId}
            done="Command copied."
          >
            {action.label}
          </CopyAction>
        )}
      </div>
    </article>
  );
}
