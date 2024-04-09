import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useModalStore from "@/hooks/useModalStore";

const InfoModal = () => {
  const { isOpen, onClose } = useModalStore();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl py-1 lg:text-3xl font-semibold text-gray-700">
            Company Info
          </DialogTitle>
          <DialogDescription className="p-3">
            <span className="mb-2 block">
              Company: Geeksynergy Technologies Pvt Ltd
            </span>
            <span className="mb-2 block">
              Address: Sanjayanagar, Bengaluru-56
            </span>
            <span className="mb-2 block">Phone: XXXXXXXXX09</span>
            <span className="mb-2 block">Email: XXXXXX@gmail.com</span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
