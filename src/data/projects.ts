export interface Project {
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const projectCategories = [
'All',
'Websites',
'Mobile Apps',
'Business Systems'];


export const projects: Project[] = [
{
  name: 'Drink n Drop',
  category: 'Websites',
  description:
  'An online beverage ordering and delivery platform with live menus, cart and order tracking — delivered alongside its companion mobile app.',
  image: "/b06e7f17-9ed4-4856-a547-d25d159051f9.jpg",

  featured: true
},
{
  name: 'Tourism Website',
  category: 'Websites',
  description:
  'A destination and tour package website built to showcase experiences and capture enquiries from international travellers.',
  image: "/707f8966-5544-468d-998c-f341a6a91ec4.jpg"

},
{
  name: 'Luminar Solar Energy',
  category: 'Websites',
  description:
  'A corporate website for a solar energy provider, presenting systems, projects and consultation requests.',
  image: "/6464cb9e-380c-4b0e-bbc4-b653a6c9d357.jpg"

},
{
  name: 'Dagmaster Tyre Distribution',
  category: 'Websites',
  description:
  'A B2B distribution website with a structured tyre catalogue, brand pages and dealer enquiry flow.',
  image: "/d3eaa45c-ff38-493d-8454-d5d3ad0ec4b2.jpg"

},
{
  name: 'Furniture Website',
  category: 'Websites',
  description:
  'A product-led furniture storefront with collection browsing, detailed product pages and order enquiries.',
  image: "/3221c1c2-d0d6-422d-b8c1-e37ba8201dce.jpg"

},
{
  name: 'Ferentix Construction',
  category: 'Websites',
  description:
  'A construction and engineering website built around completed projects, capabilities and client trust.',
  image: "/20b5e744-5e63-46df-8470-4b2e1fe8836a.jpg"

},
{
  name: 'Drink n Drop App',
  category: 'Mobile Apps',
  description:
  'A mobile ordering app for Android and iOS with product browsing, cart, checkout and delivery updates.',
  image: "/a829da03-fa87-4fb3-ad3c-1991a1b7a055.jpg"

},
{
  name: 'Self Ordering Application',
  category: 'Mobile Apps',
  description:
  'A tablet-based self-ordering application for restaurants, letting customers order directly to the kitchen.',
  image: "/f27b339c-89a2-4495-b8e5-62bda0173374.jpg"

},
{
  name: 'ERP Report Generator',
  category: 'Business Systems',
  description:
  'A reporting engine that turns ERP data into scheduled, filterable and exportable business reports.',
  image: "/1d230e28-463b-4f0d-9d68-c4cab6fe03b1.jpg"

},
{
  name: 'CRM Tool — Lakbima Group',
  category: 'Business Systems',
  description:
  'A custom CRM platform for Lakbima Group of Companies covering leads, customer records and team follow-ups.',
  image: "/4639f572-a983-4a91-9bd3-a216da426eee.jpg"

}];