import Image from "next/image";

export default function Icon() {
  return (
    <Image
      className="ml-16"
      src="/gramedia-icon-2.png"
      width={200}
      height={500}
      alt="Gramedia icon"
    />
  );
}

export function Eye() {
  return (
    <Image
      className="absolute top-5 right-5"
      src="/eye.svg"
      width={20}
      height={20}
      alt="Eye icon"
    />
  );
}

export function EyeOff() {
  return (
    <Image
      className="absolute top-5 right-5"
      src="/eye-off.svg"
      width={20}
      height={20}
      alt="Eye-off icon"
    />
  );
}
