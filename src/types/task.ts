interface Task {
  id: number;
  title: string;
  description?: string;
  date: string;
  startedAt: string;
  endedAt: string;
  tag: TagId | null;
  labels: TaskLabel[];
}

interface TaskDto {
  title: string;
  description?: string;
  date: string;
  startedAt: string;
  endedAt: string;
}
