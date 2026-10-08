import Image, { type StaticImageData } from "next/image";

type Flavor = "classic" | "coconut" | "apple" | "pineapple";
export function CoffeeArt({ flavor }: { flavor: Flavor }) {
  return <div className={`coffee-art coffee-art--${flavor}`} role="img" aria-label={`Illustration of an iced ${flavor === "classic" ? "Americano" : `${flavor} Americano`} in an AMERICANO By AA glass`}>
    <div className="cup-shadow" /><div className="coffee-straw" />
    <div className="coffee-glass"><div className="coffee-liquid" /><div className="ice ice-one" /><div className="ice ice-two" /><div className="ice ice-three" /><div className="glass-brand">AMERICANO<br /><strong>By AA</strong><span>ENDLESS POSSIBILITIES</span></div></div>
    {flavor !== "classic" && <div className={`fruit fruit--${flavor}`} aria-hidden="true"><span /></div>}
  </div>;
}
type DrinkCardProps = { name: string; image: StaticImageData; description: string };
export function DrinkCard({ name, image, description }: DrinkCardProps) {
  return <article className="drink-card"><Image className="drink-photo" src={image} alt={name} placeholder="blur" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" /><h3>{name}</h3><p>{description}</p></article>;
}
