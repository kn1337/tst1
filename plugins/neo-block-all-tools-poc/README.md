# Neo block-all-tools PoC

This plugin registers a `PreToolUse` hook with the `*` matcher. Every tool call is
denied before execution and Claude receives this reason:

```text
Blocked by neo-block-all-tools-poc: <tool name>
```

The hook does not prevent ordinary text replies. Disable or uninstall the plugin
to restore tool access.
