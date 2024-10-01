import { createClient } from "microcms-js-sdk";

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Item = {
  title: string;
  image: MicroCMSImage;
  price: number;
  releaseDate: string;
} & MicroCMSListContent;
