const Index = ({ children, condition, renderElse = "" }) => {
  if (condition) return <>{children}</>;
  else return <>{renderElse}</>;
};

export default Index;
