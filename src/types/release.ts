export type Conditions = {
  os: string;
  arch: string;
  minVersion: string;
};

export type Release = {
  plugin: string;
  tag: string;
  date: string;
  url: string;
  checksum: string;
  conditions: Conditions;
  author: string;
};
