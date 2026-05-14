import React from 'react';
import { Task } from '../api';
import { Edit2, Trash2, Clock, CheckCircle, Circle, PlayCircle } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
}

const priorityStyle: Record<string, { bg: string; color: string }> = {
  low:    { bg: 'rgba(16,185,129,0.15)',  color: '#6ee7b7' },
  medium: { bg: 'rgba(245,158,11,0.15)', color: '#fcd34d' },
  high:   { bg: 'rgba(239,68,68,0.15)',  color: '#fca5a5' },
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, onStatusChange }) => {
  const p = priorityStyle[task.priority] ?? priorityStyle.medium;

  return (
    <div
      style={{
        background: 'rgba(30,41,59,0.5)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        padding: '1rem',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
        <span style={{ background: p.bg, color: p.color, fontSize: '0.7rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {task.priority}
        </span>
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          <button onClick={() => onEdit(task)} className="btn-icon" title="Edit"><Edit2 size={14} /></button>
          <button onClick={() => onDelete(task._id)} className="btn-icon" title="Delete" style={{ color: '#ef4444' }}><Trash2 size={14} /></button>
        </div>
      </div>

      {/* Title */}
      <h3 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.4rem' }}>{task.title}</h3>
      {task.description && (
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as any }}>
          {task.description}
        </p>
      )}

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.65rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {task.dueDate ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            <Clock size={12} />
            {new Date(task.dueDate).toLocaleDateString()}
          </div>
        ) : <span />}

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button onClick={() => onStatusChange(task._id, 'todo')} title="To Do"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: task.status === 'todo' ? '#94a3b8' : 'rgba(148,163,184,0.3)', transition: 'color 0.2s' }}>
            <Circle size={16} />
          </button>
          <button onClick={() => onStatusChange(task._id, 'in-progress')} title="In Progress"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: task.status === 'in-progress' ? '#f59e0b' : 'rgba(245,158,11,0.3)', transition: 'color 0.2s' }}>
            <PlayCircle size={16} />
          </button>
          <button onClick={() => onStatusChange(task._id, 'completed')} title="Completed"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: task.status === 'completed' ? '#10b981' : 'rgba(16,185,129,0.3)', transition: 'color 0.2s' }}>
            <CheckCircle size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
