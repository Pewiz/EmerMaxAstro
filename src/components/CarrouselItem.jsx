import {Card, CardHeader, CardFooter, Image, Button} from "@heroui/react";

export default function CarrouselItem({title, topTitle, description, url_img}) {
  return (
      <Card radius="none" className="h-[700px]">
        <CardHeader className="absolute z-10 top-5 left-5 flex-col !items-start !h-full pr-5 justify-center">
          <p className="text-tiny text-white/60 uppercase font-bold">{topTitle}</p>
          <h4 className="text-white font-medium text-4xl">{title}</h4>
          <p className="text-white max-w-2xl mt-5">{description}</p>
          <Button className="mt-10 text-sm w-28 text-white bg-blue-600 hover:bg-blue-800 border border-blue-800" radius="full">Ver Curso</Button>        
          </CardHeader>
        <img
          alt="Card background"
          className="z-1 w-full h-full object-cover brightness-[0.4]"
          src={url_img}
        />
      </Card>
  );
}