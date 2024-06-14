import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import { expect, it } from "vitest";
import { MantineProvider } from '@mantine/core';
import { DataTable } from "mantine-datatable";

function renderForTest(ui: React.ReactNode) {
  return render(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider>{children}</MantineProvider>
    ),
  });
}

it("renders MyComponent correctly", async () => {
  // ⚠️ This test relies on the matchMedia.matches mock from setupTests.ts
  const { container, getByText } = renderForTest(
    <DataTable 
      records={[{ id: 1, name: "John Doe", }]}
      columns={[{ accessor: "name" }]}
    />
  );
  expect(getByText("John Doe")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
