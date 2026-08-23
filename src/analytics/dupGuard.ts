const emittedEvents = new Set<string>();

/**
 * Checks if an event has already been emitted for a given route/identifier.
 * If not, it marks it as emitted and returns true (meaning "should track").
 * If it has been emitted, it returns false.
 */
export function guardDuplicateEvent(
  eventName: string,
  pathname: string,
  identifier: string = ""
): boolean {
  const key = `${eventName}|${pathname}|${identifier}`;
  if (emittedEvents.has(key)) {
    return false;
  }
  emittedEvents.add(key);
  return true;
}

// Exposed for testing
export function clearDuplicateGuard() {
  emittedEvents.clear();
}
