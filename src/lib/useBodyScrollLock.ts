"use client";

import { useEffect } from "react";

/**
 * Reference-counted body scroll lock.
 *
 * Multiple components can call `useBodyScrollLock(true)` simultaneously
 * (nested modals, drawers, lightboxes). The body is locked while the
 * counter is positive and only restored to its original overflow value
 * once every consumer has released its lock.
 *
 * The previous per-component pattern (save prevOverflow on open, restore
 * on close) breaks for nested modals because the outer one ends up
 * "restoring" to the inner modal's `"hidden"` value, leaving the page
 * locked forever. This module fixes that.
 */

let lockCount = 0;
let originalOverflow = "";

export function lockBodyScroll() {
  if (typeof document === "undefined") return;
  if (lockCount === 0) {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  lockCount++;
}

export function unlockBodyScroll() {
  if (typeof document === "undefined") return;
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.overflow = originalOverflow;
  }
}

/** Hook variant. Locks while `active` is truthy. */
export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    lockBodyScroll();
    return () => {
      unlockBodyScroll();
    };
  }, [active]);
}
