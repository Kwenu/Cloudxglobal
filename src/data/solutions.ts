import { publicAsset } from "../utils/publicAsset";

export interface Solution {
  title: string;
  description: string;
  image: string;
  points: string[];
}

export const solutions: Solution[] = [
{
  title: 'Digital Presence',
  description: 'Websites, landing pages and digital branding.',
  image: publicAsset("144c31b4-9622-4dc0-adc0-7bce827c1d9d.jpg"),

  points: ['Corporate websites', 'Landing pages', 'Brand systems']
},
{
  title: 'Business Technology',
  description: 'Custom systems, dashboards and automation.',
  image: publicAsset("d9bb4bf1-23bd-4c4b-a5c0-059c39e26acc.jpg"),

  points: ['Internal platforms', 'Admin dashboards', 'Workflow automation']
},
{
  title: 'Digital Growth',
  description: 'Marketing, SEO and digital customer engagement.',
  image: publicAsset("8c02706c-01e6-40e5-8767-6c5c8c432975.jpg"),

  points: ['Search visibility', 'Paid campaigns', 'Content engagement']
}];