import { IGatsbyImageData } from "gatsby-plugin-image";

export interface Avatar extends IGatsbyImageData {
  extension: string;
  publicURL: string;
}

export type Plugin = {
  name: string,
  displayName: string,
  description: string,
  author: string;
  avatar?: Avatar;
  cloudoguLink?: string;
};
