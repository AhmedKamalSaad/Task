"use client";
import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SettingsIcon, Text } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Card = () => {
  const [language, setLanguage] = useState("ar");
  const notify = () => toast.success("تم تخزين المعلومات بنجاح");
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleSave = () => {
    notify();
    setDialogOpen(false);
  };

  const title =
    language === "ar"
      ? {
          dir: "rtl",
          lang: "ar",
          placeholder: "عنوان حالة الموقع المغلق",
          defaultValue: "المتجر قيد الصيانة",
        }
      : { dir: "ltr", lang: "en", placeholder: "عنوان حالة الموقع المغلق" };
  const message =
    language === "ar"
      ? {
          dir: "rtl",
          lang: "ar",
          placeholder: "نص حالة الموقع المغلق",
          defaultValue:
            "عذراً عزيزي العميل، المتجر حالياً قيد الصيانة و سنعاود العمل خلال فترة وجيزة",
        }
      : { dir: "ltr", lang: "en", placeholder: "نص حالة الموقع المغلق" };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger className="overflow-hidden">
        <div className="flex items-center justify-center flex-col border p-4  text-center">
          <SettingsIcon className="text-teal-400 mb-2" size={30} />
          <h1 className="font-bold text-gray-500">وضع الصيانه</h1>
          <p className="font-bold text-gray-300">إغلاق المتجر بشكل مؤقت</p>
        </div>
      </DialogTrigger>
      <DialogContent >
        <DialogHeader className="p-6 bg-teal-400">
          <DialogTitle className="text-right text-black/70">
            وضع الصيانه
          </DialogTitle>
        </DialogHeader>
        <div className="p-2">
          <div className="flex justify-between mb-4">
            <Switch />
            <p className="text-right ">
              بعد تفعيل وضع الصيانة ستتمكن لوحدك من الدخول للمتجر والعمل على
              تجهيزه، بينما العملاء ستظهر لهم صفحة الصيانة. للاطلاع عليها قم
              بالدخول على متجرك من متصفح آخر أو بتسجيل الخروج من لوحة التحكم
            </p>
          </div>

          <div>
            <h1 className="text-right font-bold text-black/70 mb-2">
              العنوان الرئيسي للصيانة
            </h1>
            <div className="w-full relative flex border  px-1 items-center flex-row-reverse">
              <Text className="opacity-50" size={30} />
              <Input
                {...title}
                className="h-full border-none focus-visible:border-none"
              />

              <Selecting language={language} setLanguage={setLanguage} />
            </div>
          </div>
          <div>
            <h1 className="text-right font-bold text-black/70 mb-2">
              رسالة الصيانة
            </h1>
            <div className="w-full  flex border  items-center flex-row-reverse relative ">
              <Text className="opacity-50" size={30} />
              <textarea
                {...message}
                className=" w-full overflow-y-auto pl-28 border-none focus-visible:ring-0 focus-visible:outline-none px-2 py-1 text-sm rounded"
              ></textarea>
              <div className="absolute top-0 left-0">
                <Selecting language={language} setLanguage={setLanguage} />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className=" p-2">
          <DialogClose asChild>
            <div>
              <Button className="text-xl px-4 bg-teal-400 rounded-none text-teal-800" onClick={handleSave}>حفظ</Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Dialog>
  );
};

export default Card;

const Selecting = ({
  language,
  setLanguage,
}: {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Select onValueChange={(value) => setLanguage(value)} value={language}>
      <SelectTrigger className="w-[100px]">
        <SelectValue defaultValue={language} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar">
          <div className="flex gap-2">
            <p>العربية</p>
          </div>
        </SelectItem>
        <SelectItem value="en">
          <div className="flex gap-2">
            <p>English</p>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
