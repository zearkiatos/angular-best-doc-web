import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { TraceContextService } from '../../logging/application/trace-context.service';
import { AppLoggerService } from '../../logging/application/app-logger.service';
import { buildTraceParentHeader, parseTraceParentHeader } from '../../logging/domain/trace-context';

export const loggingHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(AppLoggerService);
  const traceService = inject(TraceContextService);

  let traceContext = traceService.getCurrentTrace();
  if (!traceContext) {
    traceContext = traceService.startTrace();
  }

  const traceparent = req.headers.get('traceparent');
  if (traceparent) {
    const parsedTrace = parseTraceParentHeader(traceparent);
    if (parsedTrace) {
      traceService.continueTrace(parsedTrace);
      traceContext = traceService.getCurrentTrace()!;
    }
  }

  const childSpan = traceService.createChildSpan();

  let correlationId = req.headers.get('X-Correlation-Id');
  if (!correlationId) {
    correlationId = crypto.randomUUID();
  }

  const clonedReq = req.clone({
    headers: req.headers
      .set('traceparent', buildTraceParentHeader(childSpan))
      .set('X-Correlation-Id', correlationId),
  });

  logger.info(`HTTP Request: ${clonedReq.method} ${clonedReq.url}`, {
    scope: 'HttpInterceptor',
    extra: { correlationId },
  });

  return next(clonedReq).pipe(
    catchError((error) => {
      logger.error(`HTTP Error: ${clonedReq.method} ${clonedReq.url}`, error, {
        scope: 'HttpInterceptor',
        extra: {
          correlationId,
          status: error.status,
          statusText: error.statusText,
        },
      });
      return throwError(() => error);
    }),
  );
};
