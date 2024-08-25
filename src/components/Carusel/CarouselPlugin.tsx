import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import mostrarSaldo from "../../../public/img/mostrarSaldo.webp"; // Ruta correcta

// Array of image URLs
const images = [
  mostrarSaldo,
  "/path/to/image2.jpg",
  "/path/to/image3.jpg",
  "/path/to/image4.jpg",
  "/path/to/image5.jpg",
];

const CarouselPlugin = () => {
  const autoplay = Autoplay({ delay: 2000, stopOnInteraction: true });

  return (
    <div className="relative">
      <Carousel
        plugins={[autoplay]}
        className="w-full"
        onMouseEnter={() => autoplay.stop()}
        onMouseLeave={() => autoplay.reset()}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-4 sm:p-5 md:p-6 lg:p-8">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
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

export default CarouselPlugin;
