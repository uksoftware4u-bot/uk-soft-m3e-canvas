/** The company mark, shared by the live editor and its loading shell. */
const LOGO_SRC = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/brand/uk-soft-logo.png`;

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <img
      src={LOGO_SRC}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      draggable={false}
      style={{ display: "block", flex: "0 0 auto", objectFit: "contain" }}
    />
  );
}
