import { FC } from 'react';
import { MilestoneStatus } from '@/content/roadmap-data';
import IconCompleted from '../icons/roadmap/IconCompleted';
import IconInProgress from '../icons/roadmap/IconInProgress';
import IconPlanned from '../icons/roadmap/IconPlanned';

interface StatusIconProps {
  status: MilestoneStatus;
}

const StatusIcon: FC<StatusIconProps> = ({ status }) => {
  switch (status) {
    case 'completed':
      return <IconCompleted />;
    case 'in-progress':
      return <IconInProgress />;
    case 'planned':
      return <IconPlanned />;
    default:
      return null;
  }
};

export default StatusIcon;