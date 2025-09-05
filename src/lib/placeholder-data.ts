import type { User, Group, AttendanceRecord } from './types';

export const users: User[] = [
  { id: 'user-1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', avatarUrl: 'https://picsum.photos/id/1/32/32' },
  { id: 'user-2', name: 'Bob Williams', email: 'bob@example.com', role: 'Member', avatarUrl: 'https://picsum.photos/id/2/32/32' },
  { id: 'user-3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Member', avatarUrl: 'https://picsum.photos/id/3/32/32' },
  { id: 'user-4', name: 'Diana Miller', email: 'diana@example.com', role: 'Member', avatarUrl: 'https://picsum.photos/id/4/32/32' },
  { id: 'user-5', name: 'Ethan Davis', email: 'ethan@example.com', role: 'Member', avatarUrl: 'https://picsum.photos/id/5/32/32' },
  { id: 'user-6', name: 'Fiona Garcia', email: 'fiona@example.com', role: 'Member', avatarUrl: 'https://picsum.photos/id/6/32/32' },
];

export const groups: Group[] = [
  { id: 'group-1', name: 'Engineering Team', memberIds: ['user-1', 'user-2', 'user-5'] },
  { id: 'group-2', name: 'Design Team', memberIds: ['user-3', 'user-4'] },
  { id: 'group-3', name: 'Marketing Team', memberIds: ['user-6'] },
];

const today = new Date();
const formatDate = (date: Date) => date.toISOString().split('T')[0];

export const attendanceRecords: AttendanceRecord[] = [
  { id: 'rec-1', userId: 'user-2', groupId: 'group-1', date: formatDate(today), status: 'present' },
  { id: 'rec-2', userId: 'user-5', groupId: 'group-1', date: formatDate(today), status: 'present' },
  { id: 'rec-3', userId: 'user-3', groupId: 'group-2', date: formatDate(today), status: 'absent' },
  { id: 'rec-4', userId: 'user-4', groupId: 'group-2', date: formatDate(today), status: 'present' },
  { id: 'rec-5', userId: 'user-6', groupId: 'group-3', date: formatDate(today), status: 'late' },
  
  // Yesterday's records
  { id: 'rec-6', userId: 'user-2', groupId: 'group-1', date: formatDate(new Date(today.setDate(today.getDate() - 1))), status: 'present' },
  { id: 'rec-7', userId: 'user-5', groupId: 'group-1', date: formatDate(new Date(today.setDate(today.getDate()))), status: 'absent' },
];

export const getHistoricalDataCSV = () => {
    const header = "userId,date,status\n";
    return attendanceRecords.reduce((csv, record) => {
        return csv + `${record.userId},${record.date},${record.status}\n`;
    }, header);
};
