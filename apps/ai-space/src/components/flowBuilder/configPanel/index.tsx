import { FC, memo } from 'react';
import { Panel } from '@xyflow/react';
import { cn } from '@wzx-unreal/jb-design';
import styles from './index.module.css';
import useFlowStore from '@/components/flowBuilder/_stores/useFlowStore.ts';
import { useShallow } from 'zustand/react/shallow';
import { match } from 'ts-pattern';

const ConfigPanel: FC = () => {
  const selectedNode = useFlowStore(useShallow(state => state.selectedNode))
  console.log("选中的key：",selectedNode);
  return (
    <Panel position={'top-right'} className={cn(styles.ai_node_config_panel)}>
      {match(selectedNode).with(undefined,()=>null)
        .otherwise(_selectedNode=>{
          const {data}=_selectedNode
          return(
            <>
              <header className={styles.ai_node_config_panel_header}>
                {data.title}
              </header>
            </>
          )
        })}
    </Panel>
  );
};

export default memo(ConfigPanel);
