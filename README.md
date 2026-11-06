# OpenInvento Docs

The deployed documentation for OpenInvento can be found at [https://openinvento.github.io/docs/](https://openinvento.github.io/docs/).

## Contributing
You can contribute to this documentation by submitting a pull request.

## Versions
The documentation is versioned per OpenInvento release:

- `docs/` describes the current `main` of OpenInvento, including features that are not released yet. It is published as **Next (unreleased)** under `/docs/docs/next/`.
- `versioned_docs/version-<version>/` holds the documentation of a release. The latest release is the default version of the site.

Document a new feature in `docs/`. When a new OpenInvento version is released, snapshot the docs for it:

```bash
npm run docusaurus docs:version 1.5.0
```

This copies `docs/` to `versioned_docs/version-1.5.0/`, adds the sidebar to `versioned_sidebars/` and the version to `versions.json`, which makes it the new default. Fixes for an already released version go into its folder under `versioned_docs/` (and into `docs/` if they still apply).

## Development
To run the documentation locally, you can use the following command:

```bash
npm run start
```