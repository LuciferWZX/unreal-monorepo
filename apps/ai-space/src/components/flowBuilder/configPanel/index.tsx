import { FC } from 'react';
import { Panel } from '@xyflow/react';
import { cn } from '@wzx-unreal/jb-design';
import styles from './index.module.css';

const ConfigPanel: FC = () => {
  return (
    <Panel position={'top-right'} className={cn(styles.ai_node_config_panel)}>
      xx
    </Panel>
  );
};
export default ConfigPanel;
