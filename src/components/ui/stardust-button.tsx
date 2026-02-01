import React from 'react';

interface StardustButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  href?: string;
}

export const StardustButton = ({
  children = "Get Access",
  onClick,
  className = "",
  href,
  ...props
}: StardustButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    outline: 'none',
    cursor: 'pointer',
    border: 0,
    position: 'relative',
    borderRadius: '100px',
    backgroundColor: '#2e72ff',
    background: 'linear-gradient(135deg, #4285ff 0%, #2e72ff 50%, #1a5fff 100%)',
    transition: 'all 0.2s ease',
    boxShadow: `
      inset 0 0.3rem 0.9rem rgba(255, 255, 255, 0.4),
      inset 0 -0.1rem 0.3rem rgba(0, 50, 150, 0.5),
      inset 0 -0.4rem 0.9rem rgba(100, 170, 255, 0.4),
      0 0.5rem 2rem rgba(46, 114, 255, 0.5),
      0 1rem 3rem rgba(46, 114, 255, 0.3)
    `,
  };

  const wrapStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#ffffff',
    padding: '20px 60px',
    borderRadius: 'inherit',
    position: 'relative',
    overflow: 'hidden',
  };

  const pStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: 0,
    transition: 'all 0.2s ease',
    transform: 'translateY(2%)',
  };

  const styles = `
    .stardust-button .wrap::before,
    .stardust-button .wrap::after {
      content: "";
      position: absolute;
      transition: all 0.3s ease;
    }

    .stardust-button .wrap::before {
      left: -15%;
      right: -15%;
      bottom: 25%;
      top: -100%;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.15);
    }

    .stardust-button .wrap::after {
      left: 6%;
      right: 6%;
      top: 8%;
      bottom: 50%;
      border-radius: 22px 22px 0 0;
      box-shadow: inset 0 10px 8px -10px rgba(255, 255, 255, 0.8);
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.35) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    .stardust-button:hover {
      transform: translateY(-3px);
      background: linear-gradient(135deg, #5a9bff 0%, #4285ff 50%, #2e72ff 100%);
      box-shadow:
        inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.5),
        inset 0 -0.1rem 0.3rem rgba(0, 50, 150, 0.4),
        inset 0 -0.4rem 0.9rem rgba(130, 190, 255, 0.5),
        0 0.8rem 2.5rem rgba(46, 114, 255, 0.6),
        0 1.5rem 4rem rgba(46, 114, 255, 0.4);
    }

    .stardust-button:hover .wrap::before {
      transform: translateY(-5%);
      background-color: rgba(255, 255, 255, 0.2);
    }

    .stardust-button:hover .wrap::after {
      opacity: 0.7;
      transform: translateY(3%);
    }

    .stardust-button:hover .wrap p {
      transform: translateY(-2%);
    }

    .stardust-button:active {
      transform: translateY(1px);
      box-shadow:
        inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.4),
        inset 0 -0.1rem 0.3rem rgba(0, 50, 150, 0.6),
        inset 0 -0.4rem 0.9rem rgba(100, 170, 255, 0.3),
        0 0.3rem 1.5rem rgba(46, 114, 255, 0.5),
        0 0.8rem 2rem rgba(46, 114, 255, 0.3);
    }
  `;

  const content = (
    <>
      <style>{styles}</style>
      <button
        className={`stardust-button ${className}`}
        style={buttonStyle}
        onClick={onClick}
        {...props}
      >
        <div className="wrap" style={wrapStyle}>
          <p style={pStyle}>
            <span>✦</span>
            {children}
          </p>
        </div>
      </button>
    </>
  );

  if (href) {
    // Check if it's an anchor link (starts with #)
    if (href.startsWith('#')) {
      const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      return (
        <a href={href} onClick={handleClick} style={{ textDecoration: 'none' }}>
          {content}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return content;
};

export default StardustButton;
