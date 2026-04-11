import { TraceContext } from './trace-context';

export interface LogContext {
  scope?: string;
  correlationId?: string;
  traceContext?: TraceContext;
  tags?: string[];
  extra?: Record<string, unknown>;
}
