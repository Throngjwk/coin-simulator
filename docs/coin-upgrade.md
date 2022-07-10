# Coin Upgrade
I have follow this:
```js
 // c1
    {
        c1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(1, Math.log2(3))));
        c1.getDescription = (_) => "Blah";
        c1.getInfo = (amount) => "Blah";
    }
```

I Have first so upgrade than here:
```js
 // c2
    {
        c2 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(15, Math.log2(2))));
        c2.getDescription = (_) => "Real Blah";
        c2.getInfo = (amount) => "Real Blah";
    }
```
## Features
- isAvailable Is Coming theory is bugrated.
- level defalut level
