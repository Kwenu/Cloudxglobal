export interface Role {
  title: string;
  type: string;
  location: string;
  level: string;
  description: string;
  skills: string[];
}

export const openRoles: Role[] = [
{
  title: 'Frontend Developer',
  type: 'Full-time',
  location: 'Piliyandala / Hybrid',
  level: 'Mid-level',
  description:
  'Build responsive, high-performance interfaces for client websites and business platforms.',
  skills: ['React', 'TypeScript', 'Tailwind CSS']
},
{
  title: 'Backend Developer',
  type: 'Full-time',
  location: 'Piliyandala / Hybrid',
  level: 'Mid-level',
  description:
  'Design APIs, databases and integrations behind our ERP, CRM and ordering systems.',
  skills: ['Node.js', 'PHP / Laravel', 'MySQL']
},
{
  title: 'Mobile App Developer',
  type: 'Full-time',
  location: 'Piliyandala / Remote',
  level: 'Mid-level',
  description:
  'Develop Android and iOS applications from design handover through store release.',
  skills: ['Flutter', 'React Native', 'REST APIs']
},
{
  title: 'UI/UX Designer',
  type: 'Full-time',
  location: 'Piliyandala / Hybrid',
  level: 'Junior – Mid',
  description:
  'Shape product flows, wireframes and polished interfaces for web and mobile projects.',
  skills: ['Figma', 'Design systems', 'Prototyping']
},
{
  title: 'Software Engineering Intern',
  type: 'Internship',
  location: 'Piliyandala',
  level: 'Trainee',
  description:
  'Work alongside our developers on live client projects with mentoring from day one.',
  skills: ['JavaScript', 'Git', 'Eagerness to learn']
}];


export const careerBenefits = [
'Real client projects from your first month',
'Mentoring directly from the founding team',
'Modern stack, no legacy maintenance work',
'Flexible hybrid and remote arrangements'];