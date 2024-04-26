import { Product } from "@/interfaces/product.interface";
import { Avatar, Badge, IconWithBackground } from "@/subframe";
import * as SubframeCore from "@subframe/core";


export default function ProductDetail({ product }: { product: Product | null }) {

if (!product) {
    return <div>Selecciona un producto! </div>;
  }

  return (
    <div className="overflow-auto flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded bg-neutral-50 pt-4 pr-4 pb-4 pl-4 FF4081">
    <div className="flex w-full items-start justify-end gap-4 pt-2 pr-2 pb-2 pl-2">
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center justify-center gap-2">
          <Avatar
            className="h-20 w-20 flex-none"
            variant="brand"
            size="large"
            image="https://res.cloudinary.com/subframe/image/upload/v1711417532/shared/ofdixj8whhbrmgahq506.png"
            square={false}
          >
            AB
          </Avatar>
          <span className="text-heading-1 font-heading-1 text-default-font">
            {product.title}
          </span>
        </div>
        <span className="text-heading-2 font-heading-2 text-subtext-color">
          +120 Resources for PH Launch Day
        </span>
        <span className="whitespace-pre-wrap text-body font-body text-default-font">
          {product.description}
        </span>
      </div>
      <div className="flex flex-col items-start gap-6 rounded border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
        <Badge
          className="h-9 w-16 flex-none"
          variant="neutral"
          icon="FeatherArrowUpSquare"
        >
          {product.votes} 
        </Badge>
        <div className="flex flex-col items-start gap-2 backgroundColor: #FF4081">
          <span className="text-body-bold font-body-bold text-default-font">
            Makers:
          </span>
          <div className="flex items-center gap-2">
            <SubframeCore.Icon
              className="text-body font-body text-default-font"
              name="FeatherUserSquare"
            />
            {/* TODO This is an avatar, not a profile link! */}
            <a href={product.author.link}>
            <span className="text-body font-body text-default-font">
              {product.author.nickname}
            </span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <SubframeCore.Icon
              className="text-body font-body text-default-font"
              name="FeatherUserSquare"
            />
            <span className="text-body font-body text-default-font">
              XX
            </span>
          </div>
          <div className="flex items-center gap-2">
            <SubframeCore.Icon
              className="text-body font-body text-default-font"
              name="FeatherUserSquare"
            />
            <span className="text-body font-body text-default-font">
              XX2
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-start gap-2">
      <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
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
        <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
          Developers and engineers managing large language models (LLMs)
          struggle with observability, performance tracing, and effective
          management of prompts and evaluations. Lack of effective tools
          for tracing, evaluating, and managing prompts complicates the
          development and optimization of LLM applications.
        </span>
      </div>
      <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded bg-neutral-50 pt-6 pr-6 pb-6 pl-6">
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
        <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
          Langfuse is an open source LLM Engineering Platform designed to
          provide comprehensive tools for observability, tracing,
          evaluations, prompt management, and metrics, allowing users to
          debug and improve their LLM applications effectively.
        </span>
      </div>
      <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
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
        <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
          Developers and engineers working on applications involving large
          language models across various industries.
        </span>
      </div>
    </div>
    <div className="flex items-start gap-2">
      <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded bg-neutral-50 pt-6 pr-6 pb-6 pl-6">
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
        <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
          Open source flexibility, compatibility with any model or
          framework, and the ability to export all data differentiate
          Langfuse from other LLM platforms.
        </span>
      </div>
      <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
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
        <span className="h-full w-full grow shrink-0 basis-0 whitespace-pre-wrap text-body-bold font-body-bold text-default-font">
          {
            "1. Weights & Biases\r\n2. TensorBoard\r\n3. Comet.ml\r\n4. MLflow\r\n5. Hugging Face Spaces"
          }
        </span>
      </div>
      <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 rounded bg-neutral-50 pt-6 pr-6 pb-6 pl-6">
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
        <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
          The global AI software market is projected to grow to $126
          billion by 2025.
        </span>
      </div>
    </div>
  </div>
  );
}