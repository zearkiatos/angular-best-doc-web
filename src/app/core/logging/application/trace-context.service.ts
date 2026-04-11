import { Injectable } from '@angular/core';
import { TraceContext, generateTraceId, generateSpanId } from '../domain/trace-context';

@Injectable({
  providedIn: 'root',
})
export class TraceContextService {
  private currentTrace: TraceContext | null = null;

  startTrace(): TraceContext {
    this.currentTrace = {
      traceId: generateTraceId(),
      spanId: generateSpanId(),
      traceFlags: '01', // sampled
    };
    return this.currentTrace;
  }

  continueTrace(traceContext: TraceContext): void {
    this.currentTrace = {
      ...traceContext,
      parentSpanId: traceContext.spanId,
      spanId: generateSpanId(),
    };
  }

  getCurrentTrace(): TraceContext | null {
    return this.currentTrace;
  }

  createChildSpan(): TraceContext {
    if (!this.currentTrace) {
      return this.startTrace();
    }

    return {
      traceId: this.currentTrace.traceId,
      spanId: generateSpanId(),
      parentSpanId: this.currentTrace.spanId,
      traceFlags: this.currentTrace.traceFlags,
    };
  }

  withSpan<T>(spanName: string, callback: () => T): T {
    const childSpan = this.createChildSpan();
    const prevTrace = this.currentTrace;

    this.currentTrace = childSpan;
    try {
      return callback();
    } finally {
      this.currentTrace = prevTrace;
    }
  }
}
