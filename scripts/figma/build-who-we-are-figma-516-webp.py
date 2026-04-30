#!/usr/bin/env python3
"""
Build `public/figma-assets/who-we-are-figma-516-transparent.webp` from the source GIF.

Removes flat black via soft alpha (fewer halos than hard key) + MinFilter on alpha
(reduces speckles) + light Gaussian blur on alpha (smooth silhouette).

Requires: Pillow (`python3 -m pip install pillow` if missing).
"""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageFilter

REPO = Path(__file__).resolve().parents[2]
SRC = REPO / "public/figma-assets/e13d4cdd-fff7-4529-b579-81b60d56576b.gif"
OUT = REPO / "public/figma-assets/who-we-are-figma-516-transparent.webp"

# Squared RGB norm r²+g²+b²: fully transparent at/below SQ_LO; fully opaque from SQ_HI up.
SQ_LO = 85
SQ_HI = 340

MIN_FILTER_SIZE = 3
ALPHA_GAUSSIAN_BLUR_RADIUS = 0.45


def main() -> None:
    if not SRC.is_file():
        raise SystemExit(f"Missing source: {SRC}")

    im = Image.open(SRC)
    n = im.n_frames
    durations: list[int] = []
    frames: list[Image.Image] = []

    for i in range(n):
        im.seek(i)
        durations.append(im.info.get("duration", 50))
        rgba = im.convert("RGBA")
        px = rgba.load()
        w, h = rgba.size
        for y in range(h):
            for x in range(w):
                r, g, b, _old_a = px[x, y]
                sq = r * r + g * g + b * b
                if sq <= SQ_LO:
                    a = 0
                elif sq >= SQ_HI:
                    a = 255
                else:
                    a = int(255 * (sq - SQ_LO) / (SQ_HI - SQ_LO))
                    if a < 8:
                        a = 0
                    elif a > 247:
                        a = 255
                px[x, y] = (r, g, b, a)

        r_ch, g_ch, b_ch, a_ch = rgba.split()
        a_ch = a_ch.filter(ImageFilter.MinFilter(size=MIN_FILTER_SIZE))
        a_ch = a_ch.filter(ImageFilter.GaussianBlur(radius=ALPHA_GAUSSIAN_BLUR_RADIUS))
        frames.append(Image.merge("RGBA", (r_ch, g_ch, b_ch, a_ch)))

    durations_ms = [max(1, int(d)) for d in durations]
    frames[0].save(
        OUT,
        save_all=True,
        append_images=frames[1:],
        duration=durations_ms,
        disposal=1,
        loop=0,
        format="WEBP",
        lossless=True,
        method=6,
    )
    print(f"Wrote {OUT} ({os.path.getsize(OUT)} bytes, {n} frames)")


if __name__ == "__main__":
    main()
