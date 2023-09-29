import moment from 'moment';

export const formatTaskTimestamp = (timestamp: number): string => moment.unix(timestamp).format('DD.MM.YYYY hh:mm');
