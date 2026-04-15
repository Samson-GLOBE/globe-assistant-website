import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

/**
 * A copy-to-clipboard button with visual feedback.
 * @param {string} label Text display for the button.
 * @param {string} textToCopy The value to be copied to clipboard.
 */
export default function CopyTextButton({ label, textToCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all shadow-md hover:shadow-lg my-2 ${
        copied 
          ? 'bg-success hover:bg-success ring-4 ring-success/20 scale-105' 
          : 'bg-primary hover:bg-primaryDark active:scale-95'
      }`}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? 'Copied Successfully!' : label}
    </button>
  );
}
