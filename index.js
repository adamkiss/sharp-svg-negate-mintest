const sharp = require('sharp')

sharp('./octocat.svg').png().negate().toFile('./octocat.png')