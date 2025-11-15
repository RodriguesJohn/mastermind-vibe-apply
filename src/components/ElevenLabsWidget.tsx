import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'agent-id': string },
        HTMLElement
      >;
    }
  }
}

const ElevenLabsWidget: React.FC = () => {
  return <elevenlabs-convai agent-id="agent_0801ka4c94v1ftvteva6ejscpkv4" />;
};

export default ElevenLabsWidget;
