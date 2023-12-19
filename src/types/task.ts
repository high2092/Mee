interface Task {
  id: number;
  title: string;
  startedAt: string;
  endedAt: string;
  tag: TagId | null;
  labels: TaskLabel[];
}
