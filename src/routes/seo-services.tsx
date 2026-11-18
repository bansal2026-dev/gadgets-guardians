import { createFileRoute } from "@tanstack/react-router";
import { SEOServicePage } from "./index";

export const Route = createFileRoute("/seo-services")({
  head: () => ({
    meta: [
      { title: "SEO Services That Drive Qualified Leads | Gadgets Guardians" },
      {
        name: "description",
        content:
          "Attract qualified visitors, generate more leads, and grow revenue with expert, data-driven SEO services from Gadgets Guardians.",
      },
    ],
  }),
  component: SEOServicePage,
});
