# Decision log

Newest first. One line each: date, decision, why.

- 2026-11-10: Folder layout is src/, public/models/, blender/, docs/. Keeps editable sources separate from exports.

- Export: File > Export > glTF 2.0, format glTF Binary (.glb), to `public/models/`.
  - Include: no cameras, no lights, no custom properties, Limit To unticked.
  - Transform: +Y Up ticked.
  - Mesh: Apply Modifiers ticked. Materials: Export. Draco compression off. Animation off.
  - Check every export in gltf-viewer.donmccurdy.com before committing.

  - Materials: `mat_<name>`, e.g. `mat_controller`.