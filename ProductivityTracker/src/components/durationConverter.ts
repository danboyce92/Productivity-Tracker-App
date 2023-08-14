import { Option } from "./ActivitiesInput";

export const valueConverter = (option: Option) => {
  switch (option.value) {
    case '15mins':
      return 0.25;
      break;
    case '30mins':
      return .5;
      break;
    case '45mins':
      return .75;
      break;
    case '1hr':
      return 1;
      break;
    case '1hr,15min':
      return 1.25;
      break;
    case '1hr,30min':
      return 1.5;
      break;
    case '1hr,45min':
      return 1.75;
      break;
    case '2hr':
      return 2;
      break;
    
    default:
      return 0;
  }
}