## Project Plan

### Open questions

- Navbar - existing or new? If new, discuss hover state, dropdowns, etc.
- Buttons - hover and active state?
- Video - is that intentional start point?
- Hero image - animate on hover?
- Side Nav Menu Panel
  - Animations and slide-in behavoir
  - Hover and active state
- Mobile nav icon
  - Hover state of icon on open / closed menu state
  - Animate menu icon on click? (ex. apple)

---

### Technical considerations

- Any analytics and or tracking snippets to load
- Events to fire on click or user behavoir

---

### Technical estimate

**Planning and setup**

- 30 min - meeting with designer
- 2 hours - plan tech stack, map out organization of components, check assets
- 2 hours - set up repo and set up styles / basic design system

**Development**

- 2-3 hours - Large navbar, depending on dropdowns/animations
- 30 mins - button and create reusable component
- 2-3 hours - Side navbar depending on dropdowns/animations
- 1 hour - Hero, assuming animation and no existing component
- 30 mins - Video embed
- 30 mins - 3rd panel, using hero component
- 1 hour - fetch jobs functionality and filtering algorithm
- 1-2 hours - Filtering select input component using react-select package
- 2 hours - Teams and jobs component groups
- 15 mins - mins - bottom
- 1 hour - audit and fix responsiveness, spacing, fonts, links, animations
- 30 mins - cross-browser test and accessibility testing

---

### Order of operations

- Ensure all assets and correct links ready
- Start development
  - Large navbar
  - Side icon and Nav menu panel
  - Hero and work down full page
- Audit spacing, font, color, responsiveness and adjust as needed
- Test all links and interactions in
- Review code and refactor for clarity
- Accessibility check (tabbing and screen reader)
- Push to staging
- Design review
- Copy review
- Crossbrowser testing (ex. browserstack) of links and user interactions
