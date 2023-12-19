interface Task {
  id: number;
  title: string;
  description?: string;
  startedAt: string;
  endedAt: string;
  tag: TagId | null;
  labels: TaskLabel[];
}
