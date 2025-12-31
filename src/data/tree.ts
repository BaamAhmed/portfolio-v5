type TreeNode = {
  description?: string;
  children?: Record<string, TreeNode>;
};

export const siteTree: TreeNode = {
  children: {
    writing: {
      children: {
        "example-one-writing": {},
        "example-two-writing": {},
      },
    },
    building: {
      children: {
        "example-one-building": {},
        "example-two-building": {},
      },
    },
  },
};

export const findNode = (splitPath: Array<string>) => {
  let curr = siteTree;
  for (const segment of splitPath) {
    if (curr.children?.[segment]) {
      curr = curr.children[segment];
    } else {
      return null;
    }
  }
  return curr;
};
