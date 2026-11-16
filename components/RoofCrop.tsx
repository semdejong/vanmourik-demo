import { content } from "@/content";

const SRC_W = 559;
const SRC_H = 144;
/** Dakvenster in foto-kop.jpg, kolom 220 t/m 390. Niet groter dan de bronpixels. */
const CROP_X = 220;
const CROP_W = 170;

export default function RoofCrop() {
  const { dakwerk } = content;
  return (
    <figure className="mt-10">
      <div className="relative overflow-hidden" style={{ maxWidth: CROP_W, aspectRatio: `${CROP_W} / ${SRC_H}` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/foto-kop.jpg"
          alt={dakwerk.alt}
          width={SRC_W}
          height={SRC_H}
          className="absolute top-0 max-w-none"
          style={{
            height: "100%",
            width: `${(SRC_W / CROP_W) * 100}%`,
            left: `${(-CROP_X / CROP_W) * 100}%`,
          }}
        />
      </div>
      <figcaption>{dakwerk.caption}</figcaption>
    </figure>
  );
}
