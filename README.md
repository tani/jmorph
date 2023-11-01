# JMorph for GAS

Library ID

```
10344LINyJKL07kFRFYx7ucGMufqZ_fp6VKBcoGiLTwDAl3kJ_6M-pCeo
```

## Usage

```js
const rakutenma = JMorph.createRakutenMA()
console.log(rakutenma.tokenize("お食べになる")) // [["お", "P"],["食べ","V-c"],["に", "P-k"],["なる", "V-dp"]]
const tinysegmenter = JMorph.createTinySegmenter()
console.log(tinysegmenter.segment("お食べになる"))
```
