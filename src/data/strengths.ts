import {
  TargetIcon,
  CpuIcon,
  UsersIcon,
  LifeBuoyIcon,
  GlobeIcon,
  CodeIcon,
  SmartphoneIcon,
  BarChart3Icon,
  type LucideIcon } from
'lucide-react';

export interface Strength {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const strengths: Strength[] = [
{
  title: 'Business First',
  description:
  'We focus on solving real business problems through technology.',
  icon: TargetIcon
},
{
  title: 'Modern Technology',
  description:
  'We use modern development tools and scalable technologies.',
  icon: CpuIcon
},
{
  title: 'User Focused',
  description: 'We create simple and intuitive experiences for users.',
  icon: UsersIcon
},
{
  title: 'Long-Term Support',
  description: 'We aim to support businesses beyond the initial launch.',
  icon: LifeBuoyIcon
}];


export const capabilities: Strength[] = [
{
  title: 'Web Development',
  description: 'Fast, scalable and secure websites.',
  icon: CodeIcon
},
{
  title: 'Mobile Applications',
  description: 'Native-quality apps on Android and iOS.',
  icon: SmartphoneIcon
},
{
  title: 'Business Systems',
  description: 'Platforms that run daily operations.',
  icon: GlobeIcon
},
{
  title: 'Digital Growth',
  description: 'Visibility, traffic and conversion.',
  icon: BarChart3Icon
}];