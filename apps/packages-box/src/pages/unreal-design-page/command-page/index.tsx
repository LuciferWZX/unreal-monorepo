import { FC } from 'react';
import { UnrealCommand } from '@wzx-unreal/unreal-design';

const CommandPage: FC = () => {
  return (
    <div style={{ flex: 1, padding: 20 }}>
      <UnrealCommand placeholder={'Type a command or search...'} />
    </div>
  );
};
export default CommandPage;
