# Changelog

All notable changes to this project will be documented in this file.

This project follows **Semantic Versioning (SemVer)**:
- **MAJOR**: breaking changes
- **MINOR**: new features (backwards compatible)
- **PATCH**: bug fixes and small improvements

---

## [1.0.0] - 2026-01-10

### Added
- Initial stable public release structure for the personal site.
- Freelance section with:
  - Timeline view (2026) grouped by month.
  - Dashboard view (2025) with KPI and charts.

### Changed
- Unified UI copy under src/i18n/ui.ts as the single source of truth (no hardcoded strings).
- Stabilized client-side behavior for Astro view transitions:
  - Idempotent initializers for stro:page-load and stro:after-swap.

### Fixed
- Freelance year selector (2025/2026) active state:
  - Ensures only one year button is active at a time.
  - Prevents duplicated listeners after navigation swaps.
- Improved stability of timeline accordion and subject filters under client-side navigation.

### Notes
- No functionality removed.
- Data structures preserved (reelance.json, projects.json, stats.json).
- Visual behavior preserved (layout, animations, and interactions).

---
