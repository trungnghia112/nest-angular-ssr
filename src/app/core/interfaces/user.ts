export interface User {
  id?: number;
  name?: string;
  email?: string;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date | null;
  token?: string;
  uid?: string;
  displayName?: string;
  photoURL?: string;
}
