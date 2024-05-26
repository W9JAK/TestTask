import React from 'react';
import { globalStyles } from './stitches.config';
import QuestList from './components/QuestList';

const App: React.FC = () => {
    globalStyles();
    return (
        <div>
            <QuestList />
        </div>
    );
};

export default App;
