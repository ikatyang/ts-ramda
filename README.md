# types-ramda

[![release](https://img.shields.io/github/release/ikatyang/types-ramda.svg)](https://github.com/ikatyang/types-ramda/releases)
[![build](https://travis-ci.org/ikatyang/types-ramda.svg)](https://travis-ci.org/ikatyang/types-ramda)

TypeScript's type definitions for [Ramda](https://github.com/ramda/ramda)

[Changelog](https://github.com/ikatyang/types-ramda/blob/master/CHANGELOG.md)

- [Version](#version)
- [Usage](#usage)
- [Features](#features)
- [Build your own version](#build-your-own-version)
- [Progress](#progress)
- [Development](#development)
- [Related](#related)
- [License](#license)

## Version

This project uses the same MAJOR.MINOR version as [Ramda](https://github.com/ramda/ramda).

## Usage

The following command install the types from the `master` branch.

```sh
# using npm
npm install --save-dev ikatyang/types-ramda

# using yarn
yarn add --dev ikatyang/types-ramda
```

**NOTE**: You can also choose which release version to install using `#<branch/commit/tag>`, for example: `yarn add --dev ikatyang/types-ramda#v0.24.0`.

## Features

#### For User

- support placeholder ( `R.__` )
- support partial import ( `import * as map from "ramda/src/map"` )
- support selectable overloads ( use 0-param: `R.map<"11", "list">()` )

#### For Developer

- support snapshot testing ( via [`dts-jest`](https://github.com/ikatyang/dts-jest), see `./tests/*.ts` )
- support functions auto-currying ( via [`dts-element`](https://github.com/ikatyang/dts-element), see `./templates/*.d.ts` )

## Build your own version

The typings you installed directly from `ikatyang/types-ramda` is the full-typed version (selectable + placeholder), if you'd like to use selecable or placeholder only, or even just the normal types, you can build it yourself using one of the following commands.

```sh
# normal
npm run build-normal

# selectable only
npm run build-selectable

# placeholder only
npm run build-placeholder

# full-typed (selectable + placeholder)
npm run build
```

## Progress

source version: v0.24.1

#### Declarations

- __246__/__246__ done

#### Unit tests

- __246__/__246__ done

#### Integration tests

- [x] __
- [x] add
- [x] addIndex
- [x] adjust
- [x] all
- [x] allPass
- [x] always
- [x] and
- [x] any
- [x] anyPass
- [x] ap
- [x] aperture
- [x] append
- [x] apply
- [x] applySpec
- [x] ascend
- [x] assoc
- [x] assocPath
- [x] binary
- [x] bind
- [x] both
- [x] call
- [x] chain
- [x] clamp
- [x] clone
- [x] comparator
- [x] complement
- [x] compose
- [ ] composeK
- [x] composeP
- [x] concat
- [x] cond
- [x] construct
- [x] constructN
- [x] contains
- [x] converge
- [x] countBy
- [x] curry
- [x] curryN
- [x] dec
- [x] defaultTo
- [x] descend
- [x] difference
- [x] differenceWith
- [x] dissoc
- [x] dissocPath
- [x] divide
- [x] drop
- [x] dropLast
- [x] dropLastWhile
- [x] dropRepeats
- [x] dropRepeatsWith
- [x] dropWhile
- [x] either
- [x] empty
- [x] endsWith
- [x] eqBy
- [x] eqProps
- [x] equals
- [x] evolve
- [x] F
- [x] filter
- [x] find
- [x] findIndex
- [x] findLast
- [x] findLastIndex
- [x] flatten
- [x] flip
- [x] forEach
- [x] forEachObjIndexed
- [x] fromPairs
- [x] groupBy
- [x] groupWith
- [x] gt
- [x] gte
- [x] has
- [x] hasIn
- [x] head
- [x] identical
- [x] identity
- [x] ifElse
- [x] inc
- [x] indexBy
- [x] indexOf
- [x] init
- [x] innerJoin
- [x] insert
- [x] insertAll
- [x] intersection
- [x] intersectionWith
- [x] intersperse
- [x] into
- [x] invert
- [x] invertObj
- [x] invoker
- [x] is
- [x] isEmpty
- [x] isNil
- [x] join
- [x] juxt
- [x] keys
- [x] keysIn
- [x] last
- [x] lastIndexOf
- [x] length
- [x] lens
- [x] lensIndex
- [x] lensPath
- [x] lensProp
- [x] lift
- [x] liftN
- [x] lt
- [x] lte
- [x] map
- [x] mapAccum
- [x] mapAccumRight
- [x] mapObjIndexed
- [x] match
- [x] mathMod
- [x] max
- [x] maxBy
- [x] mean
- [x] median
- [x] memoize
- [x] memoizeWith
- [x] merge
- [x] mergeAll
- [x] mergeDeepLeft
- [x] mergeDeepRight
- [x] mergeDeepWith
- [x] mergeDeepWithKey
- [x] mergeWith
- [x] mergeWithKey
- [x] min
- [x] minBy
- [x] modulo
- [x] multiply
- [x] nAry
- [x] negate
- [x] none
- [x] not
- [x] nth
- [x] nthArg
- [x] o
- [x] objOf
- [x] of
- [x] omit
- [x] once
- [x] or
- [x] over
- [x] pair
- [x] partial
- [x] partialRight
- [x] partition
- [x] path
- [x] pathEq
- [x] pathOr
- [x] pathSatisfies
- [x] pick
- [x] pickAll
- [x] pickBy
- [x] pipe
- [ ] pipeK
- [x] pipeP
- [x] pluck
- [x] prepend
- [x] product
- [x] project
- [x] prop
- [x] propEq
- [x] propIs
- [x] propOr
- [x] props
- [x] propSatisfies
- [x] range
- [x] reduce
- [x] reduceBy
- [x] reduced
- [x] reduceRight
- [x] reduceWhile
- [x] reject
- [x] remove
- [x] repeat
- [x] replace
- [x] reverse
- [x] scan
- [ ] sequence
- [x] set
- [x] slice
- [x] sort
- [x] sortBy
- [x] sortWith
- [x] split
- [x] splitAt
- [x] splitEvery
- [x] splitWhen
- [x] startsWith
- [x] subtract
- [x] sum
- [x] symmetricDifference
- [x] symmetricDifferenceWith
- [x] T
- [x] tail
- [x] take
- [x] takeLast
- [x] takeLastWhile
- [x] takeWhile
- [x] tap
- [x] test
- [x] times
- [x] toLower
- [x] toPairs
- [x] toPairsIn
- [x] toString
- [x] toUpper
- [x] transduce
- [x] transpose
- [ ] traverse
- [x] trim
- [x] tryCatch
- [x] type
- [x] unapply
- [x] unary
- [x] uncurryN
- [x] unfold
- [x] union
- [x] unionWith
- [x] uniq
- [x] uniqBy
- [x] uniqWith
- [x] unless
- [x] unnest
- [x] until
- [x] update
- [x] useWith
- [x] values
- [x] valuesIn
- [x] view
- [x] when
- [x] where
- [x] whereEq
- [x] without
- [x] xprod
- [x] zip
- [x] zipObj
- [x] zipWith

## Development

```sh
# linting
yarn run lint

# migrate jsdoc (ramda-repo -> ./templates/*.md)
yarn run jsdoc

# build types (./index.d.ts, ./src/*.d.ts)
yarn run build

# build types with watching mode
yarn run build-watch

# snapshot test
yarn run test

# snapshot test with watching mode
yarn run test -- --watch

# NOTE: test files
#   unit tests -> ./tests/*.ts
#   integration tests -> ./tests/ramda-tests.ts
```

## Related

- [npm-ramda](https://github.com/types/npm-ramda): TypeScript's type definitions for Ramda from @types

## License

MIT © [Ika](https://github.com/ikatyang)
