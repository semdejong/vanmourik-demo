const SRC_W = 559;
const SRC_H = 144;

/** Uitsnede uit de kopstrook, nooit groter dan de bronpixels. */
export default function StripCrop({
  x,
  width,
  alt,
  caption,
}: {
  x: number;
  width: number;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="relative overflow-hidden" style={{ maxWidth: width, aspectRatio: `${width} / ${SRC_H}` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/foto-kop.jpg"
          alt={alt}
          width={SRC_W}
          height={SRC_H}
          className="absolute top-0 max-w-none"
          style={{
            height: "100%",
            width: `${(SRC_W / width) * 100}%`,
            left: `${(-x / width) * 100}%`,
          }}
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
