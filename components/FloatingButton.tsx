"use client";

import { MessageCircle, Phone, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingButton() {
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    // 위젯 준비 이벤트 리스너
    const handleWidgetReady = (e: any) => {
      setIsWidgetReady(true);
      console.log('Widget ready:', e.detail);
    };

    document.addEventListener('chatWidgetReady', handleWidgetReady);

    // 이미 준비되어 있는지 확인
    const win = window as any;
    if (win.ChatWidget) {
      if (typeof win.ChatWidget === 'object' && typeof win.ChatWidget.open === 'function') {
        setIsWidgetReady(true);
      } else if (typeof win.ChatWidget === 'function') {
        // 함수 큐 방식이면 준비된 것으로 간주
        setIsWidgetReady(true);
      }
    }

    return () => {
      document.removeEventListener('chatWidgetReady', handleWidgetReady);
    };
  }, []);

  const handleChatOpen = () => {
    const win = window as any;

    // 방법 1: ChatWidget.open() 메서드 (완전히 초기화됨)
    if (win.ChatWidget && typeof win.ChatWidget === 'object' && typeof win.ChatWidget.open === 'function') {
      console.log('Opening widget via ChatWidget.open()');
      win.ChatWidget.open();
      return;
    }

    // 방법 2: ChatWidget.isReady() 확인 후 열기
    if (win.ChatWidget && typeof win.ChatWidget === 'object' && typeof win.ChatWidget.isReady === 'function') {
      if (win.ChatWidget.isReady()) {
        console.log('Widget is ready, opening via ChatWidget.open()');
        win.ChatWidget.open();
        return;
      }
    }

    // 방법 3: ChatWidget() 함수 큐 방식 - 직접 호출하지 않고 로딩 대기
    if (typeof win.ChatWidget === 'function') {
      console.log('ChatWidget is loading... waiting for initialization');

      // 위젯이 변이될 때까지 대기 (큐 방식 호출 절대 금지 - ReferenceError 원인)
      let attempts = 0;
      const retryOpen = () => {
        attempts++;
        if (win.ChatWidget && typeof win.ChatWidget === 'object' && typeof win.ChatWidget.open === 'function') {
          console.log('Widget fully initialized, calling ChatWidget.open()');
          win.ChatWidget.open();
          return;
        }
        if (attempts < 100) { // 10초 대기
          setTimeout(retryOpen, 100);
        } else {
          console.error('Widget failed to initialize within time limit');
        }
      };

      // 약간의 지연 후 폴링 시작
      setTimeout(retryOpen, 200);
      return;
    }

    console.warn('ChatWidget not found, please wait for it to load');

    // 위젯이 준비될 때까지 대기
    if (!isWidgetReady) {
      const handleReady = () => {
        handleChatOpen();
        document.removeEventListener('chatWidgetReady', handleReady);
      };
      document.addEventListener('chatWidgetReady', handleReady);

      setTimeout(() => {
        document.removeEventListener('chatWidgetReady', handleReady);
      }, 10000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      <button
        onClick={handleChatOpen}
        className="w-16 h-16 bg-black border-4 border-black shadow-brutal hover:shadow-brutal-sm transition-all flex items-center justify-center group hover:translate-x-1 hover:translate-y-1"
        aria-label="채팅 상담"
      >
        <MessageSquare size={28} className="text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
