type FooterData = {
  title: string;
  icon: any;
  value: number;
  unit: string;
};

type FooterDataTypes = {
  left: FooterData[];
  right: FooterData[];
};

type FooterItemProps = {
  item: {
    title: string;
    icon: any;
    value: number;
    unit: string;
  };
};

export type { FooterItemProps, FooterDataTypes };
