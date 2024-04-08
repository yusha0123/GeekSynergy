import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Info, LogOut, Menu } from "lucide-react";
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
          <div
            className="relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group focus:outline-none hover:bg-gray-300 text-gray-600"
            onClick={onOpen}
          >
            <Info className="w-4 h-4" />
            <span className="overflow-hidden transition-all ml-3 flex-1">
              Company Info
            </span>
          </div>
          <div
            className="relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group focus:outline-none hover:bg-gray-300 text-gray-600"
            onClick={logout}
          >
            <LogOut className="w-4 h-4" />
            <span className="overflow-hidden transition-all ml-3 flex-1">
              Logout
            </span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
