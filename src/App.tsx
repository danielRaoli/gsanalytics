import icon from "../public/gsicon.png";
import logopreta from "../public/logo-gs-branco.png";
import beneficioimage from "../public/beneficios.jpg";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import {
  ChartNoAxesCombined,
  Handshake,
  LaptopMinimalCheck,
  LucideIcon,
  SmartphoneNfc,
  Siren,
  PiggyBank,
  SquareActivity,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { FaInstagram, FaPhoneVolume, FaWhatsapp } from "react-icons/fa";

import { GoPaperAirplane } from "react-icons/go";
import Hero from "./components/hero";

interface Servico {
  icon: LucideIcon;
  service: string;
  description: string;
}

interface Beneficio {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

function App() {
  const servicos = [
    {
      icon: Handshake,
      service: "Otimização de conversao",
      description:
        "Transforme visitantes em clientes com funis estratégicos e páginas otimizadas.",
    },
    {
      icon: LaptopMinimalCheck,
      service: "Gestão de Tráfego Pago",
      description:
        "Campanhas no Google, Facebook e Instagram para atrair clientes qualificados.",
    },
    {
      icon: ChartNoAxesCombined,
      service: "Análise e Escalabilidade",
      description:
        "Acompanhamento de métricas para maximizar o retorno sobre o investimento.",
    },
    {
      icon: SquareActivity,
      service: "Técnicas de Growth Hacking",
      description:
        "Estratégias criativas para alavancar seu crescimento e melhorar resultados rapidamente.",
    },
  ] as Servico[];

  const beneficios = [
    {
      id: "01",
      icon: Siren,
      title: "Atrair mais clientes qualificados",
      description: "Conectamos sua marca ao público certo.",
    },
    {
      id: "02",
      icon: SmartphoneNfc,
      title: "Aumentar a visibilidade",
      description:
        "Posicionamos sua empresa para ser vista por quem realmente importa.",
    },
    {
      id: "03",
      icon: PiggyBank,
      title: "Maximizar o ROI",
      description:
        "Garantimos que seu investimento traga resultados concretos e lucrativos.",
    },
    {
      id: "04",
      icon: ChartNoAxesCombined,
      title: "Escalar o crescimento",
      description:
        "Utilizando dados, inovação e criatividade, alcançamos novos patamares para o seu negócio.",
    },
  ] as Beneficio[];

  const faq = [
    {
      pergunta: "Como funciona a gestão de tráfego?",
      resposta:
        "Gerencio campanhas pagas e orgânicas para atrair o público certo e aumentar suas conversões.",
    },
    {
      pergunta: "O que é Growth Hacking?",
      resposta:
        "É uma metodologia criativa e orientada por dados para acelerar o crescimento de negócios.",
    },
    {
      pergunta: "Quanto devo investir em tráfego pago?",
      resposta:
        "O orçamento varia conforme seus objetivos e o mercado. Avaliamos juntos o melhor custo-benefício.",
    },
    {
      pergunta: "Em quanto tempo vejo resultados?",
      resposta:
        "Os prazos variam, mas estratégias de tráfego pago podem gerar resultados rápidos, enquanto o orgânico exige um pouco mais de tempo.",
    },
  ];

  const formSchema = z.object({
    username: z.string().trim().min(2).max(50, {
      message: " o nome do cliente deve ter entre 2 e 50 caracteres",
    }),
    email: z.string().trim().min(1, { message: "Envie um email valido" }),
    telefone: z
      .string()
      .trim()
      .min(11, { message: "Envie um numero de telefone valido" }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      telefone: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <main className="h-full">
        <header className="flex flex-col space-y-3 w-full px-10 md:px-20 py-4 justify-between bg-transparent  items-center md:flex-row ">
          <img src={icon} alt="gs analytics icon" className="h-14" />
          <ul className="flex gap-4">
            <li>
              <a href="#servicos" className="text-orange-500  md:text-xl">
                Serviços
              </a>
            </li>
            <li>
              <a href="#sobre" className="text-orange-500  md:text-xl">
                Sobre
              </a>
            </li>
            <li>
              <a href="#faq" className="text-orange-500  md:text-xl">
                Faq
              </a>
            </li>
            <li>
              <a href="#contato" className="text-orange-500  md:text-xl">
                Contato
              </a>
            </li>
          </ul>
        </header>
        <Hero />
        <section
          id="servicos"
          className="bg-neutral-100 h-auto p-4 w-full md:px-20  py-10"
        >
          <div className="w-full rounded-xl bg-orange-600 p-4 flex flex-col h-full justify-center md:p-10 ">
            <div className="flex flex-col md:flex-row w-full items-center md:gap-10">
              <div className="h-full flex flex-col gap-2 md:gap-4 md:w-[50%]">
                <img
                  src={logopreta}
                  alt="logo Gs analytics"
                  className="h-auto w-24 md:w-40 mx-auto"
                />
                <h2 className="text-white text-3xl md:text-4xl font-semibold text-center ">
                  Soluções sob medida para o crescimento do seu negócio
                </h2>
                <p className="text-center text-black text-lg">
                  Combinando estratégias de tráfego pago, otimização e técnicas
                  avançadas de Growth Hacking, ofereço soluções personalizadas
                  para cada etapa do seu funil de vendas.
                </p>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-10 mt-10 md:w-[50%] align-middle content-center">
                {servicos.map((servico) => (
                  <Card className="w-auto p-4 py-10">
                    <CardContent className="p-0 flex flex-col justify-center items-center space-y-3">
                      <servico.icon className="text-orange-600" size={40} />

                      <span className="text-center text-orange-600 font-semibold">
                        {servico.service}
                      </span>
                      <p className="text-center">{servico.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <p className="text-center text-white mt-10">
              Descubra como essas estratégias podem transformar seu negócio!
            </p>
          </div>
        </section>
        <section
          id="sobre"
          className="px-4 py-8 md:flex md:px-20 gap-10 md:items-center"
        >
          <div className="md:w-[50%]">
            <h2 className="text-3xl font-semibold text-center">
              O que você ganha ao trabalhar com a<br />
              <span className="text-orange-600">GS Analytics</span>?
            </h2>
            <p className="text-center">
              Cada estratégia que desenvolvo é pensada para trazer resultados
              reais e escaláveis. Aqui está como posso ajudar sua empresa a
              crescer
            </p>
            <img
              src={beneficioimage}
              alt=""
              className="w-full rounded-xl my-4 shadow-md"
            />
          </div>

          <div className="flex flex-col gap-6 md:w-[50%]">
            {beneficios.map((beneficio) => (
              <Card className="w-full p-4 shadow-md bg-gray-100">
                <CardContent className="flex gap-2 items-center p-0 w-full justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    {beneficio.id}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-center">
                      {beneficio.title}
                    </h3>
                    <p className="text-center">{beneficio.description}</p>
                  </div>
                  <beneficio.icon size={80} className="text-orange-600" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section id="faq" className="bg-orange-600 p-4 w-full md:flex md:p-20">
          <div className="w-full bg-neutral-100 rounded-2xl p-4 md:flex md:justify-center md:items-center gap-10 md:p-14">
            <div className="w-full md:w-[50%] flex  flex-col">
              {faq.map((pergunta) => (
                <Accordion type="single" collapsible className="flex flex-col">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-orange-600">
                      {pergunta.pergunta}
                    </AccordionTrigger>
                    <AccordionContent>{pergunta.resposta}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>

            <div className="w-full md:w-[50%] flex flex-col items-center justify-center space-y-2 mt-10 md:mt-0">
              <h2 className="text-3xl text-Black font-bold text-center mb-10">
                Tire suas dúvidas sobre{" "}
                <span className="text-orange-600"> Growth Hacking</span> e
                <span className="text-orange-600"> Gestão de Tráfego</span>
              </h2>
              <p className="md:text-xl text-center font-semibold">
                Ainda tem dúvidas? Estou aqui para ajudar!
              </p>
              <Button className="text-white bg-orange-600 mx-auto">
                Entrar em Contato
              </Button>
            </div>
          </div>
        </section>
        <section
          id="contato"
          className="bg-orange-600 px-4 py-10 md:flex md:p-20 items-center gap-10"
        >
          <div className="w-full md:w-[50%]">
            <h2 className="text-white text-3xl md:text-5xl mb-4  font-semibold text-center">
              Quer resultados reais? Vamos conversar!
            </h2>
            <p className="text-center font-semibold md:text-xl">
              Entre em contato para uma análise personalizada e comece a escalar
              seus resultados agora mesmo.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-full md:w-[50%]"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Mauricio Ricardo" {...field} />
                    </FormControl>
                    <FormMessage className="text-black" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="cliente@email.com" {...field} />
                    </FormControl>
                    <FormMessage className="text-black" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="74912345678" {...field} />
                    </FormControl>
                    <FormMessage className="text-black" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="bg-white text-orange-700 ">
                Entrar em Contato
                <GoPaperAirplane className="-rotate-12" />
              </Button>
            </form>
          </Form>
        </section>
        <footer
          id="contato"
          className="bg-orange-700 p-4 flex gap-4 md:p-20 flex-col md:flex-row  md:relative  md:items-start md:justify-center"
        >
          <div className="flex-1 flex flex-col items-center gap-2">
            <img src={logopreta} alt="" className="w-32" />
            <div className="flex gap-1 items-center">
              <FaPhoneVolume className="text-white" />
              <span className="text-white">(74) 9917-3640</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-center h-full flex-1">
            <span className="text-white text-center font-semibold">SOCIAL</span>
            <div className="flex justify-center gap-3">
              <a
                className="hover:text-[#d8ad5e]"
                href="https://www.instagram.com/gsanalytics_brasil/"
                target="_blank"
              >
                <FaInstagram
                  className="hover:text-[#d8ad5e] transition duration-300 text-white"
                  size={40}
                />
              </a>
              <a
                className="hover:text-[#d8ad5e] transition duration-300 text-white"
                href="https://api.whatsapp.com/send?phone=557499173640&text=Ol%C3%A1"
                target="_blank"
              >
                <FaWhatsapp size={40} />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center  flex-1">
            <span className="text-white text-center font-semibold">MENU</span>
            <a
              href="#sobre"
              className="text-white hover:text-[#d8ad5e] transition duration-300 text-center"
            >
              sobre
            </a>
            <a
              href="#servicos"
              className="text-white hover:text-[#d8ad5e] transition duration-300 text-center"
            >
              serviços
            </a>
            <a
              href="#contato"
              className="text-white hover:text-[#d8ad5e] transition duration-300 text-center"
            >
              contato
            </a>
          </div>

          <span className="text-white text-center text-xs md:absolute bottom-0">
            Brothers Company Copyright ©2024
          </span>
        </footer>
      </main>
    </>
  );
}

export default App;
