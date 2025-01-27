import { Container } from "./Container";
import { Item } from "../ItemsList/Item";

import Image from "next/image";

import PhoneIcon from "@/assets/icon-phone.svg";
import Solutions from "@/assets/icon-solutions.svg"
import Options from "@/assets/icon-options.svg"
import Card from "@/assets/icon-card.svg"
import ImagePhone from "@/assets/phone.png"



export function SectionServices() {
  return (
    <section className="relative w-full h-[965px] ">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">
            serviços exclusivos
          </span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6 ">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">
            Veja como você pode cuidar das suas finanças pelo app For You de forma
            segura, rápida e o melhor, no conforto da sua casa.
          </p>
          <ul className="flex flex-col items-start gap-9">
            <Item img={PhoneIcon} text="Acompanhar sua conta, fazer transferências e pagamento de onde estiver"/>
            <Item img={Solutions} text="Soluções de empréstimos e renegociação para organizar suas finanças"/>
            <Item img={Options} text="Diversas opções de investimentos, de acordo com o seu perfil de investidor"/>
            <Item img={Card} text="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual"/>
          </ul>
        </div>
      </Container>
      <div className="absolute top-0 right-0 h-full w-[32%] bg-gray-phone flex items-center">
        <Image src={ImagePhone} alt="Image phone" className="translate-x-[-50%]"/>
      </div>
    </section>
  );
}
