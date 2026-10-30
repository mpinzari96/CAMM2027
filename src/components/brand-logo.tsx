import { conferenceData } from "@/lib/conference-data";

type BrandLogoVariant = "nav" | "hero" | "footer";

const variants: Record<
  BrandLogoVariant,
  { width: number; height: number; className: string }
> = {
  nav: {
    width: 44,
    height: 44,
    className: "h-10 w-10 sm:h-11 sm:w-11 rounded-[10px]",
  },
  footer: {
    width: 40,
    height: 40,
    className: "h-10 w-10 rounded-[10px]",
  },
  hero: {
    width: 512,
    height: 512,
    className:
      "w-[132px] sm:w-[176px] lg:w-[208px] h-auto max-w-[70vw] rounded-[18px] sm:rounded-[22px]",
  },
};

export function BrandLogo({
  variant,
  priority = false,
}: {
  variant: BrandLogoVariant;
  priority?: boolean;
}) {
  const { width, height, className } = variants[variant];

  return (
    <picture>
      <source srcSet={conferenceData.logoWebp} type="image/webp" />
      <img
        src={conferenceData.logo}
        alt="CAMM Conference 2027"
        width={width}
        height={height}
        className={`${className} object-cover brand-mark`}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}
