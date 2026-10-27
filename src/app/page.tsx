import Image from "next/image";
import { AppChiclet } from "@/components/AppChiclet";
import { AssistantCard } from "@/components/AssistantCard";
import { CopyAction } from "@/components/CopyAction";
import { Label } from "@/components/Label";
import { apps } from "@/data/apps";
import { assistants, serverUrl, serverUrlId } from "@/data/assistants";

export default function Home() {
  return (
    <main className="mx-auto grid max-w-270 gap-10 px-4 pt-6 pb-16 sm:px-6">
      <header className="border-b border-line pb-5">
        <Image
          src="/easton-logo.png"
          alt="Easton Training Center"
          width={110}
          height={44}
          priority
        />
      </header>

      <div className="grid gap-2.5">
        <Label tone="eyebrow">Staff and coaches</Label>
        <h1 className="font-display text-[clamp(44px,8vw,68px)] leading-[0.95] text-balance uppercase">
          Easton Apps<span className="text-red">.</span>
        </h1>
      </div>

      <nav aria-label="Easton apps" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {apps.map((app) => (
          <AppChiclet key={app.href} app={app} />
        ))}
      </nav>

      <section aria-labelledby="connect-title" className="grid gap-6 border-t border-line pt-9">
        <div className="grid max-w-[62ch] gap-2.5">
          <Label tone="eyebrow">AI assistants</Label>
          <h2
            id="connect-title"
            className="font-display text-[clamp(30px,5vw,40px)] leading-none uppercase"
          >
            Connect your AI assistant
          </h2>
          <p className="text-muted">
            Ask Claude or ChatGPT about Easton SOPs and leaderboard results. You sign in with your
            eastontc.com Google account. Your Google Groups decide what you can read.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2.5 rounded-[5px] border border-line bg-paper px-3.5 py-3">
          <span className="font-label text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            Server URL
          </span>
          <code
            id={serverUrlId}
            className="min-w-0 flex-[1_1_220px] font-mono text-sm wrap-anywhere"
          >
            {serverUrl}
          </code>
          <CopyAction
            variant="outline"
            value={serverUrl}
            sourceId={serverUrlId}
            done="Server URL copied."
            noteClassName="empty:-ms-3.5 not-empty:basis-full"
          >
            Copy
          </CopyAction>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {assistants.map((assistant) => (
            <AssistantCard key={assistant.id} assistant={assistant} />
          ))}
        </div>
      </section>
    </main>
  );
}
