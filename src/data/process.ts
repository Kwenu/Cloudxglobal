export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
{
  number: '01',
  title: 'Discover',
  description: 'Understand your business, audience and goals.'
},
{
  number: '02',
  title: 'Plan',
  description: 'Define the technology, strategy and user experience.'
},
{
  number: '03',
  title: 'Design',
  description: 'Create the visual identity and digital experience.'
},
{
  number: '04',
  title: 'Build',
  description: 'Develop, test and refine the solution.'
},
{
  number: '05',
  title: 'Launch',
  description: 'Deploy the product and support its growth.'
}];