# R2 upload report

Generated: 2026-04-30T08:34:04.798Z

## Summary

| Metric                      | Count |
| --------------------------- | ----: |
| Total scanned               |     5 |
| Uploaded                    |     3 |
| Skipped (unchanged SHA-256) |     2 |
| Failed                      |     0 |

## Local path → R2 key → public URL

| Local path                                             | R2 object key                                   | Public URL                                                               |
| ------------------------------------------------------ | ----------------------------------------------- | ------------------------------------------------------------------------ |
| app/apple-icon.png                                     | app/apple-icon.png                              | https://cdn.neetrino.com/app/apple-icon.png                              |
| app/icon.png                                           | app/icon.png                                    | https://cdn.neetrino.com/app/icon.png                                    |
| public/device-showcase/iphone-screen.MP4               | device-showcase/iphone-screen.MP4               | https://cdn.neetrino.com/device-showcase/iphone-screen.MP4               |
| public/device-showcase/other-devices.mov               | device-showcase/other-devices.mov               | https://cdn.neetrino.com/device-showcase/other-devices.mov               |
| public/portfolio/cat-card-macbook-screen-recording.mp4 | portfolio/cat-card-macbook-screen-recording.mp4 | https://cdn.neetrino.com/portfolio/cat-card-macbook-screen-recording.mp4 |

## Next steps (later migration)

1. Add `NEXT_PUBLIC_ASSETS_URL` (or similar) pointing at your R2 public base URL.
2. Replace `/…` references under `public/` with `${ASSETS_URL}/…` keys that match the R2 object keys above.
3. For `next/image`, add `images.remotePatterns` for your R2 public hostname.
4. Keep local files until production is verified; then optionally remove binaries from git.
