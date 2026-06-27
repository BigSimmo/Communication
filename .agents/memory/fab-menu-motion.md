---
name: Mobile FAB menu motion
description: How the mobile FAB nav animates open/close without a close-pop, and why the nav stays mounted.
---

# Mobile FAB menu motion (app-layout.tsx)

The mobile FAB nav pills are **always mounted** (not `{fabOpen && ...}`) and animate via
CSS **transitions** keyed on the `fabOpen` flag (opacity/transform), not keyframe `animation`.

**Why:** Conditional mount/unmount caused a visible "pop" on close (elements vanish before
animating out). Transitions run in both directions and reverse cleanly. Keyframe animations
can't do an exit without keeping the node mounted, and they would also fire on the initial
page mount — transitions do **not** fire on first render, only when a value actually changes,
so always-mounted + transitions is the correct combo.

**How to apply:**
- When closed, the nav must be inert: `aria-hidden`, `pointer-events:none`, and each pill
  `tabIndex={-1}` (flip to `0` when open) so it stays out of the a11y/tab order.
- Stagger emanates from the FAB: enter delay = `(n-1-i)*step` (bottom pill first); close uses a
  smaller top-down delay. Labels follow icons via a slightly larger transition-delay.
- Idle attention cue is a separate `.fab-halo` div behind the FAB (z below the button), not a
  `::before` — a negative-z `::before` paints *over* the element's own background, tinting the face.
- Haptics: `navigator.vibrate(...)` wrapped in a try/catch + `typeof` guard; degrades silently.
- Reduced-motion/print/forced-colors fallbacks live in index.css keyed on the `.fab-*` classes.
