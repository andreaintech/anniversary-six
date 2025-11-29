// src/App.tsx
import { Quiz } from './components/Quiz';
import { DeviceDetector } from './components/DeviceDetector';

function App() {
  return (
    <>
      <DeviceDetector />
      <main>
        <h1>Anniversary Quiz 💕</h1>
        <Quiz />
      </main>
    </>
  );
}

export default App;
