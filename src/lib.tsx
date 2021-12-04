import ClipboardJS from "clipboard";
import { useEffect, useRef } from "react";

type CopyToClipboardProps = {
  text: string; 
  onSuccess?: (e: ClipboardJS.Event) => void; 
  onError?: (e: ClipboardJS.Event) => void; 
  style?: React.CSSProperties;
  className?: string;
  title?: string;
}

export const CopyToClipboardButton: React.FC<CopyToClipboardProps> = props => {
  const ref = useRef<any>();

  useEffect(() => {
    if (ref) {
      const clipboard = new ClipboardJS(ref.current, {
        text: () => props.text,
      });

      clipboard.on('success', (e) => props.onSuccess?.(e));
      clipboard.on('error', (e) => props.onError?.(e));

      return () => {
        try {
          clipboard.destroy();
        } catch (e) {}
      };
    }
  }, [ref.current]);


  return (
    <span ref={ref} style={props.style} className={props.className} title={props.title}>
      {props.children}
    </span>
  )
}
type CopyToClipboardWrapperProps = CopyToClipboardProps & {
  button?: React.ReactNode;
}

export const CopyToClipboardWrapper: React.FC<CopyToClipboardWrapperProps> = (props) => {
  return (
    <div style={{ position: 'relative' }}>
      <CopyToClipboardButton
        {...props}
        style={{ 
          position: 'absolute',
          top: '5px',
          right: '5px',
          ...props.style, 
        }}
      >
        {props.button}
      </CopyToClipboardButton>
      {props.children}
    </div>
  )
}