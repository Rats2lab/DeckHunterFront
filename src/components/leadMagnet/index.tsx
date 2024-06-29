import { Button } from "@/subframe";
import { disconnect } from "process";
import { FormEvent, useState } from "react";

export default function LeadMagnet({CTAText, DisclaimerText}: any) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado de recargar la página
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Mail sent properly!");
        setStep(3);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("Error, try again.");
    }
  };

  let content;
  switch (step) {
    case 1:
      content = (
        <Button className="p-6" onClick={() => setStep(step + 1)}>
          {CTAText}
        </Button>
      );
      break;
    case 2:
      content = (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-heading-3 font-heading-3 text-default-font whitespace-pre-wrap">
             {DisclaimerText}
            </span>
            <input
              className="border-2 border-solid border-neutral-border p-2"
              required
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {message && <p>{message}</p>}
            <Button type="submit" className="p-2">
              Send
            </Button>
          </div>
        </form>
      );
      break;
    case 3:
      content = (
        <div>
          <span className="text-heading-3 font-heading-3 text-default-font">
            Thanks! We&apos;ll be in touch 🤙
          </span>
        </div>
      );
      break;
  }
  return (
    <div className="p-4 flex items-center justify-center md:p-4 bg-orange-200 md:w-1/3 border-black border-1 rounded-sm absolute left-0 right-0 m-auto top-28 z-10 ">
      {content}
    </div>
  );
}
