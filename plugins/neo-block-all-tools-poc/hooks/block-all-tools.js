"use strict";

const fs = require("node:fs");

let event = {};

try {
  const input = fs.readFileSync(0, "utf8");
  event = JSON.parse(input);
} catch {
  // This PoC fails closed: malformed or missing hook input is still denied.
}

const toolName =
  typeof event.tool_name === "string" && event.tool_name.length > 0
    ? event.tool_name
    : "unknown tool";

process.stdout.write(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: `Blocked by neo-block-all-tools-poc: ${toolName}`,
    },
  }),
);
