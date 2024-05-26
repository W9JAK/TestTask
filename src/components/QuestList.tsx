import React from 'react';
import { styled } from '../stitches.config';
import TopSection from './TopSection';
import TaskHeader from './TaskHeader';
import QuestHeader from './QuestHeader';
import QuestItem from './QuestItem';

const quests = [
    { name: 'Veeeeeeeeeeeeeeeeeeeeeeery long quest name', xp: 999, completed: true, time: '13h 59m', description: 'Some description for this', active: true },
    { name: 'Long quest name', xp: 999, completed: true, time: '13h 59m', description: 'Some description for this quest', active: true },
    { name: 'Подпишись на телеграм канал', xp: 999, completed: false, time: '13h 59m', description: 'Подпишись на телеграм канал “Название канала” наших партнеров', active: false },
    { name: 'Very long quest name', xp: 999, completed: false, time: '13h 59m', description: 'Some description for this quest', active: false },
    { name: 'Quest name', xp: 999, completed: false, time: '13h 59m', description: 'Some description for this quest', active: false },
];



const PageContainer = styled('div', {
    backgroundColor: '$background',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
});

const ContentContainer = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px',
});

const QuestList: React.FC = () => {
    const [filter, setFilter] = React.useState<'all' | 'completed'>('all');
    const filteredQuests = filter === 'all' ? quests : quests.filter(q => q.completed);
    const totalXp = quests.filter(q => q.completed).reduce((sum, quest) => sum + quest.xp, 0);
    const formattedTotalXp = `${totalXp}k`;

    return (
        <PageContainer>
            <TopSection />
            <ContentContainer>
                <TaskHeader />
                <QuestHeader totalXp={formattedTotalXp} filter={filter} setFilter={setFilter} style={{ marginBottom: '20px' }} />
                {filteredQuests.map((quest, index) => (
                    <QuestItem
                        key={index}
                        name={quest.name}
                        xp={quest.xp}
                        completed={quest.completed}
                        time={quest.time}
                        description={quest.description}
                        active={quest.active}
                    />
                ))}
            </ContentContainer>
        </PageContainer>
    );
};

export default QuestList;

