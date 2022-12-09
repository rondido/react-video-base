import React from 'react'
import { useStore } from './TodoStore'

export default function TodoLiStats() {
    const {
        percentCompleted,
        totalNum,
        totalCompletedNum,
        totalUncompletedNum
    } = useStore(state=> state.todoListStatsState);
    const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
}

