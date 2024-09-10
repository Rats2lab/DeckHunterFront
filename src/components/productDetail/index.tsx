import { useProductContext } from "@/app/hooks/useProduct";
import { Avatar, Badge, IconWithBackground } from "@/subframe";
import LeadMagnet from "../leadMagnet";
import { ProductAttributeName } from "@/interfaces/product.interface";

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

  //Defining AI attributes objects

  const problemAttribute = selectedProduct.attributes.find(
    (attribute) =>
      attribute.attributeName === ProductAttributeName.PROBLEM
  );
  const solutionAttribute = selectedProduct.attributes.find(
    (attribute) => attribute.attributeName === ProductAttributeName.SOLUTION
  );
  const customersAttribute = selectedProduct.attributes.find(
    (attribute) => attribute.attributeName === ProductAttributeName.CUSTOMERS
  );

const uniqueFeaturesAttribute = selectedProduct.attributes.find(
    (attribute) =>
      attribute.attributeName === ProductAttributeName.UNIQUE_FEATURES
  );
  const alternativesAttribute = selectedProduct.attributes.find(
    (attribute) => attribute.attributeName === ProductAttributeName.ALTERNATIVES
  );
  const marketSizeAttribute = selectedProduct.attributes.find(
    (attribute) => attribute.attributeName === ProductAttributeName.MARKET_SIZE
  );

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
            ></Avatar>
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
              <IconWithBackground
                icon={"FeatherGlobe"}
                size="large"
                className="h-9 m-2 flex-none"
              />
              <a
                href={selectedProduct.link}
                target="_blank"
                className="whitespace-pre-wrap text-body font-body"
              >
                Go to website
              </a>
            </div>
            <div className="text-blue-700 flex flex-row items-center">
              <IconWithBackground
                icon={"FeatherCat"}
                size="large"
                className="h-9 m-2 flex-none"
              />
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
      {/* AI data 1 */}
      <div className="flex flex-col md:flex-row items-start gap-2 relative">
        {/* <LeadMagnet
          CTAText="Generate this content with IA!"
          DisclaimerText={
            "We are working in this feature right now ⚙️\nIf you want to be the first in know about our news, leave your best email here:"
          }
        /> */}
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
          <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold">
          {problemAttribute?.processedOutput ?? "No problemo"}
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
          <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold">
          {solutionAttribute?.processedOutput ?? "No solution found"}
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
          <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold">
          {customersAttribute?.processedOutput ?? "No customers detected"}
          </span>
        </div>
      </div>
      {/* AI data 2 */}
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
          <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold">
            {uniqueFeaturesAttribute?.processedOutput ?? "No unique features"}
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
          <span className="h-full w-full grow shrink-0 basis-0 whitespace-pre-wrap text-body-bold font-body-bold">
          {alternativesAttribute?.processedOutput ?? "No alternatives"}
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
          <span className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold ">
          {marketSizeAttribute?.processedOutput ?? "No market size"}
          </span>
        </div>
      </div>
    </div>
  );
}
