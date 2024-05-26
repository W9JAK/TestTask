import React, { ReactNode } from 'react';
import { styled } from '../stitches.config';
import CloseButtonSvg from './CloseButton';
import woodImage from '../assets/wood.png';

const ModalOverlay = styled('div', {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '$background_blur',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 1000,
});

const ModalContent = styled('div', {
    borderRadius: '32px 32px 0 0',
    padding: '20px',
    width: '100%',
    height: '316px',
    textAlign: 'center',
    backgroundImage: `url(${woodImage})`,
    backgroundSize: 'cover',
    borderWidth: '2px 0 0 0',
    borderStyle: 'solid',
    borderColor: '$text_border_brown',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    position: 'relative',
});

const CloseButton = styled(CloseButtonSvg, {
    position: 'absolute',
    top: '-20px',
    right: '8vw',
    width: '36px',
    height: '40px',
    cursor: 'pointer',
});

interface ModalWrapperProps {
    children: ReactNode;
    onClose: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, onClose }) => {
    return (
        <ModalOverlay>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose} />
                {children}
            </ModalContent>
        </ModalOverlay>
    );
};

export default ModalWrapper;
