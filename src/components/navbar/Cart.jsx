import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Badge
  } from "@heroui/react";

  import { CartIcon } from "./IconsNavbar";
  import { IconShoppingCart } from "@tabler/icons-react";
  export default function Cart() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <>
        <Button isIconOnly variant="light" onPress={onOpen}>
            <Badge color="danger" content={5} size="sm" shape="circle" className="m-[3px]">
               <IconShoppingCart></IconShoppingCart>
            </Badge>
        </Button>
        <Drawer
          isOpen={isOpen}
          motionProps={{
            variants: {
              enter: {
                opacity: 1,
                x: 0,
                duration: 0.3,
              },
              exit: {
                x: 100,
                opacity: 0,
                duration: 0.3,
              },
            },
          }}
          onOpenChange={onOpenChange}
        >
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1">Custom Motion Drawer</DrawerHeader>
                <DrawerBody>
                  <p>This drawer has custom enter/exit animations.</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                    quam.
                  </p>
                </DrawerBody>
                <DrawerFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  