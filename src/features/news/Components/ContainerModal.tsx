import { CloseButton, ContenedorModal, TarjetaModal } from '../styled';
import Close from '../../assets/close.png';
import { ReactNode } from 'react';

interface Props {
    onClose: () => void;
    children: ReactNode;
}

const ContainerModal = ({ onClose, children }: Props) => (
    <ContenedorModal>
        <TarjetaModal>
            <CloseButton onClick={onClose}>
                <img src={Close} alt="close-button" />
            </CloseButton>
            {children}
        </TarjetaModal>
    </ContenedorModal>
);

export default ContainerModal;