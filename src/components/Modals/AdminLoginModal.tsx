import React, { useState } from 'react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'sourav123') {
      setError('');
      setPassword('');
      onSuccess();
      onClose();
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '380px' }}>
        <h3>Admin Authentication</h3>
        <p style={{ color: 'var(--text-1)', fontSize: '14px', marginBottom: '16px' }}>
          Enter the admin password to enable project editing and management.
        </p>

        {error && (
          <div style={{ color: '#f87171', fontSize: '13px', marginBottom: '12px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="admin-pw">Password</label>
          <input
            id="admin-pw"
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            autoFocus
          />

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setPassword('');
                setError('');
                onClose();
              }}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Unlock
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
