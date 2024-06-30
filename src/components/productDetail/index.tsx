import { useProductContext } from "@/app/hooks/useProduct";
import { Avatar, Badge, Button, IconWithBackground } from "@/subframe";
import LeadMagnet from "../leadMagnet";
import { Icon } from "@subframe/core";

export default function ProductDetail() {
  const { selectedProduct } = useProductContext();

  if (!selectedProduct) {
    return (
      <div className="w-full p-4">
        <span className="text-heading-3 font-heading-3 text-default-font">
          Products are not avialable yet, please refresh the page or give us
          your email to be notified
        </span>
        <div className="flex flex-col items-start gap-2 relative">
          <LeadMagnet
            CTAText="I want be notified!"
            DisclaimerText="✉️ Cool! Leave your best email here:"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="md:overflow-auto flex w-full md:h-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded bg-neutral-50 p-4 FF4081">
      <div className="flex flex-col md:flex-row w-full items-start justify-between gap-4">
        {/* Main info section */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center justify-center gap-2">
            <Avatar
              className="h-20 w-20 flex-none"
              variant="brand"
              size="large"
              image={selectedProduct.thumbnail}
              square={false}
            >
              AB
            </Avatar>
            <span className="text-heading-1 font-heading-1 text-default-font">
              {selectedProduct.title}
            </span>
          </div>
          <span className="text-heading-2 font-heading-2 text-subtext-color">
            {selectedProduct.tagline}
          </span>
          <span className="whitespace-pre-wrap text-body font-body text-default-font">
            {selectedProduct.description}
          </span>
        </div>
        {/* Vote section */}
        <div className="w-full md:max-w-80 flex flex-row justify-around items-start md:items-start gap-6 rounded border-4 border-solid border-neutral-border bg-default-background p-6 shadow-default">
          <div className="flex flex-col items-start gap-2">
            <div className="text-blue-700 flex flex-row items-center">
              <IconWithBackground icon={"FeatherGlobe"} size="large"  className="h-9 m-2 flex-none" />
              <a
                href={selectedProduct.link}
                target="_blank"
                className="whitespace-pre-wrap text-body font-body"
              >
                Go to website
              </a>
            </div>
            <div className="text-blue-700 flex flex-row items-center">
              <IconWithBackground icon={"FeatherCat"} size="large" className="h-9 m-2 flex-none" />
              <a
                href={selectedProduct.providerExternalLink}
                target="_blank"
                className="whitespace-pre-wrap text-body font-body"
              >
                Visit in Product Hunt
              </a>
            </div>
          </div>
          <Badge
            className="h-9 m-2 flex-none"
            variant="neutral"
            icon="FeatherArrowUpSquare"
          >
            {selectedProduct.votes.toString()}
          </Badge>
        </div>
      </div>
      {/* More data 1 */}
      <div className="flex flex-col md:flex-row items-start gap-2 relative">
        <LeadMagnet
          CTAText="Generate this content with IA!"
          DisclaimerText={
            "We are working in this feature right now ⚙️\nIf you want to be the first in know about our news, leave your best email here:"
          }
        />
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded border border-solid border-neutral-border bg-default-background p-6 shadow-default">
          <div className="flex w-full items-center gap-2">
            <IconWithBackground
              variant="neutral"
              size="large"
              icon="FeatherTarget"
            />
            <span className="text-heading-3 font-heading-3 text-default-font">
              Problem
            </span>
          </div>
          <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font blur-sm">
            Developers and engineers managing large language models (LLMs)
            struggle with observability, performance tracing, and effective
            management of prompts and evaluations. Lack of effective tools for
            tracing, evaluating, and managing prompts complicates the
            development and optimization of LLM applications.
          </span>
        </div>
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded bg-neutral-50 p-6">
          <div className="flex w-full items-center gap-2">
            <IconWithBackground
              variant="neutral"
              size="large"
              icon="FeatherLightbulb"
            />
            <span className="text-heading-3 font-heading-3 text-default-font">
              Solution
            </span>
          </div>
          <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font blur-sm">
            Tool is an open source LLM Engineering Platform designed to provide
            comprehensive tools for observability, tracing, evaluations, prompt
            management, and metrics, allowing users to debug and improve their
            LLM applications effectively.
          </span>
        </div>
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded border border-solid border-neutral-border bg-default-background p-6 shadow-default">
          <div className="flex w-full items-center gap-2">
            <IconWithBackground
              variant="neutral"
              size="large"
              icon="FeatherUsers2"
            />
            <span className="text-heading-3 font-heading-3 text-default-font">
              Customers
            </span>
          </div>
          <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font blur-sm">
            Developers and engineers working on applications involving large
            language models across various industries.
          </span>
        </div>
      </div>
      {/* More data 2 */}
      <div className="flex flex-col md:flex-row items-start gap-2">
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded bg-neutral-50 p-6">
          <div className="flex w-full items-center gap-2">
            <IconWithBackground
              variant="neutral"
              size="large"
              icon="FeatherTrophy"
            />
            <span className="text-heading-3 font-heading-3 text-default-font">
              Unique features
            </span>
          </div>
          <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font blur-sm">
            Open source flexibility, compatibility with any model or framework,
            and the ability to export all data differentiate Tool from other LLM
            platforms.
          </span>
        </div>
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded border border-solid border-neutral-border bg-default-background p-6 shadow-default">
          <div className="flex w-full items-center gap-2">
            <IconWithBackground
              variant="neutral"
              size="large"
              icon="FeatherTornado"
            />
            <span className="text-heading-3 font-heading-3 text-default-font">
              Alternatives
            </span>
          </div>
          <span className="h-full w-full grow shrink-0 basis-0 whitespace-pre-wrap text-body-bold font-body-bold text-default-font blur-sm">
            {
              "1. Weights & Biases\r\n2. TensorBoard\r\n3. Comet.ml\r\n4. MLflow\r\n5. Hugging Face Spaces"
            }
          </span>
        </div>
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded bg-neutral-50 p-6">
          <div className="flex w-full items-center gap-2">
            <IconWithBackground
              variant="neutral"
              size="large"
              icon="FeatherScale3D"
            />
            <span className="text-heading-3 font-heading-3 text-default-font">
              Market size
            </span>
          </div>
          <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font blur-sm">
            The global AI software market is projected to grow to $126 billion
            by 2025.
          </span>
        </div>
      </div>
    </div>
  );
}
