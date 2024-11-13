import { ReactNode } from "react";

interface PercentageItemProps {
  title: string;
  value: number;
  icon: ReactNode;
}

const PercentageItem = ({ title, value, icon }: PercentageItemProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-white bg-opacity-[3%] p-2">{icon}</div>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
        <p className="text-sm font-bold">{value}%</p>
      </div>
    </div>
  );
};

export default PercentageItem;
