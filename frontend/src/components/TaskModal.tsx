import React, { useState, useEffect } from 'react';
import { Task } from '../api';
import { X } from 'lucide-react';

interface TaskModalProps {
  task: Task | null;
  onClose: () => void;
  onSave: (task: Partial<Task>) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, onSave }) => {
  const [formData, setFormData] = useState<Partial<Task>>({
    title: '', description: '', priority: 'medium', status: 'todo', dueDate: ''
  });

  useEffect(() => {
    if (task) {
      setFormData({ ...task, dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '' });
    } else {
      setFormData({ title: '', description: '', priority: 'medium', status: 'todo', dueDate: '' });
    }
  }, [task]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '1rem' }}>
      <div className="glass" style={{ width: '100%', maxWidth: '480px', padding: '2rem', borderRadius: '20px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700' }}>{task ? 'Edit Task' : 'New Task'}</h2>
          <button onClick={onClose} className="btn-icon"><X size={22} /></button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Title *</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="Enter task title..." />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={3} placeholder="Add details..." />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Priority</label>
              <select name="priority" value={formData.priority} onChange={handleChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Status</label>
              <select name="status" value={formData.status} onChange={handleChange}>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Due Date</label>
            <input type="date" name="dueDate" value={String(formData.dueDate ?? '')} onChange={handleChange} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
            <button type="submit" style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: 'white',
              padding: '0.7rem 1.5rem', borderRadius: '8px', fontWeight: '600',
              border: 'none', cursor: 'pointer', fontSize: '0.9rem'
            }}>
              {task ? 'Update Task' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
