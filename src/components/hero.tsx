import { cn } from "../lib/utils";
import { DotPattern } from "./magicui/dot-pattern";
import { TextAnimate } from "./magicui/text-animate";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col w-full h-auto  md:first-letter py-24 md:py-32 gap-10 relative  md:px-24">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="flex flex-col gap-2 z-10">
        <div className="flex flex-wrap justify-center items-center gap-x-2">
          <TextAnimate
            animation="blurInUp"
            as="h1"
            by="character"
            className="text-3xl font-semibold text-center text-black md:text-5xl"
          >
            Converta investimentos em
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            as="span"
            by="character"
            className="text-3xl font-semibold text-center text-orange-600 md:text-5xl"
          >
            crescimento
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            as="span"
            by="character"
            className="text-3xl font-semibold text-center text-black md:text-5xl"
          >
            real para o seu
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            as="span"
            by="character"
            className="text-3xl font-semibold text-center text-orange-600 md:text-5xl"
          >
            negócio
          </TextAnimate>
        </div>
        <p className=" md:text-xl text-center">
          especialista em gestão de tráfego e Growth Hacking. Minha missão é
          conectar o público certo ao seu negócio.
        </p>

        <Button className="rounded-md w-min p-3 bg-orange-600 px-8 mx-auto hover:bg-orange-700">
          Saiba Mais
        </Button>
      </div>
    </section>
  );
}
