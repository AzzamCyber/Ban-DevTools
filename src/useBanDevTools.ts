import { useEffect, useRef } from 'react';

export interface UseBanDevToolsOptions {
  /**
   * Callback fired when DevTools might be detected.
   * Note: Detection is primarily based on the debugger trap which pauses execution.
   */
  onDetect?: () => void;
  /**
   * Whether to disable right-click (context menu).
   * @default true
   */
  disableRightClick?: boolean;
  /**
   * Whether to disable common developer shortcuts (F12, Ctrl+Shift+I, etc).
   * @default true
   */
  disableShortcuts?: boolean;
  /**
   * Whether to run an infinite debugger loop to freeze the console.
   * @default true
   */
  debuggerLoop?: boolean;
  /**
   * The URL to redirect to when DevTools are detected or shortcuts are used.
   * @default 'https://www.azzamcodex.site/'
   */
  redirectUrl?: string;
}

export function useBanDevTools(options: UseBanDevToolsOptions = {}) {
  const {
    onDetect,
    disableRightClick = true,
    disableShortcuts = true,
    debuggerLoop = true,
    redirectUrl = 'https://www.azzamcodex.site/',
  } = options;

  const onDetectRef = useRef(onDetect);

  useEffect(() => {
    onDetectRef.current = onDetect;
  }, [onDetect]);

  const triggerDetect = () => {
    if (onDetectRef.current) {
      onDetectRef.current();
    }
    if (redirectUrl && typeof window !== 'undefined') {
      window.location.href = redirectUrl;
    }
  };

  useEffect(() => {
    // 1. Disable Right Click
    const handleContextMenu = (e: MouseEvent) => {
      if (disableRightClick) {
        e.preventDefault();
      }
    };

    // 2. Disable Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!disableShortcuts) return;

      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }

      // Ctrl+Shift+I (Windows/Linux) or Cmd+Opt+I (Mac)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
      }

      // Ctrl+Shift+J (Windows/Linux) or Cmd+Opt+J (Mac)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
      }

      // Ctrl+Shift+C (Windows/Linux) or Cmd+Opt+C (Mac)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
      }

      // Ctrl+U (Windows/Linux) or Cmd+Opt+U (Mac) - View Source
      if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('contextmenu', handleContextMenu);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('contextmenu', handleContextMenu);
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [disableRightClick, disableShortcuts]);

  useEffect(() => {
    if (!debuggerLoop) return;

    let isRunning = true;

    // The debugger trap
    // When devtools is open, this will pause execution.
    // We calculate the time difference to infer if devtools might be open.
    const trap = () => {
      if (!isRunning) return;
      const start = new Date().getTime();
      // eslint-disable-next-line no-debugger
      debugger;
      const end = new Date().getTime();
      if (end - start > 100) {
        // Debugger was likely hit
        triggerDetect();
      }
      
      // 2. Resize Heuristic Check
      // If devtools is docked, it takes up window space.
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      if (widthThreshold || heightThreshold) {
        triggerDetect();
      }

      setTimeout(trap, 100);
    };

    // Run trap
    trap();

    return () => {
      isRunning = false;
    };
  }, [debuggerLoop]);
}
