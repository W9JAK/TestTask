import React from 'react';
import { styled, theme } from '../stitches.config';
import TaskPendingIcon from '../assets/TaskPending.png';
import CompletedTaskIcon from '../assets/TaskCompleted.png';
import XpIcon from '../assets/XpIcon.png';
import RedArrowIcon from '../assets/RedArrow.png';
import ClockIcon from '../assets/ClockIcon.svg';
import CheckMark from '../assets/CheckMark.png';
import QuestDetailModal from './QuestDetailModal';

const QuestContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    marginBottom: '20px',
    borderRadius: '8px',
    position: 'relative',
    height: '50px',
    variants: {
        completed: {
            true: {
                border: `1px solid ${theme.colors.border_background_completed_quest}`,
                backgroundColor: '$background_completed_quest',
                boxShadow: `inset 0 3px 0 0 rgba(83, 86, 62, 0.5)`,
            },
            false: {
                backgroundColor: '$background_not_completed_quest',
                border: `1px solid ${theme.colors.border_background_not_completed_quest}`,
                boxShadow: `inset 0 3px 0 0 rgba(156, 76, 48, 0.5)`,
            },
        },
    },
});

const QuestIconWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '10px',
    position: 'relative',
});

const QuestIcon = styled('div', {
    width: '32px',
    height: '32px',
    position: 'relative',
});

const IconImage = styled('img', {
    width: '100%',
    height: '100%',
});

const ClockIconWrapper = styled('div', {
    position: 'absolute',
    top: '-20px',
    left: '50%',
    transform: 'translateX(-25%)',
    backgroundColor: '$background_time_quest',
    borderRadius: '10px',
    padding: '0px 6px 0px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
});

const ClockIconImage = styled('img', {
    width: '16px',
    height: '16px',
    marginRight: '5px',
});

const QuestDetails = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: '10px',
});

const QuestName = styled('div', {
    fontSize: '14px',
    fontWeight: 'bold',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    textOverflow: 'ellipsis',
    maxWidth: 'calc(100% - 10px)',
    marginBottom: '4px',
    variants: {
        completed: {
            true: {
                color: '$text_completed_quest',
            },
            false: {
                color: '$text_not_completed_quest',
            },
        },
    },
});

const QuestXP = styled('div', {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginRight: '3px',
});

const XpContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    padding: '1px 5px',
    borderRadius: '0 20px 20px 0',
    position: 'relative',
    variants: {
        completed: {
            true: {
                background: '$background_xp_completed_quest',
                border: `1px solid ${theme.colors.border_background_xp_completed_quest}`
            },
            false: {
                background: '$background_xp_not_completed_quest',
                border: `1px solid ${theme.colors.border_background_xp_not_completed_quest}`
            },
        },
    },
});

const XpIconImage = styled('img', {
    width: '28px',
    height: '28px',
    position: 'absolute',
    left: '-14px',
    top: '50%',
    transform: 'translateY(-50%)',
});

const XpText = styled('span', {
    marginLeft: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '$text',
    variants: {
        completed: {
            true: {
                '-webkit-text-stroke': `1px ${theme.colors.text_border_xp_completed_quest}`,
            },
            false: {
                '-webkit-text-stroke': `1px ${theme.colors.text_border_brown}`,
            },
        },
    }
});

const StatusIcon = styled('img', {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
});

interface QuestItemProps {
    name: string;
    xp: number;
    completed: boolean;
    time: string;
    description: string;
    active: boolean;
}

const QuestItem: React.FC<QuestItemProps> = ({ name, xp, completed, time, description, active }) => {
    const [showModal, setShowModal] = React.useState(false);

    const handleArrowClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <QuestContainer completed={completed}>
                <QuestIconWrapper>
                    {!completed && (
                        <ClockIconWrapper>
                            <ClockIconImage src={ClockIcon} alt="Clock Icon" />
                            {time}
                        </ClockIconWrapper>
                    )}
                    <QuestIcon>
                        <IconImage src={completed ? CompletedTaskIcon : TaskPendingIcon} alt="Task Icon" />
                    </QuestIcon>
                </QuestIconWrapper>
                <QuestDetails>
                    <QuestName completed={completed}>{name}</QuestName>
                </QuestDetails>
                <QuestXP>
                    <XpContainer completed={completed}>
                        <XpIconImage src={XpIcon} alt="XP" />
                        <XpText completed={completed}>{xp}k</XpText>
                    </XpContainer>
                </QuestXP>
                <StatusIcon src={completed ? CheckMark : RedArrowIcon} alt={completed ? "Completed" : "Pending"} onClick={handleArrowClick} />
            </QuestContainer>
            {showModal && <QuestDetailModal quest={{ name, xp, description, active }} onClose={handleCloseModal} />}
        </>
    );
};

export default QuestItem;
