import React, { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask, Task } from './api';
import TaskBoard from './components/TaskBoard';
import TaskModal from './components/TaskModal';
import { PlusCircle, Layout, RefreshCw } from 'lucide-react';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (err: any) {
      setError('Could not connect to server. Make sure the backend is running on port 5000.');
      console.error('Failed to fetch tasks', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreateOrUpdate = async (taskData: Partial<Task>) => {
    try {
      if (editingTask) {
        await updateTask(editingTask._id, taskData);
      } else {
        await createTask(taskData);
      }
      await loadTasks();
      setIsModalOpen(false);
      setEditingTask(null);
    } catch (err) {
      console.error('Failed to save task', err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      await loadTasks();
    } catch (err) {
      console.error('Failed to delete task', err);
    }
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const stats = {
    total: tasks.length,
    todo: tasks.filter(t => t.status === 'todo').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <header className="glass" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '12px', padding: '10px', display: 'flex' }}>
              <Layout size={24} color="white" />
            </div>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: '700', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Task Dashboard
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Manage your workflow efficiently</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={loadTasks} className="btn-icon" title="Refresh" style={{ padding: '0.65rem' }}>
              <RefreshCw size={18} />
            </button>
            <button
              onClick={() => { setEditingTask(null); setIsModalOpen(true); }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white', padding: '0.65rem 1.25rem', borderRadius: '10px',
                fontWeight: '600', fontSize: '0.875rem', border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(59,130,246,0.4)'
              }}
            >
              <PlusCircle size={18} />
              New Task
            </button>
          </div>
        </header>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total', value: stats.total, color: '#3b82f6' },
            { label: 'To Do', value: stats.todo, color: '#94a3b8' },
            { label: 'In Progress', value: stats.inProgress, color: '#f59e0b' },
            { label: 'Completed', value: stats.completed, color: '#10b981' },
          ].map(stat => (
            <div key={stat.label} className="glass" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '1.5rem', color: '#fca5a5', fontSize: '0.9rem' }}>
            ⚠️ {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '16rem' }}>
            <div style={{ width: '3rem', height: '3rem', borderRadius: '9999px', border: '3px solid transparent', borderTopColor: '#3b82f6', borderBottomColor: '#8b5cf6', animation: 'spin 1s linear infinite' }} />
          </div>
        ) : (
          <TaskBoard
            tasks={tasks}
            onEdit={openEditModal}
            onDelete={handleDelete}
            onStatusChange={async (id, status) => {
              await updateTask(id, { status });
              await loadTasks();
            }}
          />
        )}
      </div>

      {isModalOpen && (
        <TaskModal
          task={editingTask}
          onClose={() => { setIsModalOpen(false); setEditingTask(null); }}
          onSave={handleCreateOrUpdate}
        />
      )}
    </div>
  );
}

export default App;
