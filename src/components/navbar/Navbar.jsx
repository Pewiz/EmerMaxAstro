import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@heroui/react";

import { ChevronDown, EmerLogo, SearchIcon } from "./IconsNavbar";
import { IconHeartbeat, IconMilitaryRank, IconHeartCheck, IconBandage, IconFirstAidKit, IconLungs, IconHeartRateMonitor, IconShieldPlus, IconForklift } from '@tabler/icons-react'
import Cart from "./Cart.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      className="dark navbar colorNavbar"
      height={"6rem"}
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="navbar-toggle text-white"
        />
        <NavbarBrand>
          <EmerLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:gap-20 navbar-content"
        justify="center"
      >
        <NavbarItem>
          <Link
            className="hover:text-yellow-300 hover:opacity-1"
            color="foreground"
            underline="hover"
            href="#"
          >
            Nosotros
          </Link>
        </NavbarItem>
        <Dropdown className="dark backdrop-blur-xl colorNavbar text-white">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-medium text-foreground  active:opacity-disabled transition-opacity hover:text-yellow-300 hover:opacity-1"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Capacitacion
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Dropdown menu with description"
            variant="faded"
          >
            <DropdownSection showDivider title="Emergencias médicas">
              <DropdownItem 
                key="rcp" 
                description="RCP"
                startContent={<IconHeartbeat/>}
                >
              Reanimación cardiopulmonar básica 
              </DropdownItem>
              <DropdownItem
                key="stb"
                description="STB"
                startContent={<IconBandage/>}
              >
                Stop The Bleed 
              </DropdownItem>
              <DropdownItem 
                key="tecc" 
                description="TECC"
                startContent={<IconFirstAidKit/>}
              >
              Tactical Emergency Casualty Care 
              </DropdownItem>
              <DropdownItem
                key="mva"
                description="MVA"
                startContent={<IconLungs/>}
              >
                Manejo de la vía aérea 
              </DropdownItem>
              <DropdownItem
                key="svca"
                description="SVCA"
                startContent={<IconHeartRateMonitor/>}
              >
                Soporte Vital Cardiovascular Avanzado 
              </DropdownItem>
            </DropdownSection>
            <DropdownSection title="Otros cursos">
              <DropdownItem
                key="brigada-emergencia"
                startContent={<IconShieldPlus/>}
              >
                Conformación de brigada de emergencia
              </DropdownItem>
              <DropdownItem
                key="grua-horquilla"
                startContent={<IconForklift/>}
              >
                Operador de Grúa Horquilla 
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="dark backdrop-blur-xl colorNavbar text-white">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-medium text-foreground  active:opacity-disabled transition-opacity hover:text-yellow-300 hover:opacity-1"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Equipamiento
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Dropdown menu with description"
            variant="faded"
          >
            <DropdownSection>
              <DropdownItem 
                key="new" 
                description="Insumos médicos de la mejor calidad"
                startContent={<IconHeartbeat/>}
                >
                Médico
              </DropdownItem>
              <DropdownItem 
                key="copy" 
                description="Distribuidor oficial de Rhino Rescue"
                startContent={<IconMilitaryRank/>}
                >
                Táctico
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            className="hover:text-yellow-300 hover:opacity-1"
            color="foreground"
            underline="hover"
            href="#"
          >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Buscar producto..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <NavbarItem className="hidden lg:gap-20 navbar-content">
          <Button as={Link} color="primary" href="#" variant="flat">
            Iniciar Sesion
          </Button>
        </NavbarItem>
        <NavbarItem className="lg:gap-20 ">
          <Cart></Cart>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
