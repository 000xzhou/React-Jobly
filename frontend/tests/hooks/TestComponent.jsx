import useAccess from "../../src/hooks/useAccess";

const TestComponentAccess = ({ username, accessType }) => {
  useAccess(username, accessType);
  return <div>Test Component</div>;
};

const TestComponent = ({ username, accessType }) => {
  useAccess(username, accessType);
  return <div>Test Component</div>;
};

export { TestComponent, TestComponentAccess };
