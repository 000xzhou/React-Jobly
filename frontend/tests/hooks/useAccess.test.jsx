import { render } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../src/UserProvider";
import { TestComponentAccess } from "./TestComponent";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

vi.mock("../../src/UserProvider", () => ({
  useUser: vi.fn(),
}));

describe("useAccess", () => {
  it("should navigate to login if there is no current user", () => {
    const mockNavigate = vi.fn();
    useNavigate.mockImplementation(() => mockNavigate);
    // no currentUser (not login)
    useUser.mockImplementation(() => ({ currentUser: null }));

    render(
      <TestComponentAccess
        username={{ username: "testuser" }}
        accessType="user"
      />
    );

    // redirect to login
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });

  it("should navigate to home if current user is not the same and not an admin", () => {
    const mockNavigate = vi.fn();
    useNavigate.mockImplementation(() => mockNavigate);
    // currentUser is user but trying to render testuser profile
    useUser.mockImplementation(() => ({
      currentUser: {
        username: "user",
        isAdmin: false,
      },
    }));

    render(
      <TestComponentAccess
        username={{ username: "testuser" }}
        accessType="user"
      />
    );
    // redirect to /
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("should not navigate if current user is the same", () => {
    const mockNavigate = vi.fn();
    useNavigate.mockImplementation(() => mockNavigate);
    // currentUser is testuser tring to enter it's own profile
    useUser.mockImplementation(() => ({
      currentUser: {
        username: "testuser",
        isAdmin: false,
      },
    }));
    render(
      <TestComponentAccess
        username={{ username: "testuser" }}
        accessType="user"
      />
    );
    // didn't redirect
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("should not navigate if current user is an admin", () => {
    const mockNavigate = vi.fn();
    useNavigate.mockImplementation(() => mockNavigate);
    // an admin is tring to enter testuser data
    useUser.mockImplementation(() => ({
      currentUser: {
        username: "adminuser",
        isAdmin: true,
      },
    }));
    render(
      <TestComponentAccess
        username={{ username: "testuser" }}
        accessType="user"
      />
    );
    // didn't redirect
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("should navigate to home if current user is not admin for admin only pages", () => {
    const mockNavigate = vi.fn();
    useNavigate.mockImplementation(() => mockNavigate);
    // testuser trying to enter admin only without admin permission
    useUser.mockImplementation(() => ({
      currentUser: {
        username: "testuser",
        isAdmin: false,
      },
    }));
    render(
      <TestComponentAccess
        username={{ username: "adminonly" }}
        accessType="admin"
      />
    );
    // should redirect to /
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("should not navigate if current user is admin for admin only pages", () => {
    const mockNavigate = vi.fn();
    useNavigate.mockImplementation(() => mockNavigate);
    // testuser trying to enter admin only with admin permission
    useUser.mockImplementation(() => ({
      currentUser: {
        username: "testadmin",
        isAdmin: true,
      },
    }));
    render(
      <TestComponentAccess
        username={{ username: "adminonly" }}
        accessType="admin"
      />
    );
    // should not redirect
    expect(mockNavigate).not.toHaveBeenCalledWith();
  });
});
