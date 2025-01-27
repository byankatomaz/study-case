import Image from "next/image";
import Logo from "@/assets/logo.png";
import IconProfile from "@/assets/icon-user.svg";
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";
import { Container } from "../Section/Container";

export function Header() {
  return (
    <header className="flex items-center w-full h-20 bg-primary-orange">
      <Container>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-14">
            <div className="h-32 w-32 flex items-center">
              <Image src={Logo} alt="Logo" />
            </div>
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Para você" />
              </li>
              <li>
                <ItemMenu name="Para empresas" />
              </li>
              <li>
                <ItemMenu name="Serviços" />
              </li>
              <li>
                <ItemMenu name="Ajuda" />
              </li>
            </ul>
          </div>
          <Search />
        </div>
      </Container>

      <button className="flex items-center justify-center gap-16 bg-primary-blue h-20 w-[20%]">
        <Image src={IconProfile} alt="Icon Profile" />
        <span className="text-white font-bold">Acessar Conta</span>
      </button>
    </header>
  );
}
