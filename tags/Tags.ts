enum TestType {
  Smoke = '@smoke',
  Regression = '@regression',
  API = '@api',
  UI = '@ui',
}

enum Features {
  Register = '@register',
}

export const tags = {
  TestType,
  Features,
};
