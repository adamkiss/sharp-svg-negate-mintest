const sharp = require('sharp')

sharp('./octocat.svg').png().negate().toFile('./octocat-png-negate.png')
sharp('./octocat.svg').negate().png().toFile('./octocat-negate-png.png')
sharp('./illustrator.svg').png().negate().toFile('./illustrator-png-negate.png')
sharp('./illustrator.svg').negate().png().toFile('./illustrator-negate-png.png')
sharp('./imageoptim.svg').png().negate().toFile('./imageoptim-png-negate.png')
sharp('./imageoptim.svg').negate().png().toFile('./imageoptim-negate-png.png')
