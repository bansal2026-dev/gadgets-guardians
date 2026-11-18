import { createFileRoute } from "@tanstack/react-router";
import { WhoWeArePage } from "./index";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are | Gadgets Guardians" },
      {
        name: "description",
        content:
          "Meet Gadgets Guardians: a digital growth team bringing SEO, PPC, SMM, website development, and designing together for ambitious businesses.",
      },
    ],
  }),
  component: WhoWeArePage,
});
