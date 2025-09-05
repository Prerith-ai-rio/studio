export type User = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Member';
  avatarUrl: string;
};

export type Group = {
  id: string;
  name: string;
  memberIds: string[];
};

export type AttendanceStatus = 'present' | 'absent' | 'late';

export type AttendanceRecord = {
  id: string;
  userId: string;
  groupId: string;
  date: string;
  status: AttendanceStatus;
};
