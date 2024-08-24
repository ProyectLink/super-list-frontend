import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

// Aquí, reemplaza CarouselApi con EmblaCarouselType si es el tipo correcto.
const images = [
  "https://imgs.search.brave.com/pNSC98dDG1-qh4Sz74IvPTbK8ugeI4ciGs_nN9boiqs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91bnNw/bGFzaC5jb20vYXNz/ZXRzL2FwaS9hcHBs/aWNhdGlvbnMvZ29v/Z2xlLXdlYi1zdG9y/aWVzLWVkaXRvci1m/ZjE0NTI4MzZiN2Nj/OGMxODc0ZDNjMzE5/MDlhNDE0NWI0MTk4/OTMxOTI0MTM4ZjQw/NTQ2MWQ2NTgzNDg0/ZjcyLmpwZw",
  "/placeholder.svg?height=400&width=600&text=Imagen+2",
  "/placeholder.svg?height=400&width=600&text=Imagen+3",
  "/placeholder.svg?height=400&width=600&text=Imagen+4",
  "/placeholder.svg?height=400&width=600&text=Imagen+5",
];

const SLIDE_DURATION = 5000; // 5 segundos por diapositiva

interface CarouselApi {
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
  scrollNext: () => void;
  scrollPrev: () => void;
  selectedScrollSnap: () => number;
}

const CaruselImages = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          api.scrollNext();
          return 0;
        }
        return Math.min(oldProgress + 100 / (SLIDE_DURATION / 100), 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [api]);

  const handleNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Barra de progreso en la parte superior */}
      <div className="relative w-full h-4 bg-gray-200">
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-300">
          <Progress value={progress} className="h-full bg-blue-500" />
        </div>
      </div>

      <Carousel
        setApi={(carouselApi: CarouselApi) => setApi(carouselApi)}
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent
                    className="flex aspect-video items-center justify-center p-0 cursor-pointer"
                    onClick={handleNext}
                    role="button"
                    tabIndex={0}
                    aria-label={`Slide ${index + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CaruselImages;
