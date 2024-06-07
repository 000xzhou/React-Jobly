import { render, waitFor, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { useUser } from "../../src/UserProvider";
import useAPI from "../../src/hooks/useAPI";
import JoblyApi from "../../src/api/api";
import { TestComponentAPI } from "./TestComponent";

// Mock JoblyApi
// vi.mock("../../src/api/api");
JoblyApi.getMethod = vi.fn();

describe("useAPI", () => {
  it("fetches data successfully", async () => {
    const mockData = { data: "some data" };
    // mock resolved
    JoblyApi.getMethod.mockResolvedValueOnce(mockData);

    render(<TestComponentAPI apiMethod="getMethod" endpoint="endpoint" />);
    // Pattern match data
    await waitFor(() => expect(screen.getByText(/Data:/)).toBeInTheDocument());
    expect(screen.getByText(/some data/)).toBeInTheDocument();
  });

  it("handles error", async () => {
    const mockError = new Error("Failed to fetch");
    // mock reject
    JoblyApi.getMethod.mockRejectedValueOnce(mockError);

    render(<TestComponentAPI apiMethod="getMethod" endpoint="endpoint" />);
    // Pattern match error
    await waitFor(() => expect(screen.getByText(/Error:/)).toBeInTheDocument());
    expect(screen.getByText(/Failed to fetch/)).toBeInTheDocument();
  });

  it("handles refetch", async () => {
    const mockData = { data: "some data" };
    JoblyApi.getMethod
      .mockResolvedValueOnce(mockData)
      .mockResolvedValueOnce({ data: "new data" });

    const { rerender } = render(
      <TestComponentAPI apiMethod="getMethod" endpoint="endpoint" />
    );

    await waitFor(() => expect(screen.getByText(/Data:/)).toBeInTheDocument());
    expect(screen.getByText(/some data/)).toBeInTheDocument();

    rerender(
      <TestComponentAPI
        apiMethod="getMethod"
        endpoint="endpoint"
        triggerRefetch
      />
    );
    await waitFor(() => expect(screen.getByText(/Data:/)).toBeInTheDocument());
    expect(screen.getByText(/new data/)).toBeInTheDocument();
  });
});
