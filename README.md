# immer.js bug when draft is not modified

## reproduction steps

1. clone the repo 

```bash
git clone https://github.com/bug-reproduction/immer-freeze.git
cd immer-freeze
```

2. install deps

```bash
pnpm i
```

3. run the tests

```
pnpm test
```

4. See failing result

You ll notice that the only difference between the failing and passing tests is that in one, the draft is not modified.

This result in immer freezing both the final and original object.

Actually they share the same ref.