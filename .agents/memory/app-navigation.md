---
name: App navigation structure
description: Where each nav surface lives, how the scroll-hiding chrome works, and the compact-but-tappable sizing pattern.
---

# App navigation (tc-reference)

- **Destinations** come from one list, `NAV_DESTINATIONS` in `src/lib/nav-items.ts` (Library, Playbooks, Phrases, Saved, Drill). The phone tab bar (`bottom-tab-bar.tsx`) and the desktop sidebar (`app-layout.tsx`) both render from it. Badges come from `useNavBadges()`. `pageTitle()` drives `document.title`.
- **Tools** (Search, Quick Lookup, theme, card PDF, card favourite) live in the header (`app-header.tsx`), not in the tab bar or sidebar. The PDF button only shows when `usePdf().pdfUrl` is set. The Library filter toggle only shows on `/`.
- **Scroll-hiding chrome:** the header (48px to 34px), the tab bar (slides off with `translateY(100%)`) and the Library filter panel all use `useScrollDirection` (`src/hooks/use-scroll-direction.ts`). It clamps iOS overscroll, uses hysteresis, and takes a `resetKey` (the route) so chrome reappears on navigation. The tab bar also hides while a text field is focused so it never rides above the keyboard. `--app-header-height` is published by the header and every sticky sub-bar uses it as `top`.
- **Compact but tappable:** controls look small (26 to 36px) and get an invisible `::before` hit band on `(pointer: coarse)` so taps land in about 44px (`.library-filter-control`, `.card-section-pill`, `.tap-band`, `.app-header .card-header-action` in `index.css`). Keep neighbouring bands from overlapping (inset no larger than half the gap).
- **Card page tabs:** a card is three tabs, Use it / Learn it / Practise it (`card-detail/card-tabs-bar.tsx`, shared `SegmentedTabs`, a real tablist). `TAB_SECTIONS` in `card-detail/card-sections.ts` says which of the 16 section ids sits under which tab; section ids are kept on the blocks (`#section-method`) so old links open the right tab. Only Learn it has a jump row (`.card-section-pill`), whose active pill is centred by scrolling the row only (`scroller.scrollTo`), never the page.
- **Card Copy dock:** on phones the Use it tab shows a `DockBar` with "Copy the best line". It reads the tab bar's `data-hidden` (`useTabBarHidden`) and drops into the bar's place when the bar slides away. Programmatic section scrolls go through `sectionScrollTop`, which allows for the header hiding on a scroll down.
- Tests that render `AppHeader` need `PdfProvider` in the wrapper.
