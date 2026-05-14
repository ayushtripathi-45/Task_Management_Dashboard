import React from 'react';
import { Task } from '../api';
import TaskCard from './TaskCard';

interface TaskBoardProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
}

const columns: { id: Task['status']; title: string; color: string }[] = [
  { id: 'todo',        title: 'To Do',       color: '#94a3b8' },
  { id: 'in-progress', title: 'In Progress',  color: '#f59e0b' },
  { id: 'completed',   title: 'Completed',    color: '#10b981' },
];

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks, onEdit, onDelete, onStatusChange }) => {
  const byStatus = (status: Task['status']) => tasks.filter(t => t.status === status);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
      {columns.map(col => (
        <div key={col.id} className="glass" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: '600', color: col.color }}>{col.title}</h2>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.65rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: '500' }}>
              {byStatus(col.id).length}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minHeight: '80px' }}>
            {byStatus(col.id).length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: 'rgba(148,163,184,0.4)', fontSize: '0.85rem' }}>No tasks</div>
            ) : (
              byStatus(col.id).map(task => (
                <TaskCard key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} onStatusChange={onStatusChange} />
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
