import Image from "next/image";

/** Toont een foto op hoogstens de echte pixelmaat. Niet oprekken. */
export default function HonestImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      sizes={`${width}px`}
      style={{ width, maxWidth: "100%", height: "auto" }}
    />
  );
}
