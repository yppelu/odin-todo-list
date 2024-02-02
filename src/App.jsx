import { projects } from './helpers/exampleData.js';

import Menu from './components/Menu/Menu';

export default function App() {
  return (
    <Menu projects={projects} />
  );
}
