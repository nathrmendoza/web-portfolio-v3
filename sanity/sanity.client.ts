// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "ovvg8qis",
  dataset: "production",
  apiVersion: "2024-06-10",
  useCdn: false,
};

const client = createClient(config);

export default client;