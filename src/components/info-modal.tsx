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
            <p>Company: Geeksynergy Technologies Pvt Ltd</p>
            <p>Address: Sanjayanagar, Bengaluru-56</p>
            <p>Phone: XXXXXXXXX09</p>
            <p>Email: XXXXXX@gmail.com</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
