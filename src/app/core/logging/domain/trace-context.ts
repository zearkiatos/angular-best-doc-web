export interface TraceContext {
  traceId: string;
  spanId: string;
  parentSpanId?: string;
  traceFlags: string; // '01' = sampled, '00' = not sampled
}

export function generateTraceId(): string {
  return crypto.getRandomValues(new Uint8Array(16)).reduce((hex, byte) => hex + byte.toString(16).padStart(2, '0'), '');
}

export function generateSpanId(): string {
  return crypto.getRandomValues(new Uint8Array(8)).reduce((hex, byte) => hex + byte.toString(16).padStart(2, '0'), '');
}

export function buildTraceParentHeader(trace: TraceContext): string {
  // Formato W3C estándar: version-traceId-parentId-traceFlags
  return `00-${trace.traceId}-${trace.spanId}-${trace.traceFlags}`;
}

export function parseTraceParentHeader(header: string): TraceContext | null {
  // Parse: 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01
  const parts = header.split('-');
  if (parts.length !== 4) return null;

  return {
    traceId: parts[1],
    spanId: parts[2],
    parentSpanId: parts[2],
    traceFlags: parts[3],
  };
}
