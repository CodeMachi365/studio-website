import Image from "next/image";

/**
 * How to use:
 *
 * case 1, provide src, alt, and aspectRatio:
 * <ResponsiveImage
 *   src="/images/your-image.jpg"
 *   alt="Your image"
 *   aspectRatio="aspect-square"
 * />
 *
 * case 2, provide src, alt, and wrap with a div with specific width and height:
 * <div className="w-[200px] h-[200px]">
 *   <ResponsiveImage src="/images/your-image.jpg" alt="Your image" />
 * </div>
 */
export default function ResponsiveImage(props: {
  readonly src: string;
  readonly alt: string;
  readonly aspectRatio?: "aspect-square" | "aspect-video";
  readonly imageStyle?: unknown;
  readonly className?: string;
  readonly objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}) {
  const {
    src,
    alt,
    aspectRatio,
    imageStyle,
    className = "",
    objectFit = "cover",
  } = props;

  const objectFitClass = `object-${objectFit}`;

  return (
    <div
      className={["relative", aspectRatio ?? "w-full h-full", className]
        .join(" ")
        .trim()}
    >
      <Image
        className={["rounded-[20px]", objectFitClass].join(" ").trim()}
        style={imageStyle}
        src={src}
        alt={alt}
        fill
      />
    </div>
  );
}
