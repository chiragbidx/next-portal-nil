# Changelog
<!--
  Purpose:
  - Track project change history over time.
  - Record date, summary, and key files touched for each change set.
  - Keep entries append-only (do not delete past entries).
-->

- 2024-06-11: Added TalentSync CRM entities to Drizzle schema (`candidates`, `clients`, `job_orders`, `candidate_job_orders`, `placements`, `activity_log`) with team-based, multi-tenant design. Updated dashboard sidebar navigation to add all core CRM feature links (Candidates, Clients, Job Orders, Placements, Activity).  
  Files: lib/db/schema.ts, components/dashboard/sidebar-nav.tsx