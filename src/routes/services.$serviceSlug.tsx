import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "./index";

export const Route = createFileRoute("/services/$serviceSlug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.serviceSlug.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())} Services | Gadgets Guardians` },
      {
        name: "description",
        content: `Explore Gadgets Guardians ${params.serviceSlug.replace(/-/g, " ")} services, tailored to your goals and built to support measurable growth.`,
      },
    ],
  }),
  component: ServiceRoute,
});

function ServiceRoute() {
  const { serviceSlug } = Route.useParams();
  return <ServiceLandingPage slug={serviceSlug} />;
}
