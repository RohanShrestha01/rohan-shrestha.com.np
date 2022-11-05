const frontend = [
  { icon: 'vscode-icons:file-type-html', language: 'HTML5' },
  { icon: 'vscode-icons:file-type-css', language: 'CSS3' },
  { icon: 'logos:javascript', language: 'JavaScript' },
  { icon: 'logos:typescript-icon', language: 'TypeScript' },
  { icon: 'logos:react', language: 'ReactJS' },
  { icon: 'logos:nextjs-icon', language: 'NextJS' },
  { icon: 'astro', language: 'Astro' },
];

const backend = [
  { icon: 'logos:nodejs-icon', language: 'NodeJS' },
  { icon: 'express', language: 'Express' },
  { icon: 'logos:mysql-icon', language: 'MySQL' },
  { icon: 'mongodb', language: 'MongoDB' },
];

const others = [
  { icon: 'logos:tailwindcss-icon', language: 'Tailwind' },
  { icon: 'logos:sass', language: 'SASS' },
  { icon: 'logos:material-ui', language: 'Material UI' },
  { icon: 'react-query', language: 'React Query' },
  { icon: 'logos:redux', language: 'Redux' },
  { icon: 'logos:react-router', language: 'React Router' },
];

export default [
  { title: 'Frontend', list: frontend },
  { title: 'Backend', list: backend },
  { title: 'Other Libraries', list: others },
];
