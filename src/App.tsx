// src/App.tsx
import { useState } from 'react';
import { Quiz } from './components/Quiz';
import { Timeline } from './components/Timeline';
import { DeviceDetector } from './components/DeviceDetector';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState<'quiz' | 'timeline'>('quiz');

  return (
    <>
      <DeviceDetector />
      <main>
        <div className="view-selector">
          <button
            className={`view-button ${currentView === 'quiz' ? 'active' : ''}`}
            onClick={() => setCurrentView('quiz')}
          >
            Que tan bien nos conoces 💕
          </button>
          <button
            className={`view-button ${currentView === 'timeline' ? 'active' : ''}`}
            onClick={() => setCurrentView('timeline')}
          >
            Nuestra Línea de Tiempo 📅
          </button>
        </div>

        {currentView === 'quiz' ? (
          <>
            <h1>Anniversary Quiz 💕</h1>
            <Quiz />
          </>
        ) : (
          <Timeline />
        )}
      </main>
    </>
  );
}

export default App;
