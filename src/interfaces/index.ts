export interface Note {
  id: string;
  title: string;
  description: string;
  color: string;
  created_at: Date;
}
export type UpdatedNote = Omit<Note, "id" | "created_at">;
