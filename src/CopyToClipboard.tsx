import ClipboardJS from "clipboard";
import { useEffect, useRef } from "react";

type CopyToClipboardProps = {
  text: string; 
  onSuccess?: (e: ClipboardJS.Event) => void; 
  onError?: (e: ClipboardJS.Event) => void; 
  style?: React.CSSProperties;
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
    <div 
        ref={ref}
        style={{
          fontSize: 14,
          display: 'flex',
          content: `url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktY2xpcGJvYXJkIiB2aWV3Qm94PSIwIDAgMTYgMTYiPg0KICA8cGF0aCBkPSJNNCAxLjVIM2EyIDIgMCAwIDAtMiAyVjE0YTIgMiAwIDAgMCAyIDJoMTBhMiAyIDAgMCAwIDItMlYzLjVhMiAyIDAgMCAwLTItMmgtMXYxaDFhMSAxIDAgMCAxIDEgMVYxNGExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVYzLjVhMSAxIDAgMCAxIDEtMWgxdi0xeiIvPg0KICA8cGF0aCBkPSJNOS41IDFhLjUuNSAwIDAgMSAuNS41djFhLjUuNSAwIDAgMS0uNS41aC0zYS41LjUgMCAwIDEtLjUtLjV2LTFhLjUuNSAwIDAgMSAuNS0uNWgzem0tMy0xQTEuNSAxLjUgMCAwIDAgNSAxLjV2MUExLjUgMS41IDAgMCAwIDYuNSA0aDNBMS41IDEuNSAwIDAgMCAxMSAyLjV2LTFBMS41IDEuNSAwIDAgMCA5LjUgMGgtM3oiLz4NCjwvc3ZnPg==')`,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 3,
          background: 'rgba(255, 255, 255, 1)',
          borderRadius: '5px',
          color: 'red',
          fontWeight: 'bold',
          cursor: 'pointer',
          width: 24,
          height: 24,
          opacity: .5,
          ...props.style,
        }}
      />
  )
}


export const CopyToClipboardWrapper: React.FC<CopyToClipboardProps> = (props) => {
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
      />
      {props.children}
    </div>
  )
}