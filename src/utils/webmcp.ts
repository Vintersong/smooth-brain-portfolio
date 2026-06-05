/**
 * webmcp.ts — Shared WebMCP registration utility
 * Chrome WebMCP (chrome://flags/#enable-webmcp-testing, Origin Trial in Chrome 149)
 * https://developer.chrome.com/docs/ai/webmcp
 *
 * Progressive enhancement: no-ops silently in non-supporting browsers.
 */

export type ToolHandler = (params: Record<string, unknown>) => unknown;

export interface ToolDefinition {
  name: string;
  description: string;
  schema: object;
  handler: ToolHandler;
}

/**
 * Registers a WebMCP tool if the browser supports navigator.tools.
 * Returns true if registration succeeded, false if unsupported.
 */
export async function registerTool(def: ToolDefinition): Promise<boolean> {
  // @ts-ignore — navigator.tools is a proposed API, not yet in TS lib
  if (typeof navigator === 'undefined' || !navigator.tools) return false;

  try {
    // @ts-ignore
    await navigator.tools.register(def.name, {
      description: def.description,
      schema: def.schema,
      execute: def.handler,
    });
    return true;
  } catch (e) {
    console.warn(`[webmcp] Failed to register tool "${def.name}":`, e);
    return false;
  }
}

/**
 * Registers multiple tools at once.
 * Logs a summary to console (intentionally verbose — this is a portfolio).
 */
export async function registerTools(tools: ToolDefinition[]): Promise<void> {
  // @ts-ignore
  if (typeof navigator === 'undefined' || !navigator.tools) {
    // Silent no-op in unsupported browsers
    return;
  }

  const results = await Promise.all(tools.map(t => registerTool(t)));
  const registered = tools.filter((_, i) => results[i]).map(t => t.name);
  const failed = tools.filter((_, i) => !results[i]).map(t => t.name);

  if (registered.length) {
    console.log(
      `%c[.smooth-brain-designs/webmcp] Registered tools: ${registered.join(', ')}`,
      'color: #7dd3d8; font-family: monospace;'
    );
  }
  if (failed.length) {
    console.warn(`[.smooth-brain-designs/webmcp] Failed: ${failed.join(', ')}`);
  }
}
