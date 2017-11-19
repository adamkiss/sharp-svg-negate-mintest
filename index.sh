#!/bin/bash
vips invert ./src/octocat.svg ./output-vips/octocat.png
vips invert ./src/illustrator.svg ./output-vips/illustrator.png
vips invert ./src/illustrator-clip.svg ./output-vips/illustrator-clip.png
vips invert ./src/imageoptim.svg ./output-vips/imageoptim.png
vips invert ./src/illustrator-clip.png ./output-vips/illustrator-clip-2.png