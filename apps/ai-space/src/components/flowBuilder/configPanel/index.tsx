import { FC, memo, useEffect, useState } from 'react';
import { Panel } from '@xyflow/react';
import { Close, cn,Space,Toggle } from '@wzx-unreal/jb-design';
import styles from './index.module.css';
import useFlowStore from '@/components/flowBuilder/_stores/useFlowStore.ts';
import { useShallow } from 'zustand/react/shallow';
import { match } from 'ts-pattern';
import { CustomFlowNodeType } from '@/components/flowBuilder/_constants';
import startIcon from '../_icons/start.svg'
const ConfigPanel: FC = () => {
  const selectedNode = useFlowStore(useShallow(state => state.selectedNode))
  const isNodeObject = !!selectedNode
  const [open,setOpen]=useState<boolean>(false)
  const closeConfigPanel=()=>{
    setOpen(false)
    useFlowStore.setState({selectedNode:undefined})
  }
  useEffect(() => {
    if (isNodeObject){
      setOpen(true)
    }
  }, [isNodeObject]);
  return match(open)
    .with(false,()=>null)
    .otherwise(()=>{
      return (
        <Panel position={'top-right'} className={cn(styles.ai_node_config_panel)}>
          {match(selectedNode).with(undefined,()=>null)
            .otherwise(_selectedNode=>{
              const {data,type}=_selectedNode
              const icon=match(type)
                .with(CustomFlowNodeType.start,()=>{
                  return startIcon
                }).otherwise(()=>undefined)
              return(
                <>
                  <header className={styles.ai_node_config_panel_header}>
                <span className={styles.ai_node_config_panel_icon}>
                  <img src={icon} alt={'icon'} />
                </span>
                    <label className={styles.ai_node_config_panel_header_label}>
                      {data.title}
                    </label>
                    <Space>
                      <Toggle onClick={closeConfigPanel} pressed={false} value={"close"}>
                        <Close/>
                      </Toggle>
                    </Space>
                  </header>
                </>
              )
            })}
        </Panel>
      );
    })

};

export default memo(ConfigPanel);
