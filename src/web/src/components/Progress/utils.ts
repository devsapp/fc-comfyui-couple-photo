import {
  ComfyUIProgress,
  ComfyUIProgressNode,
  ComfyUIPrompt,
  ComfyUIPromptNode,
} from '@/utils/api';

export function getPrevious(node: ComfyUIPromptNode): string[] {
  return Array.from(
    new Set(
      Object.values(node.inputs)
        .filter((item) => Array.isArray(item) && item.length == 2)
        .map((item) => item[0])
    )
  );
}

export function getTotalProgress(
  prompt: ComfyUIPrompt,
  progress: ComfyUIProgress
) {
  // 构建节点映射
  const nodeMap = Object.entries(prompt).reduce(
    (pre, [id, node]) => ({
      ...pre,
      [id]: {
        id,
        previous: getPrevious(node),
        node,
        progress: progress?.[id],
        done: false,
      },
    }),
    {} as Record<
      string,
      {
        id: string;
        previous: string[];
        node: ComfyUIPromptNode;
        progress: ComfyUIProgressNode;
        done: boolean;
      }
    >
  );

  // 递归标记节点为已完成
  const markNodeAsDone = (id: string) => {
    if (!nodeMap?.[id] || nodeMap?.[id]?.done) return;

    for (const pre of nodeMap[id].previous) {
      markNodeAsDone(pre);
    }

    nodeMap[id].done = true;
  };

  // 标记已完成的节点
  for (const item of Object.values(nodeMap)) {
    if ((item.progress?.max || 0) > 0) {
      // 当前节点正在执行，跳过
      for (const p of item.previous) {
        markNodeAsDone(p);
      }
    }

    if (
      item.progress?.max === item.progress?.value &&
      (item.progress?.max || 0) > 0
    ) {
      markNodeAsDone(item.id);
    }
  }

  // 计算总进度
  const unit = 1 / Object.keys(nodeMap).length;
  let precent = 0;
  let currentNode = '';
  let currentPrecent = 0;
  for (const item of Object.values(nodeMap)) {
    if (item.done) {
      precent += unit;
    } else {
      if ((item.progress?.max || 0) === 0) {
        // 当前节点未执行，跳过
      } else {
        // 当前节点执行中
        precent +=
          ((item.progress?.value || 0) / (item.progress?.max || 1)) * unit;

        currentNode = `${item.node?._meta?.title} - ${item.id}`;
        currentPrecent =
          (item.progress?.value || 0) / (item.progress?.max || 1);
      }
    }
  }

  return { precent, currentNode, currentPrecent };
}
