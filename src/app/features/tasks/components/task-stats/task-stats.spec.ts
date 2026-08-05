import { describe, it, expect, beforeEach } from 'vitest';
import { TaskStatsComponent } from './task-stats';
import { TaskStore } from '../../../../core/store/task.store';

// Tests are basic and isolated: they verify computed values from a mock store.
class MockTaskStore {
  private _tasks = [] as any[];
  tasks = () => this._tasks;
  completedTasks = () => this._tasks.filter(t => t.completed);
  pendingTasks = () => this._tasks.filter(t => !t.completed);

  setTasks(tasks: any[]) {
    this._tasks = tasks;
  }
}

describe('TaskStatsComponent', () => {
  let component: TaskStatsComponent;
  let mockStore: MockTaskStore;

  beforeEach(() => {
    mockStore = new MockTaskStore();

    // Create an instance of the component but replace the injected store with the mock.
    // Since the component uses Angular DI in runtime, instantiate and then overwrite the private field.
    component = new TaskStatsComponent();
    // @ts-ignore - override private store for test
    (component as any).store = mockStore as unknown as TaskStore;
  });

  it('calculates totals correctly when there are no tasks', () => {
    mockStore.setTasks([]);

    expect(component.totalTasks()).toBe(0);
    expect(component.completedTasks()).toBe(0);
    expect(component.pendingTasks()).toBe(0);
    expect(component.completionRate()).toBe(0);
  });

  it('calculates totals and completion rate correctly', () => {
    mockStore.setTasks([
      { id: 1, completed: true },
      { id: 2, completed: false },
      { id: 3, completed: true }
    ]);

    expect(component.totalTasks()).toBe(3);
    expect(component.completedTasks()).toBe(2);
    expect(component.pendingTasks()).toBe(1);
    expect(component.completionRate()).toBe(Math.round((2 / 3) * 100));
  });
});
