# iPhone test checklist

A 15-minute pass on a real iPhone. The automated smoke tests run in WebKit
with iPhone emulation, but they can't check Home Screen installs, VoiceOver,
Dynamic Type or the real keyboard. This list covers those.

Tick each box as you go. If something looks wrong, note the screen, what you
did and what you saw, and take a screenshot.

- Phone:
- iOS version:
- Date:

## 1. Install to Home Screen (2 min)

- [ ] Open the app in Safari.
- [ ] Tap Share, then **Add to Home Screen**. The name and icon look right.
- [ ] Open it from the Home Screen. It opens full screen, with no Safari
      address bar.
- [ ] The top of the screen clears the notch or Dynamic Island.
- [ ] The tab bar sits just above the home bar line and every tab is easy to
      tap.

## 2. Offline (2 min)

- [ ] With the app open, visit the Library, one card and the Phrase Bank.
- [ ] Close the app fully (swipe it away).
- [ ] Turn on Aeroplane Mode.
- [ ] Open the app from the Home Screen. The Library loads.
- [ ] The card you visited opens.
- [ ] The Phrase Bank opens and a line copies.
- [ ] A card you have **not** opened shows a clear message, not a blank
      screen.
- [ ] Turn Aeroplane Mode off.

## 3. VoiceOver (4 min)

Settings > Accessibility > VoiceOver, or triple-click the side button if you
have the shortcut set up.

- [ ] On the Library, swipe right through the page. Each item reads in a
      sensible order and nothing is read twice.
- [ ] Turn the rotor to **Headings** and swipe down. You can jump between
      sections on the Library and on a card.
- [ ] The tab bar reads each tab's name, and the current tab says
      "selected" or similar.
- [ ] On a card, the Use it / Learn it / Practise it tabs read as tabs and
      say which one is selected.
- [ ] Open a sheet (Filters on the Library, or Settings on Saved). Focus
      moves into it, and you can't swipe to the page behind.
- [ ] Close the sheet. Focus goes back to the button that opened it.
- [ ] On **Help me right now**, pick a situation and double-tap a line.
      VoiceOver says it was copied.
- [ ] Copy a line in the Phrase Bank. VoiceOver says it was copied.
- [ ] Turn VoiceOver off.

## 4. Larger Text (2 min)

Settings > Accessibility > Display & Text Size > Larger Text. Turn on
**Larger Accessibility Sizes** and drag to the largest size.

- [ ] Library: titles and summaries wrap; nothing is cut off or overlaps.
- [ ] A card: the tabs and the bottom copy button still fit and can be
      tapped.
- [ ] Phrase Bank: the filter buttons wrap or scroll; none are hidden.
- [ ] Daily Drill: the rating buttons and **Finish** button are all
      reachable.
- [ ] No screen scrolls sideways.
- [ ] Set the text size back.

## 5. Reduce Motion (1 min)

Settings > Accessibility > Motion > Reduce Motion: on.

- [ ] Tabs, sheets and the tab bar appear without sliding or bouncing.
- [ ] Tapping the current tab jumps to the top instead of scrolling
      smoothly.
- [ ] Turn Reduce Motion off.

## 6. Dark mode (1 min)

Control Centre, or Settings > Display & Brightness > Dark.

- [ ] Library, a card, Phrase Bank, Drill and Saved are all easy to read.
- [ ] No white flash when the app opens.
- [ ] The status bar text is readable against the header.
- [ ] Switch back to light and check one screen again.

## 7. Landscape (1 min)

Turn off Portrait Orientation Lock.

- [ ] Turn the phone sideways on the Library and on a card.
- [ ] Nothing hides behind the notch or Dynamic Island on either side.
- [ ] The tab bar and header still work, and nothing scrolls sideways.
- [ ] Turn back to portrait. The layout recovers.

## 8. Keyboard (2 min)

- [ ] Tap the search box on the Library. Search opens and the keyboard
      appears. The search box stays visible above it.
- [ ] Type a word. Results show above the keyboard, and the tab bar hides
      instead of riding up on the keyboard.
- [ ] Tap a result straight after typing. The card opens. Swipe back (or tap
      Back) and the same results are still there.
- [ ] In the Phrase Bank, tap **Search phrases** and type. The box isn't
      covered.
- [ ] In the Daily Drill, tap the **Reflect in one line** box and type. The
      box isn't covered and you can still reach the rating buttons after
      closing the keyboard.
- [ ] Tap **Done** or outside the box. The keyboard goes away and the tab
      bar comes back.

## Notes

Anything that didn't work:

-
