import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    transformIgnorePatterns: [
      `node_modules/(?!aws-testing-library|filter-obj)`,
    ],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.tsx?$': 'ts-jest',
    },
  };
};
