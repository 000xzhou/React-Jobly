import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { UserProvider, useUser } from "../src/UserProvider";
import useLocalStorage from "../src/hooks/useLocalStorage";
import useAPI from "../src/hooks/useAPI";
import JoblyApi from "../src/api/api";

// Mocks the useLocalStorage hook
vi.mock("../src/hooks/useLocalStorage");
// Mocks the useAPI hook
vi.mock("../src/hooks/useAPI");
// Mocks the API hook
vi.mock("../src/api/api");

// access the context values and verify them.
const MockComponent = () => {
  const { currentUser, setCurrentUser, setToken, user, setRefetch } = useUser();
  return (
    <div>
      <div data-testid="currentUser">
        {currentUser ? currentUser.username : "No User"}
      </div>
      <div data-testid="token">{JoblyApi.token || "No Token"}</div>
      <div data-testid="user">{user ? user.username : "No User Data"}</div>
    </div>
  );
};

describe("UserProvider", () => {
  it("renders the UserProvider component", async () => {
    const mockCurrentUser = { username: "testuser" };
    const mockToken = "mocktoken";
    const mockUser = { username: "testuser", jobs: [] };

    useLocalStorage.mockImplementation((key, initialValue) => {
      if (key === "currentUser") return [mockCurrentUser, vi.fn()];
      if (key === "token") return [mockToken, vi.fn()];
      return [initialValue, vi.fn()];
    });

    // mock the useAPI hook
    useAPI.mockImplementation(() => [
      mockUser,
      false,
      null,
      null,
      vi.fn(),
      vi.fn(),
    ]);

    render(
      <UserProvider>
        <MockComponent />
      </UserProvider>
    );

    // Asserts that the UserProvider provides the correct context values
    expect(screen.getByTestId("currentUser").textContent).toBe(
      mockCurrentUser.username
    );
    expect(screen.getByTestId("token").textContent).toBe(mockToken);
    expect(screen.getByTestId("user").textContent).toBe(mockUser.username);
  });
});
