export interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  category: 'hair' | 'nails' | 'skin' | 'packages';
  image: string;
  popular?: boolean;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  image: string;
  vibe: string;
  specialty?: string;
  topPick?: boolean;
}

export interface BookingState {
  step: number;
  selectedService: Service[];
  selectedStylist: Stylist | null;
  selectedDate: string | null;
  selectedTime: string | null;
}

export interface FeedItem {
  type: 'image' | 'video' | 'quote';
  title?: string;
  category?: string;
  img?: string;
  badge?: string;
  text?: string;
  user?: string;
  avatar?: string;
}

export interface QuizOption {
  text: string;
  vibe: string;
  img?: string;
  color?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizResult {
  title: string;
  desc: string;
  service: string;
  img: string;
}
