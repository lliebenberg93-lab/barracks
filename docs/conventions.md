# Conventions

Rules that keep Blender and the code in sync. Change a rule here first, then in the project.

## Naming (Blender objects)

- Interactive objects: `obj_<name>`, e.g. `obj_controller`, `obj_window`.
- Non-interactive furniture and set dressing: `furn_<name>`, e.g. `furn_bed`.
- Room shell (walls, floor): `shell_<name>`.
- Lowercase, `snake_case`, no spaces, no `.001` suffixes. Fix duplicates in Blender before export.
- Parts of an object group under one parent empty with the object's name. Only the parent carries the `obj_` name.
- The code looks objects up by exact name. Renaming in Blender means updating `docs/objects.md` and the registry in the same PR.

## Scale and orientation

- 1 Blender unit = 1 metre. Room is built at real-world size.
- Origin of each object sits at its base (bottom centre) so it can be moved and rotated predictably.
- Apply scale and rotation (Ctrl+A) before export, so every object has scale 1 and rotation 0.
- Z is up in Blender; the glTF export converts to +Y up for Three.js.

## Tools and versions

- Blender 5.2 LTS. Do not upgrade the project mid-build without a ticket.
- Node LTS, Vite, TypeScript, Three.js (versions are pinned by `package-lock.json`).

## Files

- Editable sources in `blender/`, exports in `public/models/`. Commit the `.blend` and its `.glb` together, always.
- Export settings: recorded here when the first export is done (LEO-80).
- Size budget: whole scene under ~10 MB; any single GLB under 3 MB for now.

## Git workflow

- One branch per ticket, named with Linear's branch name (it contains the ticket ID).
- Commit style: `feat:`, `fix:`, `docs:`, `chore:`, then the message, then the ticket ID in brackets, e.g. `feat: add orbit controls (LEO-83)`.
- Small PRs; the PR title contains the ticket ID.
- Never edit the same `.blend` on two branches at once; binaries can't be merged.
- Tag a release at each milestone: v0.1 = box room live, v0.2 = bedroom live.

## Privacy

- The repo is public. No credentials, API keys, exact coordinates or private personal details, ever.
- Weather uses city-level location only.
