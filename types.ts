
export interface NavItem {
  label: string;
  href: string;
}

export interface PillarCard {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
