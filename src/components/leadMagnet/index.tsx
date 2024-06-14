import { Button, TextField } from "@/subframe";
import { useState } from "react";

export default function LeadMagnet() {
  const [step, setStep] = useState(1);
  const [content, setContent] = useState(
    <Button className="p-6 m-6 md:w-full" onClick={() => changeStep(2)}>
      ¡Genera el contenido que falta con IA!
    </Button>
  );
  const changeStep = (step: number) => {
    if (step === 1) {
      setContent(
        <Button className="p-6" onClick={() => changeStep(2)}>
          ¡Genera el contenido que falta con IA!
        </Button>
      );
    } else if (step === 2) {
      setContent(
        <div className="flex flex-col items-center justify-center">
          <h2 className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
            Estamos trabajando en esta funcionalidad. Sí quieres ser el primero
            en enterarte de nuestras novedades, deja tu correo aquí:
          </h2>
          <TextField content="Escribe algo..." aria-placeholder="Escribe tu email" className="p-6 m-6" />
          <Button className="p-6 m-6" onClick={() => changeStep(1)}>
            Enviar
          </Button>
        </div>
      );
    }
  };

  return (
    <div className="p-4 bg-white md:w-1/3 border-black border-2 rounded-sm absolute -left-3 top-28 z-10 md:left-1/3">
      {content}
    </div>
  );
}
