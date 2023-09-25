import ProfileImage from "@/src/assets/profile.png"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import Image from "next/image"

const Sidebar = () => {
    return (
        <div className="h-screen basis-56 bg-primary-light p-2">
            <div className="w-full">
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton width={"100%"} textAlign={"left"} paddingX={"1rem"} paddingY={"0.5rem"} color={"white"} isActive={isOpen} as={Button} leftIcon={<Image className="w-8 h-8" alt="None" src={ProfileImage} />} rightIcon={<ChevronDownIcon />}>
                                <div>
                                    <p>0x1ae1....6c1c</p>
                                    <p>$1522.27</p>
                                </div>
                            </MenuButton>
                            <MenuList marginX={"2rem"} color={"white"}>
                                <MenuItem>Download</MenuItem>
                                <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Sidebar