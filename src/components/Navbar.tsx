import useAuthContext from "@/hooks/useAuthContext";
import useModalStore from "@/hooks/useModalStore";
import { Info, LogOut } from "lucide-react";
import Icon from "./Icon";
import MobileMenu from "./mobile-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const { logout } = useAuthContext();
  const { onOpen } = useModalStore();

  return (
    <header className="inset-x-0 sticky top-0 bg-gray-100 px-3 md:px-6 xl:px-10 py-3 md:py-3.5 shadow-sm z-10 flex items-center justify-between">
      <div className="flex gap-1 items-center">
        <Icon className="md:w-10 md:h-10 h-8 w-8" />
        <h1 className="text-primary text-2xl md:text-3xl font-bold tracking-tight">
          Hoblist
        </h1>
      </div>
      <div className="md:flex gap-4 hidden">
        <Button onClick={onOpen}>
          Company Info
          <Info className="w-4 h-4 ml-2" />
        </Button>
        <Button onClick={logout}>
          Logout
          <LogOut className="w-4 h-4 ml-2" />
        </Button>
      </div>
      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;
