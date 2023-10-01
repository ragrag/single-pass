# single-pass

## do it all in a single-pass

```javascript
    import { filter, map } from 'single-pass';

    const [odds, evens, divisibleByThree] = filter(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      (n) => n % 2 !== 0,
      (n) => n % 2 === 0,
      (n) => n % 3 === 0
    );
    
    console.log(odds); // [1, 3, 5, 7, 9]
    console.log(evens); // [2, 4, 6, 8, 10]
    console.log(divisibleByThree); // [3, 6, 9]

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
