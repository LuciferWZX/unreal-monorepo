import { ChatRole } from './ChatBaseType'

export type PayloadText = Array<{ role: ChatRole; content: string }>
export interface XunFeiParams {
  header: {
    app_id: string
    uid: string
  }
  parameter: {
    chat: {
      domain: 'general' | 'generalv2' | 'generalv3' | 'generalv3.5'
      /**
       * 取值范围 (0，1] ，默认值0.5
       * 核采样阈值。用于决定结果随机性，取值越高随机性越强即相同的问题得到的不同答案的可能性越高
       */
      temperature?: number
      /**
       * V1.5取值为[1,4096]
       * V2.0、V3.0和V3.5取值为[1,8192]，默认为2048。
       * 模型回答的tokens的最大长度
       */
      max_tokens?: number
      /**
       * 取值为[1，6],默认为4,从k个候选中随机选择⼀个（⾮等概率）
       */
      top_k?: number
    }
  }
  payload: {
    message: {
      /**
       * role：取值为[system,user,assistant]system用于设置对话背景，user表示是用户的问题，assistant表示AI的回复
       * content：所有content的累计tokens需控制8192以内
       */
      text: PayloadText
    }
  }
}
export enum ReplayStatus {
  First = 0,
  Middle = 1,
  Last = 2
}
export interface XunFeiData {
  header: {
    code: number //错误码，0表示正常，非0表示出错；详细释义可在接口说明文档最后的错误码说明了解
    message: 'Success' //会话是否成功的描述信息
    sid: string //会话的唯一id，用于讯飞技术人员查询服务端会话日志使用,出现调用错误时建议留存该字段
    status: ReplayStatus //会话状态，取值为[0,1,2]；0代表首次结果；1代表中间结果；2代表最后一个结果
  }
  payload: {
    choices: {
      status: ReplayStatus //文本响应状态，取值为[0,1,2]; 0代表首个文本结果；1代表中间文本结果；2代表最后一个文本结果
      seq: number //返回的数据序号，取值为[0,9999999]
      text: Array<{
        content: string
        role: ChatRole
        index: number
      }>
    }
    usage?: {
      text: {
        question_tokens: number //保留字段，可忽略
        prompt_tokens: number //包含历史问题的总tokens大小
        completion_tokens: number //回答的tokens大小
        total_tokens: number // prompt_tokens和completion_tokens的和，也是本次交互计费的tokens大小
      }
    }
  }
}
