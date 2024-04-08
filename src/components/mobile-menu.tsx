import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Icon from "./Icon";
import { Button } from "./ui/button";
import useAuthContext from "@/hooks/useAuthContext";
import useModalStore from "@/hooks/useModalStore";

const MobileMenu = () => {
  const { logout } = useAuthContext();
  const { onOpen } = useModalStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Menu className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center py-4 border-b border-primary">
          <Icon className="h-10 w-10" />
          <h1 className="text-primary text-3xl font-bold tracking-tight">
            Hoblist
          </h1>
        </div>
        <div className="flex flex-col gap-3 py-6">
          <Button variant={"link"} onClick={onOpen}>
            Company Info
          </Button>
          <Button variant={"link"} onClick={logout}>
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
