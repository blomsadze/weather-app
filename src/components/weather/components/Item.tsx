import { FC } from 'react';

type FooterItemProps = {
  item: {
    title: string;
    icon: any;
    value: number;
    unit: string;
  };
};

const FooterItem: FC<FooterItemProps> = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="flex justify-between items-center">
      <Icon className="mr-2" />
      <span>{`${item.title} ${item.value} ${item.unit}`}</span>
    </div>
  );
};

export default FooterItem;
