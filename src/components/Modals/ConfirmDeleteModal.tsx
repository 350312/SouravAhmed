import React from 'react';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  projectTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  projectTitle,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-bg" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '400px' }}>
        <h3>Delete Project</h3>
        <p style={{ color: 'var(--text-1)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
          Are you sure you want to delete <b>&ldquo;{projectTitle}&rdquo;</b>? This action will remove it from your portfolio.
        </p>
        <div className="modal-actions">
          <button type="button" className="btn btn-ghost" onClick={onCancel}>
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ background: 'linear-gradient(90deg, #ef4444, #dc2626)' }}
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
