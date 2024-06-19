import { Button } from "@/subframe";
import { useState } from "react";

export default function LeadMagnet() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const initialContent = (
    <Button className="p-6" onClick={() => changeStep(2)}>
      Generate this content with IA!
    </Button>
  );
  const [content, setContent] = useState(initialContent);
  const changeStep = (step: number) => {
    if (step === 1) {
      setContent(initialContent);
    } else if (step === 2) {
      setContent(
        <div className="flex flex-col items-center justify-center">
          <form onSubmit={() => handleSubmit()}>
            <h2 className="h-full w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
              We are working in that feature right now. If you want to be the
              first in know about our news, leave your best email here:
            </h2>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                console.log(e);
                setEmail(e.target.value);
              }}
              required
            />
            {message && <p>{message}</p>}
            <Button
              type="submit"
              className="p-6 m-6"
              // onClick={() => changeStep(1)}
            >
              Enviar
            </Button>
          </form>
        </div>
      );
    }
  };

  const handleSubmit = async () => {
    try {
      changeStep(1);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Correo enviado correctamente");
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("Error al enviar el correo");
    }
  };

  return (
    <div className="p-2 md:p-4 bg-white md:w-1/3 border-black border-2 rounded-sm absolute -left-3 top-28 z-10 md:left-1/3">
      {content}
    </div>
  );
}
