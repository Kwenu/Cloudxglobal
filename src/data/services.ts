import {
  MonitorSmartphoneIcon,
  SmartphoneIcon,
  LayoutDashboardIcon,
  PenToolIcon,
  MegaphoneIcon,
  TrendingUpIcon,
  type LucideIcon } from
'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
{
  title: 'Website Development',
  description: 'Modern, responsive and high-performance websites.',
  icon: MonitorSmartphoneIcon
},
{
  title: 'Mobile App Development',
  description:
  'Custom Android and iOS applications designed around your users.',
  icon: SmartphoneIcon
},
{
  title: 'Business Systems',
  description:
  'Custom dashboards, management platforms and business automation.',
  icon: LayoutDashboardIcon
},
{
  title: 'UI/UX Design',
  description:
  'Modern digital experiences that are simple, intuitive and engaging.',
  icon: PenToolIcon
},
{
  title: 'Digital Marketing',
  description:
  'Social media, content, advertising and digital growth solutions.',
  icon: MegaphoneIcon
},
{
  title: 'SEO & Digital Growth',
  description:
  'Strategies designed to improve visibility and online performance.',
  icon: TrendingUpIcon
}];