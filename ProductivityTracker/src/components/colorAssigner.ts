import { Activity } from "../api/getActivities";

export const colorAssign = (record: Activity) => {
  switch (record.category) {
      case 'Music':
          return 'border-green-400';
          break;
      case 'Programming':
          return 'border-purple-400';
          break;
      case 'Language':
          return 'border-blue-400';
          break;
      case 'Exercise':
          return 'border-orange-400';
          break;
      default:
          return 'Error, no category..'
  }
}