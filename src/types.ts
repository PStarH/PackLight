export interface PackingItem {
  id: string;
  name: string;
  checked: boolean;
  category: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  image: string;
  items: PackingItem[];
}