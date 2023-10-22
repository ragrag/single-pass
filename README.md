# single-pass

## do it all in a single-pass

### map

```javascript
    import { map } from 'single-pass';

    const [mulOne, mulTwo, mulThree] = map(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      (n) => n * 1,
      (n) => n * 2,
      (n) => n * 3
    );

    console.log(one); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(two); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    console.log(three); // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
```

### filter

```javascript
    import { filter } from 'single-pass';

    const [odds, evens, divisibleByThree] = filter(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      (n) => n % 2 !== 0,
      (n) => n % 2 === 0,
      (n) => n % 3 === 0
    );
    
    console.log(odds); // [1, 3, 5, 7, 9]
    console.log(evens); // [2, 4, 6, 8, 10]
    console.log(divisibleByThree); // [3, 6, 9]
```

### find

```javascript
    import { find } from 'single-pass';

    const [one, two, twenty] = find(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      (n) => n === 1,
      (n) => n === 2,
      (n) => n === 20
    );
    
    console.log(one); // 1
    console.log(two); // 2
    console.log(twenty); // undefined
```

### findIndex

```javascript
    import { findIndex } from 'single-pass';

    const [one, two, twenty] = findIndex(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      (n) => n === 1,
      (n) => n === 2,
      (n) => n === 20
    );
    
    console.log(one); // 0
    console.log(two); // 1
    console.log(twenty); // -1
```

## Benchmarks
Benchmarks on an array with 1,000,000 items doing 1000 passes

| Function | n-passes | single-pass |
|----------|----------|-------------|
| Filter   | 1267ms    | 2646ms       |
