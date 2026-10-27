export const serverUrl = "https://mcp.eastontc.com/mcp";

export const serverUrlId = "server-url";

type OpenAction = { kind: "open"; label: string; href: string };

type CommandAction = { kind: "command"; label: string; lines: string[] };

export const commandText = (lines: string[]) => lines.join(" ");

export const commandDisplay = (lines: string[]) => lines.join(" \\\n  ");

export type Assistant = {
  id: string;
  name: string;
  detail: string;
  steps: string[];
  action: OpenAction | CommandAction;
};

export const assistants: Assistant[] = [
  {
    id: "claude",
    name: "Claude",
    detail: "claude.ai and Claude Desktop",
    steps: [
      "Open Customize, then Connectors. Click Add, then Add custom connector.",
      "Name it Easton and paste the server URL.",
      "Click Connect and sign in.",
    ],
    action: { kind: "open", label: "Open Claude", href: "https://claude.ai/customize/connectors" },
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    detail: "Needs a plan with developer mode",
    steps: [
      "Open Settings, then Apps and Connectors, then Advanced. Turn on Developer mode.",
      "Click Create. Name it Easton, paste the server URL and choose OAuth.",
      "Click Create and sign in.",
    ],
    action: {
      kind: "open",
      label: "Open ChatGPT",
      href: "https://chatgpt.com/#settings/Connectors",
    },
  },
  {
    id: "claude-code",
    name: "Claude Code",
    detail: "Terminal",
    steps: [
      "Run the command once in a terminal.",
      "Start Claude Code and type /mcp.",
      "Pick easton and choose Authenticate.",
    ],
    action: {
      kind: "command",
      label: "Copy command",
      lines: ["claude mcp add --transport http", "--scope user easton", serverUrl],
    },
  },
];
