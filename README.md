# Sample Mantine-Datatable Vitest tests

Example repo showing how to run vitest unit and snapshot tests on Mantine-Datatable.

Running:

```sh
npm ci
npm run test
```

Most important parts:

- [setupTests.ts](./setupTests.ts), especially the `matchMedia.matches` stub
- [src/DataTable.test.tsx](./src/DataTable.test.tsx) with the actual test

A Mantine `<DataTable />` will not show rows in the `tbody` (or just empty rows) unless it "thinks" the viewport is big enough according to the `matchMedia` API.
With Vitest you don't run in a browser with a real viewport, so you need some way to globally ensure that DataTable "thinks" it should show rows.
Hard-coding the `matchMedia` global with a stub is one simple way to do this.
